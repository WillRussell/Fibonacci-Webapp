'use strict';

/*Initialize the App*/
var fibonacciApp = angular.module('fibonacciApp', [
  'ngAnimate',
  'ngMaterial',
  'ui.router'
]);


/*App Configuration*/
fibonacciApp.config(function(
  $stateProvider,
  $urlRouterProvider,
  $mdThemingProvider,
  $locationProvider,
  $mdAriaProvider) {


  /*Configure state-based routing */
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'main_ctrl',
      controllerAs: 'vm'
    })
    .state('results', {
      parent: 'main',
      url: '{id:[0-9]{1,4}}', //prevent requests for numbers above 9,999
      templateUrl: 'app/results/results.html',
      controller: 'results_ctrl',
      controllerAs: 'vm'
    });


  /* Set angular-material theme */
  $mdThemingProvider.theme('default')
    .primaryPalette('blue', { 'default': '600' })
    .warnPalette('red', { 'default': '700' });


  $urlRouterProvider.otherwise('/'); // keep urls clean
  $locationProvider.hashPrefix('');
  $mdAriaProvider.disableWarnings(); // silence aria-related console warnings
});


/*Start it*/
fibonacciApp.run();