angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  document.addEventListener("deviceready", function () {
    $scope.steps;
    $scope.resetCount = 0;
    $scope.total = 0;

    var successHandler = function (pedometerData) {
      $scope.steps = pedometerData.numberOfSteps - $scope.total;
      console.log("pedometerData", pedometerData);
      $scope.$apply();
      $scope.$digest();
      }

      var errorHandler = function (pedometerData) {
        console.log(pedometerData)
      };

      $scope.resetButton = function(){
        $scope.resetCount++;
          if ($scope.steps > 1) {
            console.log("Greater than 1");
            $scope.total += $scope.steps
            $scope.steps = 0;
          } else {
            console.log("Walk somewhere.");
          }
      } 

    pedometer.startPedometerUpdates(successHandler, errorHandler);
  }, false);
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