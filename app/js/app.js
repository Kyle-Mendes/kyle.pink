'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
		'ngRoute',
		'myApp.filters',
		'myApp.services',
		'myApp.directives',
		'myApp.controllers'
		]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'LandingCtrl'});
	$routeProvider.when('/portfolio', {templateUrl: 'partials/portfolio.html', controller: 'PortfolioCtrl'});
	$routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
	$routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});

	$routeProvider.otherwise({redirectTo: '/'});
}]);
