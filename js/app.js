/*
	* You must include the dependency on 'ngMaterial'
*/
var app = angular.module('MomentsByBilal', ['ngMaterial']);

app.controller('mainPageController', function($scope, $mdSidenav, $http) {
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};
});