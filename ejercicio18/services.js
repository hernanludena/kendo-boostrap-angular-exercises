 (function () {
     "use strict";
     var mod = angular.module("ModuloServices", []);
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



     mod.factory("serviceFactory",
         function () {
             console.log("Se crea el Servicio Factory");
             return {
                 probarFactory: function () {
                     console.log("Creacion del Servicio Factory");  /*devuelve unicamente la funcion*/
                 }


             }
         }
     )

     mod.service("service",
         function () {
             console.log("Se crea el Servicio service");
             this.probarService = function () { /*no retorna el objeto, cuando se haga un New se instanciara el objeto*/
                 console.log("Creacion del Servicio service");
             }
         }

     )

     /*
        Los 3 tipos de servicios son singleton. (una sola instancia)
     */

 }());