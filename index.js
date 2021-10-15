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
    navigator.geolocation.getCurrentPosition(mostrarPosicion);
}

function mostrarPosicion(posicion){  //posicion es el objeto Position que devuelve la funcion getCurrentPosition
    var ubicacion = document.getElementById("ubicacion");

    var latitud = "Latitud: " + posicion.coords.latitude;
    var longitud = "Longitud: " + posicion.coords.longitude;
    var exactitud = "Exactitud: " + posicion.coords.accuracy;
    var altitud = "Altitud: " + posicion.coords.altitude;

    ubicacion.innerHTML = latitud + "<br>" + longitud + "<br>"+ exactitud + "<br>" + altitud;
}