/*
	* You must include the dependency on 'ngMaterial'
*/
var app = angular.module('MomentsByBilal', ['ngMaterial']);

app.controller('mainPageController', function($scope, $mdSidenav, $http) {
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};

	$scope.images = {
		image1: "https://static.wixstatic.com/media/221088_dc572bdaf76349529745e154be72eeb8~mv2_d_2048_1421_s_2.jpg/v1/fill/w_808,h_606,al_c,q_85,usm_0.66_1.00_0.01/221088_dc572bdaf76349529745e154be72eeb8~mv2_d_2048_1421_s_2.jpg",
		image2: "https://static.wixstatic.com/media/221088_f03f5dad3d35434096056f1d2f1ab254~mv2_d_2048_1371_s_2.jpg/v1/fill/w_808,h_606,al_c,q_85,usm_0.66_1.00_0.01/221088_f03f5dad3d35434096056f1d2f1ab254~mv2_d_2048_1371_s_2.jpg",
		image3: "https://static.wixstatic.com/media/221088_20ebdb202cca44cd98b393a65d63332e~mv2_d_4898_3266_s_4_2.jpg/v1/fill/w_808,h_606,al_c,q_85,usm_0.66_1.00_0.01/221088_20ebdb202cca44cd98b393a65d63332e~mv2_d_4898_3266_s_4_2.jpg",
		image4: "https://static.wixstatic.com/media/221088_bebf53b099b44617b230967026852d91~mv2_d_5654_3769_s_4_2.jpg/v1/fill/w_808,h_606,al_c,q_85,usm_0.66_1.00_0.01/221088_bebf53b099b44617b230967026852d91~mv2_d_5654_3769_s_4_2.jpg"
	}
});