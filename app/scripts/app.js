'use strict';

/**
 * @ngdoc overview
 * @name samajPortalApp
 * @description
 * # samajPortalApp
 *
 * Main module of the application.
 */
angular
  .module('samajPortalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      }).when('/register',{
        templateUrl: 'views/registration.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      }).when('/profile',{
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'profile'
      }).when('/browse',{
        templateUrl: 'views/browse.html',
        controller: 'browseCtrl',
        controllerAs: 'browse'
      })
      .when('/contacts',{
        templateUrl: 'views/contacts.html',
        controller: 'contactCtsrl',
        controllerAs: 'contacts'
      })
      
      .otherwise({
        redirectTo: '/login'
      });
  });
