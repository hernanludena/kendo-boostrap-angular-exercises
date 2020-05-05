function BienvenidaController($scope){
    $scope.nombre = "Ludeña";
    $scope.modificar = function(){
        this.nombre = "Pe";
        $scope.nombre = "Hernan2";
    };
}

