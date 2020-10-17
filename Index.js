function inicializarPagina() {

    // Añadiendo los escuchadores cada relación dinámica (2 por cada una pa q se le pueda dar click al texto y al "rectangulo")
    document.getElementById("diseñaAsignatura").addEventListener("click", formularioDisenaAsignatura)
    document.getElementById("diseñaAsignaturaText").addEventListener("click", formularioDisenaAsignatura)

    document.getElementById("diseñaClase").addEventListener("click", formularioDisenaClase)
    document.getElementById("diseñaClaseText").addEventListener("click", formularioDisenaClase)

    document.getElementById("ValidaProblema").addEventListener("click", formularioValidaProblema)
    document.getElementById("ValidaProblemaText").addEventListener("click", formularioValidaProblema)

    // Haciendo que cada formulario sea arrastrable
    asignarArrastracion(document.getElementById("divForm1"), document.getElementById("barraForm1"));
    asignarArrastracion(document.getElementById("divForm2"), document.getElementById("barraForm2"));
    asignarArrastracion(document.getElementById("divForm3"), document.getElementById("barraForm3"));
}

function asignarArrastracion(formulario, barra) {
    // Propósito: Hacer que el formulario sea "arrastrable"
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Se asigna la barra del formulario como el lugar de donde se lo arrastra
    barra.onmousedown = clickMouse;

    function clickMouse(input) {
        input = input || window.event;
        input.preventDefault();

        // Se obtienen las coordenadas X y Y de la posición inicial del mouse
        pos3 = input.clientX; pos4 = input.clientY;

        // Asignando evento para cuando se deja de hacer click
        document.onmouseup = closeDragElement;

        // Asignando evento para cuando se arrastra el mouse
        document.onmousemove = arrastrarFormulario;
    }

    function arrastrarFormulario(input) {
        input = input || window.event;
        input.preventDefault();

        // Se obtienen las nuevas coordenadas del mouse
        pos1 = pos3 - input.clientX;
        pos2 = pos4 - input.clientY;
        pos3 = input.clientX;
        pos4 = input.clientY;

        // Se mueve la ventana segun las nuevas coordenadas
        formulario.style.top = (formulario.offsetTop - pos2) + "px";
        formulario.style.left = (formulario.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Se deja quitan los eventos al dejar de hacer click
        document.onmouseup = null; document.onmousemove = null;
    }
}

function formularioDisenaAsignatura(input) {

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'>Diseña Asignatura</h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosDiseñaAsignatura" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">

            <label for="contenido"> Contenido </label>
            <input type="text" id="contenido">

            <label for="codigo"> Código </label>
            <input type="text" id="codigo">
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Diseñar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verAsignatura" type="button" class="botonExtra"> Ver Asignatura </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    divform.style.display = "block";
    divform.style.top = input.clientY + "px";
    divform.style.left = input.clientX + "px";

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDiseñaAsignatura").querySelectorAll("input"), "Asignatura");
        }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verAsignatura").addEventListener("click", verAsignatura, false);
}

function verAsignatura(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("asignaturas", "Nombre", asignaturas);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'>Ver Asignatura</h1>"

    document.getElementById("Form2").innerHTML = `
        <div id="datosVerAsignatura" class="campos">

            ${asignaturasHTML}

            <label for="profesores"> Profesor </label>
            <input type="text" id="profesores" readonly>

            <label for="codigo"> Código </label>
            <input type="text" id="codigo" readonly>
            
            <label for="horario"> Horario </label>
            <input type="text" id="horario" readonly>
            
            <label for="nota"> Nota </label>
            <input type="text" id="nota" readonly>
            
            <label for="estado"> Estado </label>
            <input type="text" id="estado" readonly>

            <label for="semestre"> Semestre </label>
            <input type="text" id="semestre" readonly>
            
            <label> Clase </label>
            <button id="verClases" type="button" class="botonExtra"> Ver Clases </button>

            <label> Contenido </label>
            <button id="verContenidos" type="button" class="botonExtra"> Ver Contenidos </button>
        </div>

        <div>
            <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    divform.style.display = "block";
    divform.style.top = input.clientY + "px";
    divform.style.left = input.clientX + "px";

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases("asignaturas") }, false);
    document.getElementById("verContenidos").addEventListener("click", verAsignatura, false);

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("asignaturas").addEventListener("change", () => { actualizarCamposSelect("asignaturas", "#datosVerAsignatura") }, false);
    actualizarCamposSelect("asignaturas", "#datosVerAsignatura")
}

function actualizarCamposSelect(nombreSelect, nombreContenedorCampos) {

    llaveAsignatura = document.getElementById(nombreLista).value;
    document.querySelector(nombreContenedorCampos).querySelectorAll("input").forEach(
        (element) => {
            element.value = asignaturas[llaveAsignatura][element.id];
        }
    );
}

function verClases(nombreSelect) {
    document.getElementById("asignaturas").value
    

}

function formularioDisenaClase(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario

    var asignaturasHTML = "<label for='asignaturas'>Asignatura</label> <select id='asignaturas'>";
    // var asignaturasHTML = "<label for='asignaturas'>Asignaturas</label> <label id='labelSelect'> <select id='asignaturas'>";
    for (var [key, value] of Object.entries(asignaturas)) {
        asignaturasHTML += "<option value='" + key + "'>" + key + "</option>"
    }
    asignaturasHTML += "</select>"
    // asignaturasHTML += "</select></label>"

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'>Diseña Clase</h1>"

    document.getElementById("Form1").innerHTML = `

        <div class="campos">
            <label for="tematica"> Temática </label>
            <input type="text" id="tematica">

            <label for="numero"> Contenido </label>
            <input type="text" id="numero">

            <label for="codigo"> Código </label>
            <input type="text" id="codigo">
            `
        + asignaturasHTML +
        `
        </div>
        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Guardar Clase </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verAsignaturas" type="button" class="botonExtra"> Ver Asignaturas </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    divform.style.display = "block";
    divform.style.top = input.clientY + "px";
    divform.style.left = input.clientX + "px";

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click", guardarDatos, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verAsignaturas").addEventListener("click", verAsignaturas, false);
}

function formularioValidaProblema(input) {

    var form = document.getElementById("Form1");
    form.innerHTML = `
        <h1 class="tituloForm">
            Profesor Valida Problema Mijín
        </h1>

        <div class="campos">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    
        <label for="country">Country</label>
        <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
        </select>

        <input id="confirmarForm1" type="submit" value="Submit">
        <button class="botonBorrar" type="button"> Borrar </button> 
        <div>
    `;

    var divform = document.getElementById("divForm1")
    divform.style.display = "block";
    divform.style.top = input.clientY + "px";;
    divform.style.left = input.clientX + "px";;

    document.getElementById("confirmarForm1").addEventListener("click", guardarDatos, false)
}

function obtenerDatosSelect(id, display, arreglo) {

    var salidaHTML = `<label for='${id}'> ${display} </label> <select id='${id}''>`;
    // var asignaturasHTML = "<label for='asignaturas'>Asignaturas</label> <label id='labelSelect'> <select id='asignaturas'>";
    for (var [key, value] of Object.entries(arreglo)) {
        salidaHTML += `<option value='${key}'> ${key} </option>`;
    }
    salidaHTML += "</select>";
    // asignaturasHTML += "</select></label>"

    return salidaHTML;
}

function guardarDatos(input, caso) {

    if (input[0].value != '') {
        switch (caso) {
            case "Asignatura":
                asignaturas[input[0].value] = crearObjeto(input);
                break;

            default:
                break;
        }
    }
}

function crearObjeto(listiviris) {
    var objeto = {};
    for (let index = 0; index < listiviris.length; index++) {
        objeto[listiviris[index].id] = listiviris[index].value
    }
    return objeto;
}

var criteriosEvaluacion = {};
var rubricas = {};
var asignaturas = {};
var clases = {};
var proyectos = {};
var equipos = {};
var carteraProyecto = {};
var representantes = {};
var empresas = {};
var problemas = {};
var retroalimentaciones = {};
var historiasAcademicas = {};
var estudiantes = {};
var profesores = {};
var metodologiasDesarrollo = {};
var informesIniciales = {};
var informesProgreso = {};
var informesFinales = {};
var prototipoAlfa = {};
var prototipoBeta = {};

window.addEventListener("load", inicializarPagina, false);


//var profesoresHTML = obtenerDatosSelect("profesores", "Profesor", profesores);