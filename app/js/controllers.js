'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('SiteCtrl', ['$scope', '$location', function($scope, $location) {
	  $scope.dismissed = false; //property to help remove the hire-me banner

	  $scope.activePage = function(route) { //function to get current page for active class
		  return route === $location.path(); //returns true for the route corresponding to the current page
	  };
  }])
  .controller('LandingCtrl', [function() {

  }])
  .controller('AboutCtrl', [function() {

  }])
  .controller('ContactCtrl', [function() {

  }])
  .controller('GamesCtrl', ['$scope', function($scope) {
  }]);
