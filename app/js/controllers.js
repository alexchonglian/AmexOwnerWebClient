'use strict';

/* Controllers */

angular.module('dormCatApp.controllers', []).
  controller('LoginCtrl', ['$scope','$http','$location','$window','$sce',function($scope, $http, $location, $window, $sce) {
  		$scope.submitLogin = function()
  		{
  			$http({
  				method: 'GET',
  				url: "http://1.smg-server.appspot.com/developers/"+$scope.devId+"?password="+$scope.password
  				}).
  				success(function(returnVal)
  				{
  					if(returnVal.error)
  					{
  						console.log("Error: " + returnVal.error);
              if(returnVal.error == "WRONG_PASSWORD")
              {
                $scope.userInfo = $sce.trustAsHtml("Login failed - Password incorrect");
              }
              else if(returnVal.error == "WRONG_DEVELOPER_ID")
              {
                $scope.userInfo = $sce.trustAsHtml("Login failed - ID not found");
              }
  					}
  					else
  					{
  						console.log("Email: " + returnVal.email);
  						console.log("Password: " + returnVal.password);
              console.log($location.url());
              $window.location.href = 'http://1-dot-amex-pos-owner.appspot.com/loggedin.html';
  					}
  				}).
  				error(function(returnVal)
  				{
  					console.log("LOGIN DEVELOPER CALL FAILED");
  				});
  		}
  	}])
  	.controller('SignupCtrl', ['$scope','$http','$location','$sce', function($scope, $http, $location, $sce) {
	$scope.createDeveloper = function()
  		{
  			var jsonData = 
  			{
  				"email": $scope.email,
				"password": $scope.password
  			};
  			$http({
  				method: 'POST',
  				url: "http://1.smg-server.appspot.com/developers/",
  				data: JSON.stringify(jsonData),
  				dataType: 'json',
  				headers: {
  					'Content-Type': 'application/json'
  				}
  				}).
  				success(function(returnVal)
  				{
  					if(returnVal.error)
  					{
              console.log("Error: " + returnVal.error);
              if(returnVal.error == "EMAIL_EXISTS")
              {
                $scope.userInfo = $sce.trustAsHtml("Sign up failed - Email already registered");
              }
              else if(returnVal.error == "MISSING_INFO")
              {
                $scope.userInfo = $sce.trustAsHtml("Sign up failed - Email or password not entered");
              }
  					}
  					else
  					{
  						console.log("Access Signature: " + returnVal.accessSignature);
  						console.log("Developer ID: " + returnVal.developerId);
              $scope.userInfo = $sce.trustAsHtml("Sign up succeeded!<br>New owner ID - "+returnVal.developerId);
  					}
  				}).
  				error(function(data, status, headers, config)
  				{
  					console.log("CREATE DEVELOPER CALL FAILED");
  				});
  		}
  	}])
    .controller('InfoGameCtrl', ['$scope',function($scope) {
		var games = [
			{
				'name':'alex',
				'url':'http://www.google.com',
				'stat': 123
			}, 

			{
				'name':'bob',
				'url':'http://www.google.com',
				'stat': 999
			}, 

			{
				'name':'chris',
				'url':'http://www.google.com',
				'stat': 321
			}
		]

		$scope.games = games;

	}]);
