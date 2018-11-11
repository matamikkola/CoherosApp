angular.module('CoherosApp', [])
.controller('AnimalController', function($scope){

  $scope.toBeAddedAnimals = {patricia:["mammals","elephant"],simon:["mammals","bunny"],tracy:["birds","seagull"]};
  $scope.animalValues = Object.values($scope.toBeAddedAnimals);
  $scope.animalList = [];
  $scope.animalClassList = [];

  /*Change the input data to more convenient format */
  for(let i = 0; i < $scope.animalValues.length; i++){
    let animal = {
      class:'',
      type:''
    };
    animal.class = $scope.animalValues[i][0];
    animal.type = $scope.animalValues[i][1];
    $scope.animalList.push(animal);
  }

  /*Count clicks of an animal class */
  $scope.countClicked = function(animal){
    let foundMatch = false;

    if($scope.animalClassList.length > 0){
      $scope.animalClassList.forEach(element => {
        if(element.class === animal.class){
          element.clicked++;
          foundMatch = true;
        }
      });
      if(!foundMatch){
        // Class doesn't already exist in the list so add it.
        $scope.addClass(animal);
      }
    } else {
      // Add first item to the list
      $scope.addClass(animal);
    }
  }

  /*Add an animal class to list*/
  $scope.addClass = function(animal){
    let animalClass = {
      class:animal.class,
      clicked: 1
    };
    $scope.animalClassList.push(animalClass);

  }

});
