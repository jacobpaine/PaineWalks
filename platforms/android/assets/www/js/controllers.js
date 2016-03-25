angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', ['$scope', function($scope) {
  $scope.pedometer;
  $scope.something = "thing";

var successHandler = function (pedometerData) {
    $scope.pedometer = pedometerData.numberOfSteps;
    $scope.something = pedometerData.numberOfSteps;

      // $scope.stepCount = function(){
      //     $scope.steps = 'Hi ' + pedometer.numberOfSteps + $scope.thing;
  console.log("pedometerData", pedometerData);
  console.log("pedometerData.numberOfSteps", pedometerData.numberOfSteps);
  $scope.$apply();
  }

  var errorHandler = function (pedometerData) {
    console.log(pedometerData)
  };

pedometer.startPedometerUpdates(successHandler, errorHandler);

  $scope.settings = {
    enableFriends: true,
    enableWalk: false
  };

}]);