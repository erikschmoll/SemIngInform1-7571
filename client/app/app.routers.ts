

class Router{
	constructor($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise("/");
		$locationProvider.html5Mode(true);
		$stateProvider
			// HOME STATES AND NESTED VIEWS ========================================
			.state('home', {
				url: '/',
				templateUrl: "app/views/home.html"
			})

			// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
			.state('about', {
				// we'll get to this in a bit       
			});
	}
/*
	public routerConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "views/home.html"
			});
	}*/

}
