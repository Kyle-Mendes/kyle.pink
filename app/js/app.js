'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
		'ngRoute',
		'myApp.filters',
		'myApp.services',
		'myApp.directives',
		'myApp.controllers'
		])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'LandingCtrl'});
	$routeProvider.when('/games', {templateUrl: 'partials/games.html', controller: 'GamesCtrl'});
	$routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
	$routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
	$routeProvider.when('/dozen', {templateUrl: 'partials/dozen.html', controller: 'DozenCtrl'});
	$routeProvider.when('/gg', {templateUrl: 'partials/gg.html', controller: 'GGCtrl'});

	$routeProvider.otherwise({redirectTo: '/'});
}])
.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$httpProvider.defaults.headers.common["Accept"] = "application/json";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
}]);
