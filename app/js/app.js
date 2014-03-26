'use strict';


// Declare app level module which depends on filters, and services
angular.module('dormCatApp', [
  'ngRoute',
  'ngAnimate',
  'dormCatApp.filters',
  'dormCatApp.services',
  'dormCatApp.directives',
  'dormCatApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
  $routeProvider.when('/signup', {templateUrl: 'partials/signup.html', controller: 'SignupCtrl'});

  $routeProvider.when('/dash', {templateUrl: 'partials/dash.html', controller: 'DashCtrl'});
  $routeProvider.when('/bugs', {templateUrl: 'partials/bugs.html', controller: 'BugsCtrl'});

  $routeProvider.when('/home', {templateUrl: 'partials/ownerhome.html', controller: 'InfoGameCtrl'});
  $routeProvider.when('/roles', {templateUrl: 'partials/ownerroles.html', controller: 'InfoGameCtrl'});
  $routeProvider.when('/menu', {templateUrl: 'partials/ownermenu.html', controller: 'InfoGameCtrl'});
  $routeProvider.when('/report', {templateUrl: 'partials/ownerreport.html', controller: 'InfoGameCtrl'});
  $routeProvider.when('/settings', {templateUrl: 'partials/ownersetting.html', controller: 'InfoGameCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
