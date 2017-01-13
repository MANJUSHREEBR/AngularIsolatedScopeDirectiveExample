/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
   'use strict';

    angular
        .module('app')
        .directive('carouselSlide',carouselSlide);

    function  carouselSlide() {
        return {
            restrict: 'AE',
             link: function(scope, element, attrs) {
                scope.displayCarousel=true;
                 if(scope.slides.length%4==1)
                 scope.slides.splice(scope.slides.length-1,0,scope.slides[scope.slides.length-4],scope.slides[scope.slides.length-3],scope.slides[scope.slides.length-2]);
                 if(scope.slides.length%4==2)
                 scope.slides.splice(scope.slides.length-2,0,scope.slides[scope.slides.length-4],scope.slides[scope.slides.length-3]);
                 if(scope.slides.length%4==3)
                 scope.slides.splice(scope.slides.length-3,0,scope.slides[scope.slides.length-4]);
                
                scope.getNumber=function(){
                var temp=[];
                for(var i=0;i<(scope.slides.length-4)/4;i++){
                temp.push(i); 
                }
                return temp;
             }
             
                scope.showDiv=function(imagePath){
                scope.displayCarousel=false;
                scope.imageDisplay()(imagePath);
                
               }             
            },
            scope:{
            slides:'=slideArray',
            imageDisplay:"&"
        },
            template: '<div class="row"  >'+
                '<div class="col-sm-7">'+
                   ' <div class="well" style="cursor:pointer;width:100%;"  ng-click="displayCarousel=!displayCarousel">'+
                       
                    '</div>'+
                    '<div id="carouselWrapper" ng-show="displayCarousel">'+
                      ' <div id="carousel-demo" class="carousel slide" data-ride="carousel" data-interval="false" data-wrap="false">'+
                            '<div class="carousel-inner" >'+ 
                               ' <div class="item active">'+ 
                                    '<div ng-repeat="slide in slides track by $index" ng-if="$index<=3">'+
                                        '<img class="imgIcon" ng-src={{slide.image}} alt="currant" ng-click="showDiv(slide.image)" style="cursor:pointer;">'+ 
                                   ' </div>'+
                                '</div>'+ 
                                '<div class="item" ng-repeat="i in getNumber()">'+
                                   '<div ng-repeat="slide in slides track by $index" ng-if="($index >=(($parent.$index+1)*4)&&$index<(($parent.$index+1)*4)+4)">'+
                                       '<img class="imgIcon" ng-src={{slide.image}} alt="currant" ng-click="showDiv(slide.image)" style="cursor:pointer;">'+ 
                                    '</div>'+
                                '</div>'+ 

                            '</div>'+
                        '</div>'+ 
                          
                       ' <a class="left carousel-control" href="#carousel-demo" data-slide="prev">'+
                            '<span class="glyphicon glyphicon-chevron-left"></span>'+
                        '</a>'+
                        '<a class="right carousel-control" href="#carousel-demo" data-slide="next">'+
                            '<span class="glyphicon glyphicon-chevron-right"></span>'+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>'
        
       }
               
    }
})();

