angular.module('myApp')
.directive('colorDiv', function() {
       return {
 //link function to add behavior to the dom.
  link: function(scope, element, attrs) {
                scope.changeClr=function(){
                var a = scope.backgrnd;
                var b=scope.div1Background;
                scope.changeColor()({a:a,b:b});
                
                
                }
                
            },
 //invoking the directive as an element by setting restrict property to 'E'.
  restrict: 'AE',
  //creating an isolated scope for the directive.
  scope:{
           showTxtfield:'=',
           showClrfield:'=',
           modelValue:'=',
           changeColor:'&'
           
           
          },
   //template to be rendered by the directive.
  template: '<div class="col-sm-6" style="background-color:{{modelValue}}">' + 
      '<input type="text" placeholder="Enter hex color" ng-model="$parent.backgrnd" ng-if="showTxtfield"><input type="color" ng-if="showClrfield" ng-model="$parent.div1Background" >' +
      '<input type="button" class="btn btn-primary" ng-click="changeClr()" value="changeColor"></div>'
        }
        
    }); 
      
 