  (function () {
      "use strict";
     
      
      var mod = angular.module("ModuloControllers", []);


      mod.controller("ControladorUno", function ($scope,$location,$translate) {
          $scope.listar = function () {
              $location.path("/listar");
          };          
          $scope.editar = function () {
              $location.path("/editar");
          };
          
           $scope.idioma = function () {
              $translate.use("es");  /*servicio para cambiar idioma*/
          };
          
           $scope.restaurante = "Hola";
          
             $scope.productos = [
                  {
                      nombre: "Cacao",
                      precio: 120
            },
                  {
                      nombre: "Moras",
                      precio: 80
            },
                  {
                      nombre: "Piñas",
                      precio: 10
            },
                  {
                     nombre: "Tomates",
                      precio: 20
            }
    ];

      });
      
    



  }());