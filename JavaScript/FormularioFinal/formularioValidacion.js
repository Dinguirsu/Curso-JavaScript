function validarForma(forma){
    var usuario = forma.usuario;
    
    if(usuario.value == "" || usuario.value == "Escribir Usuario"){
        alert("Debe Ingresar  un nombre");
        usuario.focus();
        usuario.salect();
        return false;
    }
    
    var password2 = forma.password;
    alert("Hola");
    if(password2.value == "" || password2.value.length < 3){
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password2.focus();
        password2.select();
        return false;
    }

    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    var i;
    for( i=0 ; i< tecnologias.length ; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    if(!checkSeleccionado){
        alert("Debe proporcinar una Tecnologia");
        return false;
    }

    var generos = forma.genero;
    var radioSeleccionado = false;

    for(i=0; i<generos.length; i++){
        if(generos[i].checked){
            radioSeleccionado = true;
        }
    }
    if(!radioSeleccionado){
        alert("Debe seleccionar el genero");
        return false;
    }

    var ocupacion = forma.ocupaciones;
    if(ocupacion.value == "" || ocupacion.value == "Seleccionar"){
        alert("Debe seleccionar una ocupacion");
        return false;
    }

    alert("Formulario valido, enviando datos...");
    return true;
}