//Factory to merge two colors.
angular.module('myApp')
.factory('colorFactory', function(){
    return {
        mergeColor: function(color1,color2){
         var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color2);
         var result2=  /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color1);
         var clr1= result ? {
         r: parseInt(result[1], 16),
         g: parseInt(result[2], 16),
         b: parseInt(result[3], 16)
          }: null;
         var clr2= result2 ? {
         r: parseInt(result2[1], 16),
         g: parseInt(result2[2], 16),
         b: parseInt(result2[3], 16)
          }: null;
        
        var red=Math.round(clr1.r+clr2.r /2);
        var blue=Math.round(clr1.g+clr2.g /2);
        var green=Math.round(clr1.b+clr2.b /2);
        
        return "rgb("+red+","+blue+","+green+")";
        
        }  
    }               
});