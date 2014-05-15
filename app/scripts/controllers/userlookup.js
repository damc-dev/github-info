'use strict';

angular.module('githubInfoApp')
  .controller('UserlookupCtrl', ['$scope', '$http', function ($scope, $http) {
      $scope.username = 'damc-dev';
      $scope.req = {};
      $scope.lookupUser = function(form) {
        $scope.submitted = true;

        if(form.$invalid){
          return;
        }
        $scope.req.username = $scope.username;

        $http.get('https://api.github.com/users/' + $scope.req.username )
          .success(function(data, status, headers, config) {
            $scope.user = data;
          })
          .error(function(data, status, headers, config) {
            console.error('Error: AJAX request failed.');
          });
        $http.get('https://api.github.com/users/' + $scope.req.username + '/starred?per_page=100' )
          .success(function(data, status, headers, config) {
            $scope.stars = data;
            if(data.length == 100)
              $scope.stars.total = '100+';
            else
              $scope.stars.total = data.length;

          })
          .error(function(data, status, headers, config) {
            console.error('Error: AJAX request failed.');
          });
        $http.get('https://api.github.com/users/' + $scope.req.username + '/repos?per_page=100')
          .success(function(data, status, headers, config) {
            $scope.repos = data;
          })
          .error(function(data, status, headers, config) {
            console.error('Error: AJAX request failed.');
          });
      };
    }] );
