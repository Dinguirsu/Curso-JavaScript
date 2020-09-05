window.onload = iniciaDatos;

function iniciaDatos()
{
    document.getElementById("link").onclick = validaSalir;
    document.getElementById("linkSearch").onclick = busqueda;
}

function validaSalir()
{
    if(confirm("Desea Salir del Sitio?")){
        alert("Nos vamos a Google");
        return true;
    }
    else{
        alert("Nos quedamos en el sitio");
        return false;
    }
}

function busqueda(){
    var respuesta = prompt("Escriba una cadena a buscar: ", "");
    if(respuesta){
        alert("Tu respuesta fue: " + respuesta);

        var nuevoLink = this + "search?q=" + respuesta;
        alert("Nuevo Link: " + nuevoLink);
        window.location = nuevoLink;
        return false;
    }
    else{
        alert("No se ingreso ningun dato a buscar");
        return false;
    }
}