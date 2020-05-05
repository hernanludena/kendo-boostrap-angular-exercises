function BienvenidaController($scope,$rootScope){
    $scope.nombre = "Hernan";
    $rootScope.nombre = "Lude";  
    
    $scope.modificar = function(){
        $scope.nombre = "Jorge";
        $rootScope.nombre = "Hernan Root";
    };
    
    /*funcion con parametros*/
    $scope.concatenar = function(var2){
        $scope.nombre += " "+ var2;     
    };
    
    /*funcion sin parametros*/
    $scope.concatenar2 = function(){
        $scope.nombre += " "+ $scope.cadena;     
    };
    

}


