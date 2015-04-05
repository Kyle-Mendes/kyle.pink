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
}])
.controller('DozenCtrl', ['$scope', function($scope) {
	var reduceFraction = function(dividend, divisor) {
		for(var i = 2; i <= dividend; i++) {
			if(dividend % i == 0 && divisor % i == 0) {
				dividend = dividend / i;
				divisor = divisor / i;
				return reduceFraction(dividend, divisor);
			}
		}
		return [dividend, divisor];
	}
	$scope.calculateDozen = function(input) {
		// Reset all of our scope variables
		$scope.whole = null;
		$scope.fraction = null;

		var remainder = input % 12;
		var divisor = 12;

		var fraction = reduceFraction(remainder, divisor);

		$scope.fraction = fraction[0] + " / " + fraction[1];

		if (input > 12) {
			$scope.whole = Math.floor(input/12);
		}
	}
}]);
