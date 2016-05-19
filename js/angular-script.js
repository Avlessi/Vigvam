var app = angular.module("Vigvam", ["ngRoute"])
				 .config(function ($routeProvider){
				 	$routeProvider
				 		.when("/news", {
				 			templateUrl: "pages/news.html"
				 		})
				 		.when("/quests", {
				 			templateUrl: "pages/quests.html"
				 		})
				 		.when("/about", {
				 			templateUrl: "pages/about.html"
				 		})
				 });