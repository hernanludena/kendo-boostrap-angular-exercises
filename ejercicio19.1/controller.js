(function () {


    var mod = angular.module("ModuloApp", []);

    
      mod.controller("ControladorUno", function ($scope) { 
          
          $scope.modelo1 = "modelo";

      });
      
    
     mod.directive("cobisDos", function () {
        return {
            restrict: 'A', 
            transclude:true,
            template: "<div ng-transclude><h3>Mi Contenido</h3></div>"
        }

    });
    
     /*element --> recupero el html*/
    
      mod.directive("cobisTres", function () {
        return {
            restrict: 'A', 
            link: function(scope,element,attrs){ 
                
            },
            scope:true  /*crea nuevo scope, pero hereda del scope padre*/
        }

    });
    
    
     mod.directive("cobisCuatro", function () {
        return {
            restrict: 'A', 
            link: function(scope,element,attrs){ 
                
            },
            scope:{}  /*crea nuevo scope, no se puede acceder al scope padre */
        }

    });



}());