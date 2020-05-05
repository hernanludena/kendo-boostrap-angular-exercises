function TableController($scope){
    
    $scope.obj ={}; 
    $scope.sumaPagados;
    
    
    $scope.deudas = [
        {id:1,descripcion:"casa",monto:120,pagado:true},
        {id:2,descripcion:"auto",monto:20,pagado:true},
        {id:3,descripcion:"terreno",monto:10,pagado:false} 
    ];
    
     $scope.guardar = function(){         
         if(this.obj.id == undefined){
             alert("Ingrese datos");
            /* return;*/
             $scope.obj ={};
         }else{             
           $scope.deudas.push($scope.obj);
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

    
     $scope.totalizarDeuda = function(){
         var tot=0;
        angular.forEach($scope.deudas,function(valor,indice){
             if(!valor.pagado)
                 tot +=  valor.monto;               
        });  
         return tot;
     };
    
     

}


