/// <reference path="app.routers.ts" />

class Config{
	constructor($stateProvider,
				$urlRouterProvider, 
				$locationProvider,
				$translateProvider) {
		var router = new Router($stateProvider, $urlRouterProvider, $locationProvider);
		$translateProvider.useStaticFilesLoader({
			prefix: '/i18n/',
			suffix: '.json'
		});
        $translateProvider.preferredLanguage('es');
        $translateProvider.useSanitizeValueStrategy('');//argument => sanitize
	}
}