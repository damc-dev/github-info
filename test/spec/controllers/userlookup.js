'use strict';

describe('Controller: UserlookupCtrl', function () {

  // load the controller's module
  beforeEach(module('githubInfoApp'));

  var UserlookupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserlookupCtrl = $controller('UserlookupCtrl', {
      $scope: scope
    });
  }));

  it('should have damc-dev as the username', function () {
    expect(scope.username).toEqual('damc-dev');
  });
});
