/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('CarouselDemoCtrl',CarouselDemoCtrl);

    CarouselDemoCtrl.$inject =  ['$scope'];

    function CarouselDemoCtrl($scope) {
     $scope.slides=[
    {
      image: 'images/image1.jpg'

    },
    {
      image: 'images/image2.jpg'
    },
    {
      image: 'images/image3.jpg'
    },
    {
      image: 'images/image4.jpg'
    },
    {
      image: 'images/image5.jpg'
    },
    {
      image: 'images/image6.jpg'
    },
    {
      image: 'images/image7.jpg'
    },
    {
      image: 'images/image8.jpg'
    },
    {
      image: 'images/image9.jpg'
    },
    {
      image: 'images/image10.jpg'
    }
    
   
  ];
  
    $scope.imageDisplay=function(imagePath){
      $scope.displayImage=true;
      $scope.imgShow=imagePath;
    }


    }

})();








