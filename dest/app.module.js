/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="layout/index.controller.ts" />
/// <reference path="app.routers.ts" />
var myApp = angular.module("CrowdfundingApp", ['ngSanitize', 'ui.select', 'ui.router']);
//myApp.controller("pepe", Router.prototype.config);
myApp.controller("IndexController", IndexController);
/*myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/home.html"
        });
});*/ 
