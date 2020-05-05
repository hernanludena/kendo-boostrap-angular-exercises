'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('ejercicio', ['$scope',
        function ($scope) {
            $scope.telefono;
            $scope.modificar= function(){
                $scope.telefono = "12121221212";
            };
            
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
            },
            {
                nombre: "Hangar",
                precio: 20
            },
            {
                nombre: "Chivos",
                precio: 20
            }
    ];
            
            
            $scope.dataSource1 = new kendo.data.DataSource({
                data:$scope.productos,
                pageSize:2  /*paginacion*/
            })
            
            $scope.dataSource1.read();
            
  }]);