/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="layout/index.controller.ts" />
/// <reference path="app.config.ts" />

var myApp = angular.module("CrowdfundingApp", [
							'ngSanitize',
							'ui.select',
							'ui.router',
							'pascalprecht.translate'
							]);
//myApp.controller("pepe", Router.prototype.config);








myApp.controller("IndexController", IndexController);
myApp.config(Config);


