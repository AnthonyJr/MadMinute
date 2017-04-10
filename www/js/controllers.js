angular.module('starter.controllers', ['ionic'])

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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ListCtrl', function($scope,$ionicHistory){
  $scope.items = [{
    id: 0,
    name: "Addition", 
    pic: "img/plus.jpg"
  }, {
    id: 1,
    name: "Multiplication",
    pic: "img/cross.jpg"
  }, {
    id: 2, 
    name: "Division",
    pic: "img/divide.jpg"
  }, {
    id: 3, 
    name: "Subtraction",
    pic: "img/sub.jpg"
  }];
})

.controller('AddCtrl', function($scope, $ionicPopup, $timeout, $location,$state, $ionicHistory){
  $scope.backgroundImage = "img/chalkboard.jpg";
  $scope.score = 0;
  $scope.topLeft = 0;
  $scope.topMiddle = 0;
  $scope.topRight = 0;
  $scope.middleLeft = 0; 
  $scope.middleMiddle = 0; 
  $scope.middleRight = 0; 
  $scope.bottomLeft = 0;
  $scope.bottomMiddle = 0; 
  $scope.bottomRight = 0; 
  $scope.topNum = 0; 
  $scope.botNum = 0; 
  setTimeout(quit, 60000);

  $scope.checkNum = function(e) {
    if (e === ($scope.topNum + $scope.botNum)){
      console.log("correct: " + e);
      // if ($scope.superClass="animted bounceIn"){
      //   $scope.superClass
      // }
      $scope.superClass="animated bounceIn";
      $scope.score +=1;
      var answer = updateProblem();
      random(answer); 

     

    } else {
      console.log("wrong: " + e);
      var answer = updateProblem();
      random(answer);
    }
    //if number is same.. add to score (make the 
    //score ng-bind so it can be saved. if not, just exit and get random numbers)
  }


 function random(answer) {
  
  var choice = Math.floor((Math.random()) * 8) + 1;
  console.log(choice);

  switch (choice){
    case 0: 
      $scope.topLeft = answer; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break; 
    case 1: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = answer;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;

    case 2: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight = answer;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 3: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = answer;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 4: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = answer;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 5: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = answer;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 6: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = answer;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 7: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = answer;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 8: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = answer;
      break;
      
  }

 }

 function updateProblem(){
  $scope.topNum = Math.floor((Math.random()) * 10) + 1;
  $scope.botNum = Math.floor((Math.random()) * 10) + 1; 
  return $scope.topNum + $scope.botNum;

 }
function quit() {
  var myPopup = $ionicPopup.show({
    template: "your score was: " + $scope.score,
    title: "What would you like to do?", 
    scope: $scope,
    buttons: [
      {
        text: '<b>Back</b>', 
        type: 'button-positive', 
        onTap: function(e){
          $ionicHistory.goBack(); 
        }       
      }, 

      {
        text: '<b> Try Again </b>',
        type: 'button-assertive',
        onTap: function(e){
          window.location.reload(true);
        }
      }
    ]

  });
}


})
//  (,  , ) 
// ========  Multiplcation Controller   
//    ||                              
//    ||                             
//    /\                            / \
//   /  \                          /   
//  /    \                        /
.controller('MultCtrl', function($scope, $ionicPopup, $timeout, $location,$state, $ionicHistory){
  $scope.backgroundImage = "img/chalkboard.jpg";
  $scope.score = 0;
  $scope.topLeft = 0;
  $scope.topMiddle = 0;
  $scope.topRight = 0;
  $scope.middleLeft = 0; 
  $scope.middleMiddle = 0; 
  $scope.middleRight = 0; 
  $scope.bottomLeft = 0;
  $scope.bottomMiddle = 0; 
  $scope.bottomRight = 0; 
  $scope.topNum = 0; 
  $scope.botNum = 0; 
  setTimeout(quit, 60000);

  $scope.checkNum = function(e) {
    if (e === ($scope.topNum * $scope.botNum)){
      console.log("correct: " + e);
      $scope.score +=1;
      var answer = updateProblem();
      random(answer); 
     

    } else {
      console.log("wrong: " + e);
      var answer = updateProblem();
      random(answer);
    }
    //if number is same.. add to score (make the 
    //score ng-bind so it can be saved. if not, just exit and get random numbers)
  }


 function random(answer) {
  
  var choice = Math.floor((Math.random()) * 8) + 1;
  console.log(choice);

  switch (choice){
    case 0: 
      $scope.topLeft = answer; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break; 
    case 1: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = answer;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;

    case 2: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight = answer;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 3: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = answer;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 4: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = answer;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 5: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = answer;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 6: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = answer;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 7: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = answer;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 8: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = answer;
      break;
      
  }

 }

 function updateProblem(){
  $scope.topNum = Math.floor((Math.random()) * 10) + 1;
  $scope.botNum = Math.floor((Math.random()) * 10) + 1; 
  return $scope.topNum * $scope.botNum;

 }
function quit() {
  var myPopup = $ionicPopup.show({
    template: "your score was" + $scope.score,
    title: "What would you like to do?", 
    scope: $scope,
    buttons: [
      {
        text: '<b>Back</b>', 
        type: 'button-positive', 
        onTap: function(e){
          $ionicHistory.goBack();;
        }       
      }, 

      {
        text: '<b> Try Again </b>',
        type: 'button-assertive',
        onTap: function(e){
          window.location.reload(true);
        }
      }
    ]

  });
}


})

//
//           o
// =====================
//           o
// 



//
//==============================================================
//================================================================
//========================================================================
//===============================================================
//
.controller('SubCtrl', function($scope, $ionicPopup, $timeout, $location,$state){
  $scope.backgroundImage = "img/chalkboard.jpg";
  $scope.score = 0;
  $scope.topLeft = 0;
  $scope.topMiddle = 0;
  $scope.topRight = 0;
  $scope.middleLeft = 0; 
  $scope.middleMiddle = 0; 
  $scope.middleRight = 0; 
  $scope.bottomLeft = 0;
  $scope.bottomMiddle = 0; 
  $scope.bottomRight = 0; 
  $scope.topNum = 0; 
  $scope.botNum = 0; 
  setTimeout(quit, 60000);

  $scope.checkNum = function(e) {
    if (e === ($scope.topNum - $scope.botNum)){
      console.log("correct: " + e);
      $scope.score +=1;
      var answer = updateProblem();
      random(answer); 
     

    } else {
      console.log("wrong: " + e);
      var answer = updateProblem();
      random(answer);
    }
    //if number is same.. add to score (make the 
    //score ng-bind so it can be saved. if not, just exit and get random numbers)
    //
  }


 function random(answer) {
  
  var choice = Math.floor((Math.random()) * 8) + 1;
  console.log(choice);

  switch (choice){
    case 0: 
      $scope.topLeft = answer; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break; 
    case 1: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = answer;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;

    case 2: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight = answer;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 3: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = answer;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 4: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = answer;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 5: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = answer;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 6: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = answer;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 7: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = answer;
      $scope.bottomRight = Math.floor((Math.random()) * 82) + 1;
      break;


    case 8: 
      $scope.topLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.topMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 82) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 82) + 1;
      $scope.bottomRight = answer;
      break;
      
  }

 }

 function updateProblem(){
  $scope.topNum = Math.floor((Math.random()) * 10) + 1;
  $scope.botNum = Math.floor((Math.random()) * 10) + 1; 
  return $scope.topNum - $scope.botNum;

 }
function quit() {
  var myPopup = $ionicPopup.show({
    template: "your score was" + $scope.score,
    title: "What would you like to do?", 
    scope: $scope,
    buttons: [
      {
        text: '<b>Back</b>', 
        type: 'button-positive', 
        onTap: function(e){
          $ionicHistory.goBack();;
        }       
      }, 

      {
        text: '<b> Try Again </b>',
        type: 'button-assertive',
        onTap: function(e){
          window.location.reload(true);
        }
      }
    ]

  });
}


})

.controller('DivCtrl', function($scope, $ionicPopup, $timeout, $location,$state, $ionicHistory){
  $scope.backgroundImage = "img/chalkboard.jpg";
  $scope.score = 1;
  $scope.topLeft = 1;
  $scope.topMiddle = 1;
  $scope.topRight = 1;
  $scope.middleLeft = 1; 
  $scope.middleMiddle = 1; 
  $scope.middleRight = 1; 
  $scope.bottomLeft = 1;
  $scope.bottomMiddle = 1; 
  $scope.bottomRight = 1; 
  $scope.topNum = 1; 
  $scope.botNum = 1; 
  setTimeout(quit, 60000);

  $scope.checkNum = function(e) {
    if (e === ($scope.topNum / $scope.botNum)){
      console.log("correct: " + e);
      $scope.score +=1;
      var answer = updateProblem();
      random(answer); 
     

    } else {
      console.log("wrong: " + e);
      var answer = updateProblem();
      random(answer);
    }
    //if number is same.. add to score (make the 
    //score ng-bind so it can be saved. if not, just exit and get random numbers)
  }


 function random(answer) {
  
  var choice = Math.floor((Math.random()) * 8) + 1;
  console.log(choice);

  switch (choice){
    case 0: 
      $scope.topLeft = answer; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break; 
    case 1: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = answer;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;

    case 2: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight = answer;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 3: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = answer;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 4: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = answer;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 5: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = answer;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 6: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = answer;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 7: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1; 
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = answer;
      $scope.bottomRight = Math.floor((Math.random()) * 19) + 1;
      break;


    case 8: 
      $scope.topLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.topMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.topRight =  Math.floor((Math.random()) * 19) + 1;
      $scope.middleLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.middleMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.middleRight = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomLeft = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomMiddle = Math.floor((Math.random()) * 19) + 1;
      $scope.bottomRight = answer;
      break;
    }
  

 }

 function updateProblem(){
  $scope.topNum = Math.floor((Math.random()) * 10) + 1;
  $scope.botNum = Math.floor((Math.random()) * 10) + 1; 
  return Math.round(($scope.topNum / $scope.botNum)* 100)/100;

 }
function quit() {
  var myPopup = $ionicPopup.show({
    template: "your score was: " + $scope.score,
    title: "What would you like to do?", 
    scope: $scope,
    buttons: [

      {
        text: '<b>Back</b>', 
        type: 'button-positive', 
        onTap: function(e){
          $ionicHistory.goBack(); 
        }       
      }, 

      {
        text: '<b> Try Again </b>',
        type: 'button-assertive',
        onTap: function(e){
          window.location.reload(true);
        }
      }
    ]

  });
}


});






