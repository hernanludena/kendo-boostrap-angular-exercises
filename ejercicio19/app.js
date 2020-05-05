(function () {
    "use strict";
    var traduccionesES = {
        CODIGO: 'CODIGO',
        GUARDAR: 'GUARDAR'
    };
    var traduccionesEN = {
        CODIGO: 'Code',
        GUARDAR: 'Save'
    };

    var mod = angular.module("ModuloApp", ["ModuloControllers", "ngRoute", "pascalprecht.translate"]);

    mod.config(function ($routeProvider, $translateProvider) {
        $routeProvider.when("/editar", {
            templateUrl: 'edicionRestaurante.html'
        });
        $routeProvider.when("/listar", {
            templateUrl: 'listaRestaurante.html'
        });
        $routeProvider.otherwise({
            redirectTo: "/listar"
        });

        $translateProvider.translations('en', traduccionesEN);
        $translateProvider.translations('es', traduccionesES);

        $translateProvider.preferredLanguage('en');
    });

    mod.directive("cobisTest", function () {
        return {
            restrict: 'AEC', /*Elemento - Atributo - Clase*/
            template: 'MI PRIMERA DIRECTTIVA'
        }
    });


    /*   mod.directive("cobisLista", function () {
            return function (scope, element, attrs) {
                console.log('ingresa');
                var datos = scope[attrs["cobisLista"]];
                var mostrar = attrs["cobisMostrar"];
                var codigoHtml = angular.element("<ul>");
                element.append(codigoHtml);
                for (var i = 0; i < datos.length; i++) {
                    codigoHtml.append(angular.element("<li>").text(datos[i][mostrar]));
                }
            }

        });*/

    mod.directive("cobisLista", function () {
        return {
            restrict: 'EA',   /*Elemento o Atributo*/
            link: function (scope, element, attrs) {
                console.log('ingresa');
                var datos = scope[attrs["cobisLista"]] || scope[attrs["cobisSource"]] ;
                var mostrar = attrs["cobisMostrar"];
                var codigoHtml = angular.element("<ul>");
                element.append(codigoHtml);
                for (var i = 0; i < datos.length; i++) {
                    codigoHtml.append(angular.element("<li>").text(datos[i][mostrar]));
                }
            }
        }

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
                
            }
        }

    });



}());