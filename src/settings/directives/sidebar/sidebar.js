define([
	'settings/app',
	'common-ui/core',
	'htmlSortable'
], function (app, core) {
	'use strict';

	app.directive('sidebar', function ($location) {
		return {
			scope: {
				services: '=',
				configs: '=',
				currentService: '=',
				currentConfig: '=',
				view: '='
			},
			templateUrl: 'src/settings/directives/sidebar/sidebar.html',
			controller: function ($scope, $element, $attrs, $transclude) {

				$scope.sortableCallback = function (startModel, destModel, start, end) {
					var items = destModel.map(function (service) {
						return service.name;
					});
					core.setOrder(items);
				};

				$scope.$watch('services', function (services) {
					$scope.serviceIcons = {};
					(services || []).forEach(function(service) {
						$scope.serviceIcons[service.baseUrl] = service.icon;
					});
				});
			}
		};
	});
});
