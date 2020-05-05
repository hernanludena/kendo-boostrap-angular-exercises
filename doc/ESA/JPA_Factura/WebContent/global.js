function invocarRest(httpMethod, url, data,fun){
	 var request = new XMLHttpRequest();
	    //con false es sincrona(espera el metodo);
	    //con true es asincrona (no espera al metodo); por lo que el response sale vacio;
	    request.open(
	    		httpMethod, 
	    		url, 
	    		true);
	    if(!data){
	    	request.send(null);	
	    }else{
	    	var dataJson = JSON.stringify(data);//recibe objeto y lo convierte en trama json
	    	 request.setRequestHeader("Content-Type", "application/json");
	    	 request.send(dataJson);
	    }
	    //Esta funcion se ejecuta cada vez que cambia el estado del request
	    request.onreadystatechange = function() {
	    	if(request.readyState == 4) {//respuesta obtenida
	    		if(request.status=="204"){
		    		fun("");
		    	}
	    		else{
	    		fun(request.responseText);
	    		}
	        }
	    }
	/*
	 * 0  request no inicializado
	 * 1 conexion con el servidor establecida
	 * 2 request recibido
	 * 3 procesando request
	 * 4 respuesta lista.
	 * */
}