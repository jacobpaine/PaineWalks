angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

$scope.pedometer;
$scope.count = 0;

var successHandler = function (pedometerData) {
  $scope.pedometer = pedometerData.numberOfSteps;
  console.log("pedometerData", pedometerData);
  $scope.$apply();
  }

  var errorHandler = function (pedometerData) {
    console.log(pedometerData)
  };
  
  $scope.pressButton = function(){
    $scope.count++;
  } 


pedometer.startPedometerUpdates(successHandler, errorHandler);


})

// .controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

.controller('AccountCtrl', ['$scope', function($scope) {
//   $scope.pedometer;

// var successHandler = function (pedometerData) {
//   $scope.pedometer = pedometerData.numberOfSteps;
//   console.log("pedometerData", pedometerData);
//   $scope.$apply();
//   }

//   var errorHandler = function (pedometerData) {
//     console.log(pedometerData)
//   };

// pedometer.startPedometerUpdates(successHandler, errorHandler);

  $scope.settings = {
    enableFriends: true,
  };

}]);