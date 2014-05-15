'use strict';

angular
  .module('githubInfoApp', [
    'ui.bootstrap',
    'ngResource'
  ])
  .constant('VERSION', '1.0')
  .run(['VERSION', '$rootScope', function (VERSION, $rootScope) {
    $rootScope.version = VERSION;

  }]);
