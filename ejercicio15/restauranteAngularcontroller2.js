var app = angular.module("modulo1", []);
app.controller(
    "restauranteController", function ($scope, $http) {
        $scope.restaurant1 = {};
        $scope.mostrar = "lista";


        $scope.restaurantes = [
            {
                codigo: 1,
                nombre: "La Roma",
                telefono: 2569632
            },
            {
                codigo: 2,
                nombre: "La Tulpa",
                telefono: 25333330
            },
            {
                codigo: 3,
                nombre: "Argelia Restaurant",
                telefono: 2965656
            },
            {
                codigo: 4,
                nombre: "Como en Casa",
                telefono: 25101011
            }
    ];

        //Consultar
        $scope.recuperarTodos = function () {
            $http.get("http://localhost:8080/ProyectoRestaurante/rest/restauranteService/recuperarTodos").success(
                function (data, status) {
                    console.log(status);
                    $scope.restaurantes = data;
                }).error(
                function (status) {
                    console.log(status);
                    alert("horror");
                }
            );
        };


        //Insertar
        $scope.insertar = function () {
                $http.put("http://localhost:8080/ProyectoRestaurante/rest/restauranteService/insertar", $scope.restaurant1).success(
                    function (data, status) {
                        console.log(status);
                        alert("Insertado");
                        $scope.recuperarTodos();
                        $scope.restaurant1 = {};
                        $scope.mostrar = "lista";
                    }).error(
                    function (status) {
                        console.log(status);
                        alert("error al insertar");
                        $scope.actualizar();
                        
                    }
                );
            };    

        
         //Update
        $scope.actualizar= function () {
                $http.post("http://localhost:8080/ProyectoRestaurante/rest/restauranteService/actualizar", $scope.restaurant1).success(
                    function (data, status) {
                        console.log(status);
                        alert("Actualizado");
                        $scope.recuperarTodos();
                        $scope.restaurant1 = {};
                        $scope.mostrar = "lista";
                    }).error(
                    function (status) {
                        console.log(status);
                        alert("error al actualizar");
                    }
                );
            };    
        
        
        
        $scope.mostrarNuevo = function () {
            $scope.mostrar = "edicion";
        };

        $scope.cancelar = function () {
            $scope.mostrar = "";
        };
        
        $scope.editar = function (rest) {
            $scope.mostrar = "edicion";
            document.getElementById("txtCodigo").value = rest.codigo;
            document.getElementById("txtNombre").value = rest.nombre;
            document.getElementById("txtTelefono").value = rest.telefono;
            
            $scope.restaurant1.codigo = rest.codigo;
            $scope.restaurant1.nombre = rest.nombre;
            $scope.restaurant1.telefono = rest.telefono;
            
            
            
        };
        
        
        $scope.recuperarTodos();



    });