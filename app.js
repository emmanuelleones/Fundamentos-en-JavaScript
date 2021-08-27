function Header() {
    header_uno = document.createElement("header");
        div_uno = document.createElement("div");
        header_uno.appendChild(div_uno);
            titulo = document.createElement("h1");
            titulo.textContent = "MI PÁGINA";
            titulo.className = "titulo";
        div_uno.appendChild(titulo);

document.body.appendChild(header_uno);
}

function Portada () {
    div_dos = document.createElement("div");
    div_dos.className = "div_portada";
        imagen = document.createElement("img");
        imagen.className = "portada";
        imagen.src = "./images/portada_js.jpg";
        imagen.alt = "IMAGEN DE PORTADA JS";
    div_dos.appendChild(imagen);

document.body.appendChild(div_dos);    
}

function Carrusel() {
    let div_tres = document.createElement("div");
        let div_tres_uno = document.createElement("div");
            div_tres_uno.className = "contenido_uno";
                let tituloContenidoUno = document.createElement("h2");
                    tituloContenidoUno.textContent = "¿QUÉ ES JS?";
                    div_tres_uno.appendChild(tituloContenidoUno);
    div_tres.appendChild(div_tres_uno);

        let div_tres_dos = document.createElement("div");
            div_tres_dos.className = "contenido_dos";
                let tituloContenidoDos = document.createElement("h2");
                tituloContenidoDos.textContent = "CONTENIDO QUE VERAS";
            div_tres_dos.appendChild(tituloContenidoDos);
    div_tres.appendChild(div_tres_dos);

        let div_tres_tres = document.createElement("div");
            div_tres_tres.className = "contenido_tres";
                let tituloContenidoTres = document.createElement("h2");
                tituloContenidoTres.textContent = "RECOMENDACIONES";
            div_tres_tres.appendChild(tituloContenidoTres);


    div_tres.appendChild(div_tres_tres);
    
document.body.appendChild(div_tres);
}

function Formulario () {
    
    let tag_form = document.createElement("form");
        let titulo = document.createElement("h2");
        titulo.textContent = "Formulario:";
        tag_form.appendChild(titulo);

        let valor = document.createElement("input");
            valor.type = "text";
        let validador = tag_form.appendChild(valor);

        let boton = document.createElement("input");
        boton.type = "button";
        boton.value = "VALIDAR";
        tag_form.appendChild(boton);

        let respuesta = document.createElement("p");
        tag_form.appendChild(respuesta);


    function validar_valor() {

        if ( validador.value > 0 ){
            respuesta.textContent = ("Es MAYOR a cero");
        }
            else if (validador.value < 0) {
                respuesta.textContent = ("Es MENOR a cero");
            }           
                else if (validador.value == 0) { 
                    respuesta.textContent = ("El valor es igual cero");
                }
                    else{
                        respuesta.textContent = ("INVALIDO");
                    }
    }
        boton.onclick = validar_valor;

document.body.appendChild(tag_form);
}

Header();
Portada();
Carrusel();
Formulario();