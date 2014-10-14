define(function () {

	'use strict';

	return [
		{
			name: "BuildReactor (fake builds)",
			items: [
				{
					name: "Success",
					group: "Normal",
					isBroken: false,
					url: "http://ci.openmrs.org/browse/FUNC-PERF-4",
					isRunning: false
				}, {
					name: "Failed",
					group: "Normal",
					isBroken: true,
					url: "http://ci.openmrs.org/browse/FUNC-PERF-4",
					isRunning: false
				}, {
					name: "Unstable",
					group: "Normal",
					isBroken: true,
					url: "http://ci.openmrs.org/browse/FUNC-PERF-4",
					isRunning: false,
					tags: [{ name: 'Unstable', type: 'warning' }]
				}, {
					name: "Success",
					group: "Building",
					isBroken: false,
					url: "http://ci.openmrs.org/browse/FUNC-PERF-4",
					isRunning: true
				}, {
					name: "Failed",
					group: "Building",
					isBroken: true,
					url: "http://ci.openmrs.org/browse/FUNC-PERF-4",
					isRunning: true
				}, {
					name: "Unstable",
					group: "Building",
					isBroken: true,
					url: "http://ci.openmrs.org/browse/FUNC-PERF-4",
					isRunning: true,
					tags: [{ name: 'Unstable', type: 'warning' }]
				}, {
					name: "Success",
					group: "Disabled",
					isBroken: false,
					isDisabled: true,
					url: "http://ci.openmrs.org/browse/FUNC-PERF-4",
					isRunning: false
				}, {
					name: "Failed",
					group: "Disabled",
					isBroken: true,
					isDisabled: true,
					url: "http://ci.openmrs.org/browse/FUNC-PERF-4",
					isRunning: false
				}
			]
		}, {
			name: "BuildReactor (fake offline builds)",
			items: [
				{
					name: "Failed building offline",
					group: "Offline",
					error: { name: 'Error', message: 'Ajax error' },
					isBroken: true,
					url: null,
					isRunning: true
				}, {
					name: "Success building offline",
					group: "Offline",
					error: { name: 'Error', message: 'Ajax error' },
					isBroken: false,
					url: null,
					isRunning: true
				}, {
					name: "Failed offline",
					group: "Offline",
					error: { name: 'Error', message: 'Ajax error' },
					isBroken: true,
					url: null,
					isRunning: false
				}, {
					name: "Success offline",
					group: "Offline",
					error: { name: 'Error', message: 'Ajax error' },
					isBroken: false,
					url: null,
					isRunning: false
				}, {
					name: "Success disabled offline",
					group: "Offline",
					error: { name: 'Error', message: 'Ajax error' },
					isBroken: false,
					url: null,
					isRunning: false,
					isDisabled: true
				}, {
					name: "Broken disabled offline",
					group: "Offline",
					error: { name: 'Error', message: 'Ajax error' },
					isBroken: true,
					url: null,
					isRunning: false,
					isDisabled: true
				}
			]
		}
	];
});