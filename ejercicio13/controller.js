/*
    model
    view
    controller
    
    {{}} y ng-bind: binding en una sola via
    
    ng-model: binding en 2 vias
*/
var app=angular.module("modulo1",[]);
app.controller(
    "DeudasController",function($scope){
        
    $scope.obj ={}; 
    $scope.sumaPagados;
    
    
    $scope.deudas = [
        {id:1,descripcion:"casa",monto:120,pagado:true},
        {id:2,descripcion:"auto",monto:20,pagado:true},
        {id:3,descripcion:"terreno",monto:10,pagado:false}, 
        {id:4,descripcion:"hijo",monto:10,pagado:false}, 
        {id:5,descripcion:"celular",monto:190,pagado:true} 
    ];
    
     $scope.guardar = function(){  
         
         if(angular.isDefined($scope.obj.id)){
         /*if($scope.obj.id == undefined){*/
             alert("Ingrese datos");
            /* return;*/
             $scope.obj ={};
         }else{             
           $scope.deudas.push($scope.obj);
           //$scope.deudas.push({id:$scope.id,descripcion:$scope.des,monto:$scope.monto,pagado:$scope.pagado});
           $scope.obj ={};
         }
         
         
      //suma de los pagados
     this.calcular();
         
    };    
    
     $scope.calcular = function(){
         $scope.sumaPagados=0;
       /* for(var i=0;i<=this.deudas.length;i++){
        if(this.deudas[i].pagado == true)
            $scope.sumaPagados += this.deudas[i].monto;
        }*/
        angular.forEach($scope.deudas,function(valor,indice){
             if(valor.pagado == true)
                $scope.sumaPagados += valor.monto;
   
        });
         
    };
    
    
      $scope.calcular2 = function(){
         $scope.sumaPagados=0;       
        angular.forEach($scope.deudas,function(valor,indice){
             if(valor.pagado == true)
                $scope.sumaPagados += valor.monto;
   
        });      
          
          return $scope.sumaPagados;
         
    };
   
    
    $scope.evaluarSpan = function(){
        if($scope.sumaPagados < 200){
            return "label-success";
        }        
         return "label-warning";        
    }
    
    
    $scope.verificaLista = function(){
        if(!$scope.obj.lista == true){
            return "tabla.html";
        }        
         return "lista.html";        
    }
    
    $scope.handler = function(evt){
        alert("evento de tipo:"+evt.type);
    }
    
    
    
          
              
});







