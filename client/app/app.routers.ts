

class Router{
	constructor($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "views/home.html"
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
