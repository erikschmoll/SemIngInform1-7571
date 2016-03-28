

class Router{

	constructor(){

	}

    public config(){
		console.log('hola mundo');
	}

	private routerConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/root");
		$stateProvider
			.state('root', {
				url: "/",
				templateUrl: "partials/state1.html"
			});
	}

}
