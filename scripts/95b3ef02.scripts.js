"use strict";angular.module("githubInfoApp",["ui.bootstrap","ngResource"]).constant("VERSION","1.0").run(["VERSION","$rootScope",function(a,b){b.version=a}]),angular.module("githubInfoApp").controller("MainCtrl",["$scope",function(){}]),angular.module("githubInfoApp").controller("UserlookupCtrl",["$scope","$http",function(a,b){a.username="damc-dev",a.req={},a.lookupUser=function(c){console.log(c),a.submitted=!0,c.$invalid||(a.req.username=a.username,b.get("https://api.github.com/users/"+a.req.username).success(function(b){console.log(b),a.user=b}).error(function(){console.error("Error: AJAX request failed.")}),b.get("https://api.github.com/users/"+a.req.username+"/starred?per_page=100").success(function(b){console.log(b),a.stars=b,a.stars.total=100==b.length?"100+":b.length}).error(function(){console.error("Error: AJAX request failed.")}),b.get("https://api.github.com/users/"+a.req.username+"/repos?per_page=100").success(function(b){console.log(b),a.repos=b}).error(function(){console.error("Error: AJAX request failed.")}))}}]);
