angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  document.addEventListener("deviceready", function () {
    $scope.steps;
    $scope.resetCount = 0;
    $scope.feedCount = 0;
    $scope.feedAmount = 0;
    $scope.total = 0;
    $scope.message = "I'm hungry!";
    $scope.infoCount = 0;
    $scope.info = "There's nothing worse than a bad case of Lich."

    var successHandler = function (pedometerData) {
      $scope.steps = pedometerData.numberOfSteps - $scope.total;

      console.log("pedometerData", pedometerData);

        if ($scope.steps <= 10){
          $scope.message = "No energy! Still hungry!"
        } else if($scope.steps <= 25 && $scope.steps > 10) {
          $scope.message = "Feed me!!"
        } else if($scope.steps <= 35 && $scope.steps > 25) {
          $scope.message = "Meh. You could do more."  
        } else if($scope.steps <= 45 && $scope.steps > 35) {
          $scope.message = "Feeling good!"
        } else if($scope.steps <= 55 && $scope.steps > 45) {
          $scope.message = "Wow you really stuck with it!"
        } else {
          $scope.message = "Hungry!!"
        }
      $scope.$apply();
      }

      var errorHandler = function (pedometerData) {
        console.log(pedometerData)
      };

      $scope.info = function(){
        $scope.infoCount++
        console.log("infoCount", $scope.infoCount);
        if($scope.infoCount <= 0){
          $scope.info = "There's nothing worse than a bad case of pocket Lich..";
        } else if($scope.infoCount === 1 ){
          $scope.infoMsg = "1. Looks like you picked up a pocket Lich somewhere.";
        } else if($scope.infoCount === 2 ){
          $scope.infoMsg = "2. He's just a little one, so no big deal.";
        } else if($scope.infoCount === 3 ){
          $scope.infoMsg = "3. Just feed him the energy you store up while you walk.";
        } else if($scope.infoCount === 4 ){
          $scope.infoMsg = "4. If you feed him enough, maybe he'll go away.";
        } else {
          $scope.infoMsg = "There's nothing worse than a bad case of pocket Lich.";
        }
      }
        $scope.resetButton = function(){
          $scope.total += $scope.steps;
          $scope.infoMsg = " ";
          $scope.infoCount= 0;
          $scope.message = " ";
          $scope.steps = 0;
          console.log("Reset game."); 
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