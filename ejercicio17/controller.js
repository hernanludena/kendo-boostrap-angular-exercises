/*use strict---> validaciones de codigo, valida que no se repitan nombres de atributos*/
/*"use strict"; */
/*
/*function ControladorUno($scope){
    console.log("Se crea ControladorUno");
}*/


/*con los parentesis indico que la funcion es autoejecutable*/
/*(function(){
    'use strict';
})();*/


/*con ! indico que la funcion es autoejecutable*/
/*!function(){
}();*/

/*function ControladorUno($scope){
        console.log("Se crea ControladorUno");*/


(function () {
    "use strict";
    var mod = angular.module("Mod1", []); /*es obligatorio los [] para que cree el modulo, sin [] se esta obteniendo el modulo*/

    mod.controller("ControladorUno", function ($scope,serviceProvider) {
        console.log("Se crea ControladorUno");

    });

    mod.controller("ControladorDos", ["$scope", "serviceProvider",
        function ($scope1, serviceProvider) { /*ofuscador--> no cambia nombre de los valores solo los nombres*/
            console.log("Se crea ControladorDos"); /*minificacion , quita los espacios en blancos y caracteres no validos para que sea mas liviano*/

    }]);


    mod.provider("serviceProvider",
        function () {
            return {
                $get: function () { /*retorna un objeto provider, a travez de un GET obtenemos un objeto unico de servicio con una funcion probar*/
                    console.log("Se crea el Servicio Provider");
                    return { /*Por lo tanto nuestro servicio tiene un metodo probar y solo existe una instancia del mismo */
                        probar: function () {
                            console.log("Creacion del Servicio Provider");
                        }
                    }
                }
            }
        }
    )

    mod.controller("ControladorTres", ["$scope", "serviceProvider", "serviceFactory","service",
        function ($scope1, serviceProvider, serviceFactory,service) {
            console.log("Se inyecta el Servicio Provider"); /*se crea una instancia de provider(singleton) inmediatamente al inyectar*/
            serviceProvider.probar();            

            $scope1.probarServicio = function () {
                serviceProvider.probar();
                serviceFactory.probarFactory();
                service.probarService();
            };

    }]);



    mod.factory("serviceFactory",
        function () {
            console.log("Se crea el Servicio Factory");
            return {                
                probarFactory: function () {
                    console.log("Creacion del Servicio Factory");
                }


            }
        }
    )
    
     mod.service("service",
        function () {
            console.log("Se crea el Servicio service");
            this.probarService = function(){   /*no se retorna objeto, cuando se haga un New se instanciara el objeto*/
                console.log("Creacion del Servicio service");
            }
        }
            
    )



}());



/* Obfuscated Output--http://www.jsobfuscate.com/index.php
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(0(){"b a";c 1=g.f("d",[]);1.5("4",0($2){9.7("8 6 4")});1.5("3",["$2",0($e){9.7("8 6 3")}])}());',17,17,'function|mod|scope|ControladorDos|ControladorUno|controller|crea|log|Se|console|strict|use|var|Mod1|scope1|module|angular'.split('|'),0,{}))
*/

/*
Services de Angular:
- singleton
3 metodos para crear un servicio (devuelven un objeto unico para la aplicacion
- factory
- service ($http)
- provider
*/