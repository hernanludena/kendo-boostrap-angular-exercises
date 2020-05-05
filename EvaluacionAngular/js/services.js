(function () {
    'use strict';
    var mod = angular.module('FacturaApp.services', []);

    mod.service("servicioProductos", [

        function () {
            this.consultarProducto = function (codigoProducto) {
                var producto = {};
                if (codigoProducto === 1) {
                    producto = {
                        codigo: 1,
                        nombre: "Doritos",
                        precioVenta: 0.50,
                        categoria: {
                            id: 100,
                            nombre: "snacks"
                        }
                    };
                } else {
                    producto = {
                        codigo: 2,
                        nombre: "Sanduches",
                        precioVenta: 1.50,
                        categoria: {
                            id: 100,
                            nombre: "snacks"
                        }
                    };
                }
                return producto;
            };
        }]);



    mod.factory("servicioClientes", [

        function () {
            this.consultarClientePorCedula = function (cedulaCliente) {
                var cliente = {};
                if (cedulaCliente === "1600651960") {
                    cliente = {
                        cedula: "1600651960",
                        nombre: "Christian",
                        apellido: "Guevara",
                        telefono: "0997742400",
                        direccion: "UIO"
                    };
                } else {
                    cliente = {
                        cedula: "1234567890",
                        nombre: "Santiago",
                        apellido: "Mosquera",
                        telefono: "0982100187",
                        direccion: "UIO"
                    };
                }
                return cliente;
            };
        }]);

    mod.provider("servicioFactura", 
        function () {
            return {
                $get: function ($http, $q) {
                    return {
                        insertar: function (factura) {
                            var d = $q.defer();
                            /*$http.post("http://localhost:8080/JPA_Factura/rest/factura/insertar", factura).success(
                                function (data, status) {
                                    console.log("Success con status: " + status);
                                    d.resolve(data);
                                }
                            ).error(function (data, status) {
                                console.log("Error con status: " + status);
                                d.reject();
                            });
							*/
                            return d.promise;
                        },
                    };
                }
            };
        });

})();