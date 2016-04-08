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
          $scope.message = "I think I'll stay forever."
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
          $scope.info = "There's nothing worse than a bad case of pocket Critter..";
        } else if($scope.infoCount === 1 ){
          $scope.infoMsg = "1. Looks like you picked up a pocket Critter somewhere.";
        } else if($scope.infoCount === 2 ){
          $scope.infoMsg = "2. He's just a little one, so no big deal.";
        } else if($scope.infoCount === 3 ){
          $scope.infoMsg = "3. Just feed him the energy you store up while you walk.";
        } else if($scope.infoCount === 4 ){
          $scope.infoMsg = "4. If you feed him enough, maybe he'll go away.";
        } else {
          $scope.infoMsg = "There's nothing worse than a bad case of pocket Critter.";
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

