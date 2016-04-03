/// <reference path="../../../typings/tsd.d.ts" />


	class IndexController {
		constructor($translate) {
			var vm = <any> this;
			vm.version = 'v0.01';
			console.log('Hello World!!');

			vm.changeI18nToEn = function() {
				$translate.use("en");
			}
			vm.changeI18nToEs = function() {
				$translate.use("es");
			}
		}
	}

