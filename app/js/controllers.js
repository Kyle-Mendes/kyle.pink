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
  .controller('PortfolioCtrl', ['$scope', function($scope) {
	  $scope.portfolio = [
		  {
			  title:'Todo It',
			  link: 'http://todo.kyle.pink/',
			  shortDescription: "Many people dive into Angular with some sort of todo app.  I wasn't so different.  But, after my first attempt, I tried again.  I refactored the code, added user authentication with Firebase, and learned a lot.",
			  longDescription: "Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore.",
			  expanded: false
		  },
		  {
			  title:'Item 2', 
			  shortDescription: "Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore.",
			  longDescription: "Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore.",
			  expanded: false
		  },
		  {
			  title:'Item 3', 
			  shortDescription: "Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore.",
			  longDescription: "Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore. Lorem ipsum dolore.",
			  expanded: false
		  }
  ];
	  

  }]);
