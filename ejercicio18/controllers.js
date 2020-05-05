  (function () {
      "use strict";
      var mod = angular.module("ModuloControllers", []);
      mod.controller("ControladorUno", function ($scope, serviceProvider) {
          console.log("Se crea ControladorUno");

      });

      mod.controller("ControladorDos", ["$scope", "serviceProvider",
        function ($scope1, serviceProvider) { /*ofuscador--> no cambia nombre de los valores solo los nombres*/
              console.log("Se crea ControladorDos"); /*minificacion , quita los espacios en blancos y caracteres no validos para que sea mas liviano*/

    }]);

      /*inyectamos los 3 tipos de servicios*/
      mod.controller("ControladorTres", ["$scope", "serviceProvider", "serviceFactory", "service",
        function ($scope1, serviceProvider, serviceFactory, service) {
              console.log("Se inyectan los servicios"); /*se crea una instancia de provider(singleton) inmediatamente al inyectar y del resto tambien*/
              serviceProvider.probar();

              $scope1.probarServicio = function () {
                  serviceProvider.probar();
                  serviceFactory.probarFactory();
                  service.probarService();
              };

    }]);

  }());