(function () {
    'use strict';

    var mod = angular.module('FacturaApp.controllers', []);

    mod.controller("FacturaController", ["$scope", 
        function ($scope) {
            $scope.codigoProducto = 0;
            $scope.factura = {};
            $scope.cliente = {};
            $scope.detalles = [];
            $scope.producto = {};
            $scope.insertarFactura = function (factura) {
                /*servicioFactura.insertar(factura).then(function () {
                    console.log("Se inserto la Factura");
                }, function () {
                    console.log("No se inserto la factura");
                });*/
            };

        }
    ]);

})();