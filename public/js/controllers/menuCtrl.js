'use strict';

/**
 * The menu controller:
 * - sets the menu options, should we do it dynamic so it generates the menu like: width = 1/elements * 100 ?
 * - exposes the model to the template and provides event handlers
 */

habitrpg.controller('MenuCtrl',
  ['$scope', '$rootScope', '$location', 'User',
  function($scope, $rootScope, $location, User) {

    $scope.sync = function(){
      User.user._v--;
      User.log({})
    }

    $scope.gotoOptions = function(){
      $scope.viewingOptions = true;
      $location.path('/options');
    }

    $scope.gotoTasks = function(){
      $scope.viewingOptions = false;
      $location.path('/tasks')
    }


    //FIXME where to implement this in rewrite?

    $scope.refreshing = function () {
      User.settings.fetching ? "spin" : ""
    };

    $scope.queueLength = function () {
      User.settings.sync.queue.length || User.settings.sync.sent.length
    };

  }
]);
