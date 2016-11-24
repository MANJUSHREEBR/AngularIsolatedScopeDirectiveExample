angular.module('myApp')
.controller("mainCtrl", function($scope,colorFactory) {
      
       $scope.showTxtfield = true;
       $scope.clrfield = true;
       //Intialising initial background colors
         $scope.bgClr="pink";
         $scope.bgClr1="#FFA500";
         $scope.bgClr2="yellow";
        //function to change the div2 background. 
         $scope.change1=function(value){
           $scope.bgClr1=value.a;
         }
       //function to change div1 background.
         $scope.change2=function(value){
          $scope.bgClr=value.b;
         }
       //function to merge two colors.
          $scope.change3=function(){
          $scope.bgClr2 = colorFactory.mergeColor($scope.bgClr,$scope.bgClr1);
         }
 });