function BienvenidaController($scope){
    $scope.nombre = "Manuel";
    $scope.modificar = function(){
        this.nombre = "Pe";
        $scope.nombre = "Hernan";
    };
}

