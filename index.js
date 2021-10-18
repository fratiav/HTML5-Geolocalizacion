window.addEventListener("load",start,false);

function start(){

        // * * API GEOLOCALIZACION * *
    //Objeto API: navigator.geolocation
    // Metodos: GetCurrentPosition(ubicacion(obligatorio),errores,configuracion), watchPosition(ubicacion,errores,configuracion), clearWatch(id)
    // Objetos retornados: Position (Lo retornan GetCurrentPosition y watchPosition)
        //Propiedades del objeto Position: -Coords (valores que determinan la posicion) y -Timestamp (Momento exacto de localizacion)

    var botonUbicacion = document.getElementById("btnUbicacion");

    botonUbicacion.addEventListener("click",obtenerUbicacion,false);
}

function obtenerUbicacion(){

    //Parametros de configuracion: enableHighAccuracy(posicion activa), timeout(tiempo para recalcular posicion), maximunAge(acceder a cache para ahorrar recursos) 
    var parametrosConfig = {enableHighAccuracy:true, timeout:10000, maximunAge:6000}; //Medidas en milisegundos

    //navigator.geolocation.getCurrentPosition(mostrarPosicion,gestionErrores,parametrosConfig);
    navigator.geolocation.watchPosition(mostrarPosicion,gestionErrores,parametrosConfig); //Para mostrar la posicion en el tiempo

}

function mostrarPosicion(posicion){  //posicion es el objeto Position que devuelve la funcion getCurrentPosition
    var ubicacion = document.getElementById("ubicacion");

    var latitud = "Latitud: " + posicion.coords.latitude;
    var longitud = "Longitud: " + posicion.coords.longitude;
    var exactitud = "Exactitud: " + posicion.coords.accuracy;
    var altitud = "Altitud: " + posicion.coords.altitude;

    ubicacion.innerHTML = latitud + "<br>" + longitud + "<br>"+ exactitud + "<br>" + altitud;
}

function gestionErrores(error){ //Error es el objeto que devuelve gestionErrores. Propiedades: code y message
    alert("Ha habido un error '"+ error.code +"' - "+error.message);
}