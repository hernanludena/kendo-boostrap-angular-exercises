function insertar(cod,ced,dets){
	var factura = {codigo:cod,
			cedula:ced,
			detalles:dets
			};
	invocarRest("POST",
			"http://localhost:8080/Facturas/rest/serviciofactura/insertar",
			factura,
			okInsertar);
    
   
}
function consultarProd(cod){
	var prod = {codigo:cod};
	invocarRest("PUT",
			"http://localhost:8080/Facturas/rest/productos/buscar",
			prod,
			okConsultarProd);
}
function okConsultarProd(response){
	if(response && response!=""){
		var obj= JSON.parse(response); //recibe trama JSON y lo convierte en Obj
	if(obj){
		document.facturacion.codigo.value=obj.codigo;
		document.facturacion.nombreP.value=obj.nombre;
		document.facturacion.precio.value=obj.precioVenta;
		document.facturacion.categoria.value=obj.categoria.nombre;
	}
	}
	else{
		document.facturacion.codigo.value="";
		document.facturacion.nombreP.value="";
		document.facturacion.precio.value="";
		document.facturacion.categoria.value="";
		alert("Producto no encontrado");
		
	}
}

function consultar(cod){
	var cliente = {cedula:cod};
	invocarRest("PUT",
			"http://localhost:8080/Facturas/rest/clientes/buscar",
			cliente,
			okConsultar);
}
function okConsultar(response){
	if(response && response!=""){
		var obj= JSON.parse(response); //recibe trama JSON y lo convierte en Obj
	if(obj){
		document.facturacion.cedula.value=obj.cedula;
		document.facturacion.nombre.value=obj.nombre;
		document.facturacion.apellido.value=obj.apellido;
		document.facturacion.direccion.value=obj.direccion;
		document.facturacion.telefono.value=obj.telefono;
	}
	}
	else{
		document.facturacion.cedula.value="";
		document.facturacion.nombre.value="";
		document.facturacion.apellido.value="";
		document.facturacion.direccion.value="";
		document.facturacion.telefono.value="";
		alert("cliente no encontrado");
		
	}
}

function okInsertar(response){
	 /*var responseText= request.responseText;
	    var statusText= request.statusText; //MSg de respuesta HTTP eje: File Not Found.
	    var status= request.status; //codigo de respuesta HTTP eje 404
	   */
	 
    	alert("responseText!!!"+response);
		listadoProds=[];
		listadoProdShow=[];
		document.facturacion.cedula.value="";
		document.facturacion.nombre.value="";
		document.facturacion.apellido.value="";
		document.facturacion.direccion.value="";
		document.facturacion.telefono.value="";
		document.facturacion.codigo.value="";
		document.facturacion.nombreP.value="";
		document.facturacion.categoria.value="";
		document.facturacion.precio.value="";
		document.facturacion.codigoBusqueda.value="";
		document.facturacion.cedulaBusqueda.value="";
		var table = document.getElementById("tabla");
		table.innerHTML="";
		
}

function buscarPorCedula(){
	 var cod = document.facturacion.cedulaBusqueda.value;
	 consultar(cod);
}
function buscarPorCodigo(){
	 var cod = document.facturacion.codigoBusqueda.value;
	 consultarProd(cod);
}
function Producto(cod,cantidad){
	this.idProducto=cod;
	this.cantidad=cantidad;
}
function ProductoSh(cod,nombre,precio,cantidad,categoria){
	this.idProducto=cod;
	this.nombre=nombre;
	this.cantidad=cantidad;
	this.precio=precio;
	this.categoria=categoria;
}

var listadoProds=[];
var listadoProdShow=[];
function agregarProducto(){
	var cod=document.facturacion.codigo.value;
	var nombreP=document.facturacion.nombreP.value;
	var precio=document.facturacion.precio.value;
	var cantidad=document.facturacion.cantidad.value;
	var categoria=document.facturacion.categoria.value;
	if (cantidad=="" || cantidad==0){
		alert("ingrese un valor de la cantidad de producto");
		return;
	}
	
	var prod=new Producto(cod,cantidad);
	var prod2=new ProductoSh(cod,nombreP,precio,cantidad,categoria);
	listadoProds.push(prod);
	listadoProdShow.push(prod2);
	document.facturacion.codigo.value="";
	document.facturacion.nombreP.value="";
	document.facturacion.precio.value="";
	document.facturacion.codigoBusqueda.value="";
	document.facturacion.cantidad.value="";
	document.facturacion.categoria.value="";
	dibujarTabla(listadoProdShow);
} 

function guardarFactura(){
	 var cod = document.facturacion.numFactura.value;
	 var cedula = document.facturacion.cedula.value;
	 if(cod=="" || cedula==""){
		 alert("codigo de factura o cedula estan en blanco!!");
		 return;
	 }
	 insertar(cod,cedula,listadoProds);
	 
}

function okRecuperar(respuesta){
	var list= JSON.parse(respuesta); //recibe trama JSON y lo convierte en Obj
	dibujarTabla(list);
    //SI status 200 si esta ok
    //mostrar el msg de error
    document.formTest.resp.value = '\t\resp\n' +list;
    
}
function llamarRest(){
	alert("Invoca al Rest");
    invocarRest("GET",
    		"http://localhost:8080/Ejercicio10JavaScript/rest/servicioRestaurante/recuperaRestaurantes",
    		null,
    		okRecuperar);
    
    alert("Fin del Metodo");//el metodo se ejecuto y termino, pero igual cuando cambia el estado se ejecuta la funcion interna
}

function dibujarTabla(restaurantes) {

    var table = document.getElementById("tabla");
    table.innerHTML="";
    //Creación de filas
    //  table.appendChild(document.createElement('tbody'));
    for (var j = 0; j < restaurantes.length; j++) {
    	var cols=0;
        
        //  var row2 = table.tBodies[0].insertRow(-1);
        var row1 = table.insertRow(j);
        //para barrese un arreglo (por el indice)
        for(atributo in restaurantes[j]){
        	if (restaurantes[j][atributo] instanceof Function) {    
                  continue;
                }
        	 var cell1 = row1.insertCell(cols);
        	 cell1.innerHTML = restaurantes[j][atributo];
        	 cols++;
        }
        cols=0;
        /*var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        
        cell1.innerHTML = restaurantes[j].codigo; 
        cell2.innerHTML = restaurantes[j].nombre; 
        cell3.innerHTML = restaurantes[j].telefono;
        */ 
    }

    var wHeader=["CODIGO",
    		"NOMBRE",
    		"PRECIO",
    		"CANTIDAD",
    		"CATEGORIA"];

    var header = table.createTHead();
    
    var row2 = header.insertRow(0);
    row2.innerHTML = "<b>DETALLE DE FACTURA </b>";
    row2.style.textAlign = 'center';
    var row3 = header.insertRow(1);
    for(head in wHeader){
    	var cell = row3.insertCell(head);
        cell.innerHTML = "<b>"+wHeader[head]+"</b>";
    }
    /*var row3 = header.insertRow(1);
    var cell = row3.insertCell(0);
    cell.innerHTML = "<b>CODIGO</b>";
    
    var cell2 = row3.insertCell(1);
    cell2.innerHTML = "<b>NOMBRE</b>";
    
    var cell3 = row3.insertCell(2);
    cell3.innerHTML = "<b>TELEFONO</b>";
    */
}

