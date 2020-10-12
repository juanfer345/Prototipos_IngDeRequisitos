function inicializarPagina(direccion) {

    // Añadiendo los escuchadores cada relación dinámica (2 por cada una pa q se le pueda dar click al texto y al "rectangulo")
    document.getElementById("diseñaAsignatura").addEventListener("click", formularioDisenaAsignatura)
    document.getElementById("diseñaAsignaturaText").addEventListener("click", formularioDisenaAsignatura)

    document.getElementById("ValidaProblema").addEventListener("click", formularioValidaProblema, false)
    document.getElementById("ValidaProblemaText").addEventListener("click", formularioValidaProblema, false)
    
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

function formularioDisenaAsignatura(input){

    document.getElementById("Form1").innerHTML = `
        <div>
            <h1 class="tituloForm">
                Diseña Asignatura
            </h1>

            <div class="campos">
                <label for="nombre"> Nombre </label>
                <input type="text" id="nombre">

                <label for="contenido"> Contenido </label>
                <input type="text" id="contenido">

                <label for="codigo"> Código </label>
                <input type="text" id="codigo">

                <label for="horario"> Horario </label>
                <input type="text" id="horario">

                <label for="nota"> Nota </label>
                <input type="text" id="nota">

                <label for="estado"> Estado </label>
                <input type="text" id="estado">

                <label for="clase"> Clase </label>
                <input type="text" id="clase">
            </div>

            <div class="botones">
                <button id="confirmarForm1" type="button" class="botonConfirmar"> Guardar Asignatura </button>
                <button type="reset" class="botonBorrar"> Reiniciar Campos </button>
                <button id="verAsignaturas" type="button" class="botonExtra"> Ver Asignaturas </button>
                <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
            </div>
        </div>
    `;

    var divform = document.getElementById("divForm1");
    divform.style.display = "block";
    divform.style.top = input.clientY + "px";
    divform.style.left = input.clientX + "px";
    
    document.getElementById("confirmarForm1").addEventListener("click", guardarDatos, false);
    document.getElementById("cerrarForm1").onclick = () => {divform.style.display = "none"};
    document.getElementById("verAsignaturas").addEventListener("click", verAsignaturas, false);
}

function formularioValidaProblema(input){

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

function guardarDatos(input){
    
    var target = input.currentTarget;

    switch (target.outerText) {
        case "Guardar Asignatura":
            asignaturas[target.form[0].value] = crearObjeto(target.form);
            break;
    
        default:
            break;
    }
}

function crearObjeto(objetiviris){
    
    var objeto = {};
    for (let index = 0; index < objetiviris.length; index++) {
        objeto[objetiviris[index].id] = objetiviris[index].value
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
var metodologiasDesarrollo = {};
var informesIniciales = {};
var informesProgreso = {};
var informesFinales = {};
var prototipoAlfa = {};
var prototipoBeta = {};



window.addEventListener("load", inicializarPagina, false);