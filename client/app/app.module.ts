/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="layout/index.controller.ts" />

var myApp = angular.module("CrowdfundingApp", ['ngSanitize','ui.select','ui.router']);
//myApp.controller("pepe", Router.prototype.config);


myApp.controller("IndexController", IndexController);