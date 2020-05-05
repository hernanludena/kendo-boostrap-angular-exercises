(function () {
    var mod = angular.module("ModuloApp", []);

    mod.controller("ControladorUno", function ($scope) {
       
        $scope.productos = [
            {
                nombre: "Cacao",
                precio: 120,
                codigo: 21212
            },
            {
                nombre: "Moras",
                precio: 80,
                codigo: 21212
            },
            {
                nombre: "Piñas",
                precio: 10,
                codigo: 21212
            },
            {
                nombre: "Tomates",
                precio: 20,
                codigo: 2332
            }
    ];

});

mod.directive("cobisConcatenar", function () {
    return {
        restrict: 'EA',
        template: "<label>{{nombre}} - {{apellido}} </label>"
    }
});


mod.directive("cobisConcatenar2", function () {
    return {
        restrict: 'EA',
        template: "<label>{{nombre}} - {{apellido}} -{{telefono}} -{{nombre2}} </label>",
        link: function (scope, element, attrs) {
            scope.telefono = "2566666";
        },
        /*scope:true*/
        /*herada del padre*/
        /*scope:{},*/
        /*crear nuevo scope, ya no funciona, debido a que se creo un nuevo scope*/
        scope: {
            nombre: "=cobisPrueba",
            /*si la variable no esta dentro del scope da undefined*/
            /*recupear el valor del atributo*/
            nombre2: "@cobisPrueba2" /*recupera el nombre del atributo*/
        }
    }
});



/*
    Compile: en el compile solo afectamos el html; solo modifica la estructura del DOM, 
    Link: el procesamiento de datos(modelo) se realiza en el link.
    */
/*primero se dispara el compile, cuando se crea la directiva*/


mod.directive("cobisConcatenar3", function () {
    return {
        restrict: 'EA',
        compile: function (elemento, attributos) { /*no importan los nombres*/
            elemento.addClass("ng-hide");
        }

    }
});


    
mod.directive("cobisLista", function ($compile) {
    return {
        restrict: 'EA',
        compile: function (elemento, attributos) { /*no importan los nombres*/
            elemento.addClass("ng-change");
             
            var caja = angular.element("<input>");             /*input textarea select ---> funciona el model de doble binding*/
            caja.attr("ng-model","nombre");
            elemento.append(caja);
            
            return function (scope, element, attrs) {         /*retorna un link explicito*/       
                var datos = scope[attrs["cobisLista"]] || scope[attrs["cobisSource"]];  /*attrs.cobisLista attrs.productos*/
                var mostrar = attrs["cobisMostrar"];
                var codigoHtml = angular.element("<ul>");  /*se crea objeto ul*/
                element.append(codigoHtml);/*element = div*/
                for (var i = 0; i < datos.length; i++) {
                    codigoHtml.append(angular.element("<li>").text(datos[i][mostrar]));  /*datos[i].nombre*/
                }
                
                /*retorna una funcion*/
               /* var cadena = "<div>hola pEEEE</div>";
                var fnCompilar = $compile(cadena);  
                var componente = fnCompilar(scope);
                element.append(componente);*/
                
                
                if (mostrar == "todos"){
                    for (var i = 0; i < datos.length; i++) {                        
                         codigoHtml.append("Nombre: "+ datos[i].nombre + 
                                           "Precio: "+ datos[i].precio + "Precio: "+ datos[i].codigo);
                         
                        
                }
                    
                }
            }
        }

    }
});
    
/*
element = div
attrs.productos =  scope[attrs["cobisLista"]]  recuperar los productos
*/
/*input textarea select ---> funciona el model de doble binding*/

}());

