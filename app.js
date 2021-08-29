function Header() {
    header_uno = document.createElement("header");
        div_uno = document.createElement("div");
        header_uno.appendChild(div_uno);
            titulo = document.createElement("h1");
            titulo.textContent = "MIS FUNDAMENTOS EN JAVASCRIPT";
            titulo.className = "titulo";
        div_uno.appendChild(titulo);

document.body.appendChild(header_uno);
}

function Portada () {
    div_dos = document.createElement("div");
    div_dos.className = "div_portada";
        imagen = document.createElement("img");
        imagen.className = "portada";
        imagen.src = "./images/imagen_7.jpg";
        imagen.alt = "IMAGEN DE PORTADA JS";
    div_dos.appendChild(imagen);

document.body.appendChild(div_dos);    
}

function Carrusel() {
    let div_tres_contenedor = document.createElement("div");
            div_tres_contenedor.className = "carrusel";
            
        let div_tres_uno = document.createElement("div");
            div_tres_uno.className = "contenido_uno";
                let tituloContenidoUno = document.createElement("h2");
                tituloContenidoUno.textContent = "¿QUÉ ES JS?";
            div_tres_uno.appendChild(tituloContenidoUno);
    div_tres_contenedor.appendChild(div_tres_uno);

    let div_tres_dos = document.createElement("div");
            div_tres_dos.className = "contenido_dos";
                let tituloContenidoDos = document.createElement("h2");
                tituloContenidoDos.textContent = "CONTENIDO QUE VERAS";
            div_tres_dos.appendChild(tituloContenidoDos);
        div_tres_contenedor.appendChild(div_tres_dos);

    let div_tres_tres = document.createElement("div");
            div_tres_tres.className = "contenido_tres";
                let tituloContenidoTres = document.createElement("h2");
                tituloContenidoTres.textContent = "RECOMENDACIONES";
    div_tres_tres.appendChild(tituloContenidoTres);


    div_tres_contenedor.appendChild(div_tres_tres);
    
document.body.appendChild(div_tres_contenedor);
}


function Titulo_dos (){
    div_cuadro = document.createElement("div");
        titulo_dos = document.createElement("h2");
        titulo_dos.className = "titulo_dos";
        titulo_dos.textContent = "LO QUE PODRAS HACER";
    div_cuadro.appendChild(titulo_dos);

document.body.appendChild(div_cuadro);
}







function Muestra_uno () {
    
    let div_cinco = document.createElement("div");
        let div_seis = document.createElement("div");
            let titulo = document.createElement("h2");
            titulo.textContent = "Validar un número";
        div_seis.appendChild(titulo);

        let valor = document.createElement("input");
            valor.type = "text";
        let validador = div_seis.appendChild(valor);

        let boton = document.createElement("input");
        boton.type = "button";
        boton.value = "VALIDAR";
        div_seis.appendChild(boton);

        let respuesta = document.createElement("p");
        div_seis.appendChild(respuesta);


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

document.body.appendChild(div_seis);
}


Header();
Portada();
Carrusel();
Titulo_dos ();
Muestra_uno();