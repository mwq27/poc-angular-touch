/**
 * Created by mwoods0 on 12/8/13.
 */
'use strict';
angular.module('css3ExperimentsApp', ['ngRoute', 'ngAnimate','ngTouch']).config(['$routeProvider', function($routeProvider){
		$routeProvider.when ('/',{
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		}).otherwise({
				redirectTo: '/'
		})
}]);