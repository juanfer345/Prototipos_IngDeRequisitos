function inicializarPagina() {

    // Añadiendo los escuchadores cada relación dinámica (2 por cada una pa q se le pueda dar click al texto y al "rectangulo")
    document.getElementById("diseñaAsignatura").addEventListener("click", formularioDisenaAsignatura)
    document.getElementById("diseñaAsignaturaText").addEventListener("click", formularioDisenaAsignatura)

    document.getElementById("diseñaClase").addEventListener("click", formularioDisenaClase)
    document.getElementById("diseñaClaseText").addEventListener("click", formularioDisenaClase)

    document.getElementById("defineCriterio").addEventListener("click", formularioDefineCriterioEvaluacion)
    document.getElementById("defineCriterioText").addEventListener("click", formularioDefineCriterioEvaluacion)

    document.getElementById("registraEmpresa").addEventListener("click", formularioRegistraEmpresa)
    document.getElementById("registraEmpresaText").addEventListener("click", formularioRegistraEmpresa)

    document.getElementById("defineProblema").addEventListener("click", formularioDefineProblema)
    document.getElementById("defineProblemaText").addEventListener("click", formularioDefineProblema)

    document.getElementById("validaProblema").addEventListener("click", formularioValidaProblema)
    document.getElementById("validaProblemaText").addEventListener("click", formularioValidaProblema)

    document.getElementById("construyeCartera").addEventListener("click", formularioConstruyeCartera)
    document.getElementById("construyeCarteraText").addEventListener("click", formularioConstruyeCartera)

    document.getElementById("conformaEquipo").addEventListener("click", formularioConformaEquipo)
    document.getElementById("conformaEquipoText").addEventListener("click", formularioConformaEquipo)

    document.getElementById("defineMetodologia").addEventListener("click", formularioDefineMetodologia)
    document.getElementById("defineMetodologiaText").addEventListener("click", formularioDefineMetodologia)

    document.getElementById("entregaInformeInicial").addEventListener("click", formularioEntregaInformeInicial)
    document.getElementById("entregaInformeInicialText").addEventListener("click", formularioEntregaInformeInicial)

    document.getElementById("calificaInformeInicial").addEventListener("click", formularioCalificaInformeInicial)
    document.getElementById("calificaInformeInicialText").addEventListener("click", formularioCalificaInformeInicial)

    document.getElementById("entregaInformeProgreso").addEventListener("click", formularioEntregaInformeProgreso)
    document.getElementById("entregaInformeProgresoText").addEventListener("click", formularioEntregaInformeProgreso)

    document.getElementById("entregaPrototipoAlpha").addEventListener("click", formularioEntregaPrototipoAlpha)
    document.getElementById("entregaPrototipoAlphaText").addEventListener("click", formularioEntregaPrototipoAlpha)

    document.getElementById("realizaRetroalimentacion").addEventListener("click", formularioRealizaRetroalimentacion)
    document.getElementById("realizaRetroalimentacionText").addEventListener("click", formularioRealizaRetroalimentacion)

    document.getElementById("entregaInformeFinal").addEventListener("click", formularioEntregaInformeFinal)
    document.getElementById("entregaInformeFinalText").addEventListener("click", formularioEntregaInformeFinal)

    document.getElementById("entregaPrototipoBeta").addEventListener("click", formularioEntregaPrototipoBeta)
    document.getElementById("entregaPrototipoBetaText").addEventListener("click", formularioEntregaPrototipoBeta)

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

function mostracionFormulario(input, divform) {
    divform.style.display = "block";
    divform.style.top = input.clientY + "px";
    divform.style.left = input.clientX + "px";
}

function AsignacionExpansionTextArea(lista) {
    Array.from(lista).forEach(
        (campo) => {
            campo.addEventListener("input", () => { expansionTextArea(campo) })
        }
    );
}

function expansionTextArea(elemento) {
    elemento.style.height = "auto";
    elemento.style.height = elemento.scrollHeight + "px";
}

function expansionTextAreaDisabled(lista) {
    Array.from(lista).forEach(
        (campo) => {
            campo.style.height = "auto";
            campo.style.height = campo.scrollHeight + "px";
        }
    );
}

function formularioDisenaAsignatura(input) {

    // Identificador contenido
    var identificador = 0;

    // Obteniendo los valores preestablecidos para llenar el formulario
    const profesoresHTML = obtenerDatosSelect("profesor", "Profesor", profesores);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Diseña Asignatura </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosDiseñaAsignatura" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">

            ${profesoresHTML}
            
        </div>

        <button id="agregarContenido" type="button" class="botonAgregar"> Agregar Contenido </button>

        <div id="contenidoAsignatura" class="campos"></div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Diseñar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verAsignatura" type="button" class="botonExtra"> Ver Asignatura </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("agregarContenido").addEventListener("click",
        () => {
            var div = document.getElementById("contenidoAsignatura");

            var campo = document.createElement("input");
            campo.setAttribute("type", "text");
            campo.setAttribute("id", identificador);

            var boton = document.createElement("button");
            boton.setAttribute("id", identificador);
            boton.setAttribute("type", "button");
            boton.setAttribute("class", "botonRemover");
            boton.innerHTML = "Remover Contenido"
            boton.addEventListener("click", () => { campo.remove(); boton.remove(); }, false)

            div.appendChild(campo); div.appendChild(boton); identificador++;
        }
    );

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDiseñaAsignatura").querySelectorAll("input, select"), "Asignatura",
                undefined, document.querySelector("#contenidoAsignatura").querySelectorAll("input"));
            asignaturas[document.getElementById("nombre").value].estado = "Diseñada"
        }, false);
    document.getElementById("verAsignatura").addEventListener("click", () => { verAsignatura(event, "nombre") }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function verAsignatura(input, nombreCampoAsignatura = "") {

    // Asignatura seleccionada antes de dar click a ver clases
    if (nombreCampoAsignatura != "") {
        var asignatura = document.getElementById(nombreCampoAsignatura).value;
    }
    else {
        var asignatura = "";
    }

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("asignatura", "Nombre", asignaturas, asignatura);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Asignatura </h1>"

    document.getElementById("Form2").innerHTML = `
        <div id="datosVerAsignatura" class="campos">

            ${asignaturasHTML}

            <label for="profesor"> Profesor </label>
            <input type="text" id="profesor" disabled>
            
            <label for="estado"> Estado </label>
            <input type="text" id="estado" disabled>
            
        </div>
        <div id="datosVerAsignatura" class="botones">
            <button id="verClases" type="button" class="botonExtra"> Ver Clases </button>
            <button id="verContenidos" type="button" class="botonExtra"> Ver Contenidos </button>
        </div>

        <div>
            <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases(event, "asignatura") }, false);
    document.getElementById("verContenidos").addEventListener("click", () => { verContenidos(event, "asignatura") }, false);

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("asignatura").addEventListener("change", () => { actualizarCamposSelect("asignatura", "datosVerAsignatura", asignaturas) }, false);
    actualizarCamposSelect("asignatura", "datosVerAsignatura", asignaturas)
}

function verClases(input, nombreSelect = "") {

    // Asignatura seleccionada antes de dar click a ver clases
    if (nombreSelect != "") {
        var asignatura = document.getElementById(nombreSelect).value;
    }
    else {
        var asignatura = "";
    }

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("asignaturaVerClases", "Asignatura", asignaturas, asignatura);

    // Llenando los datos del formulario
    document.getElementById("barraForm3").innerHTML = "<h1 class='tituloForm'> Ver Clases </h1>"

    document.getElementById("Form3").innerHTML = `
        <div class="campos">
            ${asignaturasHTML}
        </div>

        <div class="tabla">
            <label class="tituloTabla""> Número </label>
            <label class="tituloTabla""> Temática </label>
        </div>

        <div id="datosVerClases" class="tabla"> </div>

        <div>
            <button id="cerrarForm3" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm3");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm3").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("asignaturaVerClases").addEventListener("change",
        () => {
            var asignatura = document.getElementById("asignaturaVerClases").value;
            LlenarTablaSelect(asignatura, "datosVerClases", clases, "Clases")
        }, false
    );
    LlenarTablaSelect(asignatura, "datosVerClases", clases, "Clases");
}

function verContenidos(input, nombreSelect) {

    // Asignatura seleccionada antes de dar click a ver clases
    var asignatura = document.getElementById(nombreSelect).value;

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("asignaturaConte", "Asignatura", asignaturas, asignatura);

    // Llenando los datos del formulario
    document.getElementById("barraForm3").innerHTML = "<h1 class='tituloForm'> Ver Contenidos </h1>"

    document.getElementById("Form3").innerHTML = `
        <div class="campos">
            ${asignaturasHTML}
        </div>

        <div class="tabla" id="tituloTabla">
            <label class="tituloTabla"> Contenido </label>
        </div>

        <div class="tabla" id="contenidoTabla"> </div>

        <div>
            <button id="cerrarForm3" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    document.getElementById("tituloTabla").style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))";
    document.getElementById("contenidoTabla").style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm3");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm3").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("asignaturaConte").addEventListener("change", () => {
        var asignatura = document.getElementById("asignaturaConte").value;
        LlenarTablaSelect(asignatura, "contenidoTabla", asignaturas[asignatura]["contenidos"], "Contenidos")
    }, false);
    LlenarTablaSelect(asignatura, "contenidoTabla", asignaturas[asignatura]["contenidos"], "Contenidos")
}

function formularioDisenaClase(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("asignatura", "Asignatura", asignaturas);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Diseña Clase </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosDiseñaClase" class="campos">

            <label for="tematica"> Temática </label>
            <input type="text" id="tematica">
            
            <label for="numero"> Número </label>
            <input type="number" id="numero" min="0">
            
            ${asignaturasHTML}
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Diseñar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verClases" type="button" class="botonExtra"> Ver Clases </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDiseñaClase").querySelectorAll("input, select"), "Clase");
        }, false
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases(event, "asignatura") }, false);
}

function formularioDefineCriterioEvaluacion(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("rubrica", "Nombre", rubricas);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Diseña Rúbrica </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosDiseñaRubrica" class="campos">

            <label for="tematica"> Temática </label>
            <input type="text" id="tematica">
            
            <label for="numero"> Número </label>
            <input type="number" id="numero">
            
            ${asignaturasHTML}
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Diseñar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verClases" type="button" class="botonExtra"> Ver Clases </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDiseñaClase").querySelectorAll("input, select"), "Clase");
        }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases(event) }, false);
}

function formularioRegistraEmpresa(input) {

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Registra Empresa </h1>"

    document.getElementById("Form1").innerHTML = `
        <h2 class='subtituloForm'> Datos Empresa </h2>

        <div id="datosRegistraEmpresa" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="mision"> Misión </label>
            <textarea id="mision"></textarea>
            
            <label for="vision"> Visión </label>
            <textarea id="vision"></textarea>
            
            <label for="objetivo"> Objetivo Estratégico </label>
            <textarea id="objetivo"></textarea>
            
            <label for="necesidad"> Necesidad </label>
            <textarea id="necesidad"></textarea>
        </div>

        <h2 class='subtituloForm'> Datos Representante </h2>

        <div id="datosRegistraRepresentante" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="correo"> Correo </label>
            <input type="email" id="correo">
            
            <label for="celular"> Celular </label>
            <input type="number" id="celular" min="0">
            
            <label> Disponibilidad </label>

            <div class="radios">
                <input type="radio" id="disponibilidad" name="disponibilidad" value="poca">
                <label> Poca </label>

                <input type="radio" id="disponibilidad" name="disponibilidad" value="mucha">
                <label> Mucha </label>
            </div>
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Registrar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosRegistraEmpresa").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            const llaveEmpresa = document.querySelector("#datosRegistraEmpresa").querySelectorAll("input")[0].value;

            guardarDatos(document.querySelector("#datosRegistraEmpresa").querySelectorAll("input, textarea"), "Empresa");
            guardarDatos(document.querySelector("#datosRegistraRepresentante").querySelectorAll("input"), "Representante",
                undefined, [["empresa", empresas[llaveEmpresa].nombre]]);
        }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioDefineProblema(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Nombre Empresa", empresas);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Define Problema </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosDefineProblema" class="campos">

            ${empresasHTML}

            <label for="causa"> Causa </label>
            <textarea id="causa"></textarea>
            
            <label for="descripcion"> Descripción </label>
            <textarea id="descripcion"></textarea>

            <label for="impacto"> Impacto </label>
            <textarea id="impacto"></textarea>
            
            <label for="proceso"> Proceso Asociado </label>
            <textarea id="proceso"></textarea>

            <label for="actor"> Actor Involucrado </label>
            <input type="text" id="actor">
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Definir </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosDefineProblema").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDefineProblema").querySelectorAll("input, select, textarea"), "Problema");
        }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioValidaProblema(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Nombre Empresa", empresas);
    const validacionHTML = obtenerDatosSelect("validacion", "Validación", { "Aprobado Sin Ajustes": {}, "Aprobado Con Ajustes": {}, "No Aprobado": {} });

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Valida Problema </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosProblema" class="campos">

            ${empresasHTML}

            <label for="causa"> Causa </label>
            <textarea id="causa" disabled></textarea>
            
            <label for="descripcion"> Descripción </label>
            <textarea id="descripcion" disabled></textarea>

            <label for="impacto"> Impacto </label>
            <textarea id="impacto" disabled></textarea>
            
            <label for="proceso"> Proceso Asociado </label>
            <textarea id="proceso" disabled></textarea>

            <label for="actor"> Actor Involucrado </label>
            <input type="text" id="actor" disabled>
            
            ${validacionHTML}

            <label for="comentario"> Comentario </label>
            <textarea id="comentario"></textarea>
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Validar </button>
            <button id="reset" type="button" class="botonBorrar"> Limpiar Campos </button>
            <button id="verEmpresa" type="button" class="botonExtra"> Ver Empresa </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Borrado especial cuando hay campos editables y no editables
    document.getElementById("reset").addEventListener("click",
        () => {
            document.getElementById("comentario").value = "";
        }
    );

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosProblema").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosProblema").querySelectorAll("input, select, textarea"), "Problema", undefined, 0);
        }, false);
    document.getElementById("verEmpresa").addEventListener("click", () => { verEmpresa(event, "empresa") }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresa").addEventListener("change",
        () => {
            actualizarCamposSelect("empresa", "datosProblema", problemas)

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosProblema").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("empresa", "datosProblema", problemas);

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosProblema").querySelectorAll("textarea"));
}

function verEmpresa(input, selectEmpresa) {

    nombreEmpresa = document.getElementById(selectEmpresa).value

    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresaVer", "Nombre Empresa", empresas, nombreEmpresa);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Empresa </h1>"

    document.getElementById("Form2").innerHTML = `
    
        <h2 class='subtituloForm'> Datos Empresa </h2>

        <div id="datosEmpresa" class="campos">

            ${empresasHTML}
            
            <label for="mision"> Misión </label>
            <textarea id="mision" disabled></textarea>
            
            <label for="vision"> Visión </label>
            <textarea id="vision" disabled></textarea>
            
            <label for="objetivo"> Objetivo Estratégico </label>
            <textarea id="objetivo" disabled></textarea>
            
            <label for="necesidad"> Necesidad </label>
            <textarea id="necesidad" disabled></textarea>
        </div>
    
        <h2 class='subtituloForm'> Datos Representante </h2>

        <div id="datosRepresentante" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre" disabled>
            
            <label for="correo"> Correo </label>
            <input type="email" id="correo" disabled>
            
            <label for="celular"> Celular </label>
            <input type="text" id="celular" min="0" disabled>
            
            <label> Disponibilidad </label>
            <input type="text" id="disponibilidad" disabled>
        </div>
        
        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresaVer").addEventListener("change",
        () => {
            actualizarCamposSelect("empresaVer", "datosEmpresa", empresas);
            actualizarCamposSelect("empresaVer", "datosRepresentante", representantes, true, "empresa");

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosEmpresa").querySelectorAll("textarea"));
        }
    );

    actualizarCamposSelect("empresaVer", "datosEmpresa", empresas);
    actualizarCamposSelect("empresaVer", "datosRepresentante", representantes, true, "empresa");

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosEmpresa").querySelectorAll("textarea"));
}

function formularioConstruyeCartera(input) {

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Construye Cartera de Proyecto </h1>"

    document.getElementById("Form1").innerHTML = `

        <div id="datosCartera" class="campos">
            
            <label for="cantidad"> Cantidad </label>
            <input type="number" id="cantidad" disabled>

        </div>
        
        <div class="botones">
            <button id="agregaProyecto" type="button" class="botonExtra"> Agregar Proyecto </button>
            <button id="verProyecto" type="button" class="botonExtra"> Ver Proyecto </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("agregaProyecto").addEventListener("click", () => { agregarProyecto(event) }, false);
    document.getElementById("verProyecto").addEventListener("click", () => { verProyecto(event) }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function agregarProyecto(input) {
    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Empresa", empresas);
    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Agregar Proyecto </h1>"

    document.getElementById("Form2").innerHTML = `

        ${EmpresasHTML}

        <div id="datosCartera" class="campos">
            
            <label for="cantidad"> Cantidad </label>
            <input type="number" id="cantidad" disabled>

        </div>
        
        <div class="botones">
            <button id="agregaProyecto" type="button" class="botonExtra"> Agregar Proyecto </button>
            <button id="verProyecto" type="button" class="botonExtra"> Ver Proyecto </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
}

function verProyecto(input) {

}

function formularioConformaEquipo(input) {
    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Empresa Proyecto", empresas);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Conforma Equipo </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosEquipo" class="campos">

            ${empresasHTML}

            <label for="codigo"> Codigo </label>
            <input type="text" id="codigo" disabled>
            
            <label for="descripcion"> Descripción </label>
            <input type="text" id="descripcion" disabled>

            <label for="impacto"> Impacto </label>
            <input type="text" id="impacto" disabled>
            
            <label for="proceso"> Proceso Asociado </label>
            <input type="text" id="proceso" disabled>

            <label for="actor"> Actor Involucrado </label>
            <input type="text" id="actor" disabled>
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Conformar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verEquipo" type="button" class="botonExtra"> Ver Equipo </button>
            <button id="agregarEstudiante" type="button" class="botonExtra"> Agregar Estudiante </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEquipo").querySelectorAll("input, select"), "Equipo");
        }, false);
    document.getElementById("verEmpresa").addEventListener("click", () => { verEmpresa(event, "empresa") }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresa").addEventListener("change", () => { actualizarCamposSelect("empresa", "datosProblema", problemas) }, false);
    actualizarCamposSelect("empresa", "datosProblema", problemas);
}

function formularioDefineMetodologia(input) {
    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Define Metodologia de Desarrollo </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosMetodologia" class="campos">

            ${equiposHTML}

            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="pasos"> Pasos </label>
            <input type="text" id="paso">

            <label for="roles"> Roles </label>
            <input type="text" id="roles">

            <label for="entregables"> Entregables </label>
            <input type="text" id="entregables">
            
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Definir </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosMetodologia").querySelectorAll("select, input"), "Metodologia");
        }, false);

    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioEntregaInformeInicial(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Entrega Informe Inicial </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosEntregaInfIn" class="campos">

            ${equiposHTML}

            <label for="tema"> Tema </label>
            <input type="text" id="tema">
            
            <label for="secciones"> Secciones </label>
            <input type="text" id="secciones">

            <label for="idea"> Idea de Desarrollo </label>
            <input type="text" id="idea">
            
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verCalificacion" type="button" class="botonExtra"> Ver Calificación </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEntregaInfIn").querySelectorAll("select, input"), "InformeInicial");
        }, false);

    document.getElementById("verCalificacion").addEventListener("click", () => {
        verCalificacion(event, "equipo", "Informe Inicial")
    }, false);

    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioCalificaInformeInicial(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipoVer", "Código Equipo", equipos);
    const estadoHTML = obtenerDatosSelect("estadoVer", "Estado", { Completo: {}, Incompleto: {} }, "Incompleto");

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = `<h1 class='tituloForm'> Califica Informe Inicial </h1>`

    document.getElementById("Form1").innerHTML = `
        <div id="datosVerCalificacion" class="campos">

            ${equiposHTML}
            
            <label for="tema"> Tema </label>
            <input type="text" id="tema" disabled>
            
            <label for="secciones"> Secciones </label>
            <input type="text" id="secciones" disabled>

            <label for="idea"> Idea de Desarrollo </label>
            <input type="text" id="idea" disabled>

            ${estadoHTML}

            <h2 class='subtituloForm'> Rúbrica Informe Inicial </h2>

            <label for="nota"> Nota de la Rúbrica </label>
            <input type="text" id="nota">

        </div>

        <label> Criterios de Evaluación </label>

        <div id="columnas" class="tabla">
            <label class="tituloTabla""> Nombre </label>
            <label class="tituloTabla""> Descripción </label>
            <label class="tituloTabla""> Valoración </label>
            <label class="tituloTabla""> Comentario </label>
            <label class="tituloTabla""> Nota </label>
            <label class="tituloTabla""> Peso </label>
        </div>

        <div id="datosCriteriosEval" class="tabla"> </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Calificar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("columnas").style.gridTemplateColumns = "20px 20px 20px 20px 20px 20px";
    document.getElementById("datosCriteriosEval").style.gridTemplateColumns = "20px 20px 20px 20px 20px 20px";

    // Obteniendo el equipo seleccionado
    equipoSeleccionado = document.getElementById("equipoVer").value

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.getElementById("nota"), "Nota Rubrica Inicial");
        }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("equipoVer").addEventListener("change",
        () => {
            actualizarCamposSelect("equipoVer", "datosVerCalificacion", informesIniciales);
            LlenarTablaSelect(equipoSeleccionado, "datosCriteriosEval", Criterios, "Criterios llenar");
        }, false);
    actualizarCamposSelect("equipoVer", "datosVerCalificacion", informePrototipo)
    LlenarTablaSelect(equipoSeleccionado, "datosCriteriosEval", Criterios, "Criterios llenar")
}

function formularioEntregaInformeProgreso(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Entrega Informe de Progreso </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosEntregaInfProg" class="campos">

            ${equiposHTML}

            <label for="tema"> Tema </label>
            <input type="text" id="tema">
            
            <label for="secciones"> Secciones </label>
            <input type="text" id="secciones">

            <label for="avance"> Avance </label>
            <input type="text" id="avance">
            
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verCalificacion" type="button" class="botonExtra"> Ver Calificación </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEntregaInfProg").querySelectorAll("select, input"), "InformeProgreso");
        }, false);

    document.getElementById("verCalificacion").addEventListener("click", () => {
        verCalificacion(event, "equipo", "Informe de Progreso")
    }, false);

    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioEntregaPrototipoAlpha(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Entrega Prototipo Alpha </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosEntregaProAlpha" class="campos">

            ${equiposHTML}

            <label for="link"> Link </label>
            <input type="text" id="link">
            
            <label for="fechaEntrega"> Fecha de Entrega </label>
            <input type="text" id="fechaEntrega">

        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verCalificacion" type="button" class="botonExtra"> Ver Calificación </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEntregaProAlpha").querySelectorAll("select, input"), "PrototipoAlpha");
        }, false);

    document.getElementById("verCalificacion").addEventListener("click", () => {
        verCalificacion(event, "equipo", "Prototipo Alfa")
    }, false);

    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioEntregaInformeFinal(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Entrega Informe Final </h1>"

    document.getElementById("Form1").innerHTML = `
    <div id="datosEntregaInfFinal" class="campos">
    
            ${equiposHTML}

            <label for="tema"> Tema </label>
            <input type="text" id="tema">
            
            <label for="secciones"> Secciones </label>
            <input type="text" id="secciones">

            <label for="avance"> Avance </label>
            <input type="text" id="avance">
            
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verCalificacion" type="button" class="botonExtra"> Ver Calificación </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEntregaInfFinal").querySelectorAll("select, input"), "InformeFinal");
        }, false);

    document.getElementById("verCalificacion").addEventListener("click", () => {
        verCalificacion(event, "equipo", "Informe Final")
    }, false);

    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioEntregaPrototipoBeta(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Entrega Prototipo Beta </h1>"

    document.getElementById("Form1").innerHTML = `
           <div id="datosEntregaProBeta" class="campos">
   
               ${equiposHTML}
   
               <label for="link"> Link </label>
               <input type="text" id="link">
               
               <label for="fechaEntrega"> Fecha de Entrega </label>
               <input type="text" id="fechaEntrega">
   
           </div>
   
           <div class="botones">
               <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
               <button type="reset" class="botonBorrar"> Limpiar Campos </button>
               <button id="verCalificacion" type="button" class="botonExtra"> Ver Calificación </button>
               <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
           </div>
       `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEntregaProBeta").querySelectorAll("select, input"), "PrototipoBeta");
        }, false);

    document.getElementById("verCalificacion").addEventListener("click", () => {
        verCalificacion(event, "equipo", "Prototipo Beta")
    }, false);

    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioRealizaRetroalimentacion(input) {
    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Realiza Retroalimentación </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosPrototipoAlpha" class="campos">

            ${equiposHTML}

            <label for="link"> Link </label>
            <input type="text" id="link" disabled>
            
            <label for="calidad"> Calidad </label>
            <input type="text" id="calidad" disabled>

            <label for="fechaEntrega"> Fecha de Entrega </label>
            <input type="text" id="fechaEntrega" disabled>

        </div>

        <div id="datosRealizaRetro" class="campos">

            <label for="valoracion"> Valoración </label>
            <input type="text" id="valoracion">

            <label for="sugerencia"> Sugerencia </label>
            <input type="text" id="sugerencia">

        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Guardar Retroalimentación </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            
        </div>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("equipo").addEventListener("change",
        () => {
            actualizarCamposSelect("equipo", "datosPrototipoAlpha", equipos);
        }, false);
    actualizarCamposSelect("equipo", "datosPrototipoAlpha", equipos);

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosRealizaRetro").querySelectorAll("select, input"), "Retroalimentacion");
        }, false);

    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

}

function verCalificacion(input, IDequipoSeleccionado, tipoInfProt) {

    // Asignatura seleccionada antes de dar click a ver clases¿
    var equipoSeleccionado = document.getElementById(IDequipoSeleccionado).value;

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipoVer", "Código Equipo", equipos, equipoSeleccionado);

    // Parámetro que cambian dependiendo del tipo de informe y prototipo
    var avanceIdea; var retroalimentacion;

    switch (tipoInfProt) {
        case "Informe Inicial":
            avanceIdea = `<label for="idea"> Idea de Desarrollo </label>
                          <input type="text" id="idea" disabled></input>`
            var informePrototipo = informesIniciales;
            var Criterios = criteriosEvaluacionInfInicial;
            break;

        case "Informe de Progreso":
            avanceIdea = `<label for="avance"> Avance </label>
                          <input type="text" id="avance" disabled></input>`
            var informePrototipo = informesProgreso;
            var Criterios = criteriosEvaluacionInfProgreso;
            break;

        case "Informe Final":
            avanceIdea = `<label for="conclusion"> Conclusión </label>
                          <input type="text" id="conclusion" disabled></input>`
            var informePrototipo = informesFinales;
            var Criterios = criteriosEvaluacionInfFinal;
            break;

        case "Prototipo Alfa":
            retroalimentacion = `
                    <label for="valoracion"> Valoración </label>
                    <input type="text" id="valoracion" disabled></input>

                    <label for="sugerencia"> Sugerencia </label>
                    <input type="text" id="sugerencia" disabled></input>
                    `
            var informePrototipo = prototipoAlfa;
            var Criterios = criteriosEvaluacionProtAlfa;
            break;

        case "Prototipo Beta":
            retroalimentacion = ``
            var informePrototipo = prototipoBeta;
            var Criterios = criteriosEvaluacionProtBeta;
            break;
        default:
            break;
    }
    var contenido
    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
        contenido = `
            <label for="tema"> Tema </label>
            <input type="text" id="tema" disabled>
            
            <label for="secciones"> Secciones </label>
            <input type="text" id="secciones" disabled>

            ${avanceIdea}
            
            <label for="estado"> Estado </label>
            <input type="text" id="estado" disabled>

            <label for="rubrica"> Rúbrica </label>
            <input type="text" id="rubrica" disabled>
            
            <label for="notaRubrica"> Nota de la Rubrica </label>
            <input type="text" id="notaRubrica" disabled>
            `
    }
    else {
        contenido = `
            <label for="link"> Link </label>
            <input type="text" id="link" disabled>
            
            <label for="calidad"> Calidad </label>
            <input type="text" id="calidad" disabled>

            <label for="fecha"> Fecha de Entrega </label>
            <input type="text" id="fecha" disabled>
            
            <label for="rubrica"> Rúbrica </label>
            <input type="text" id="rubrica" disabled>

            <label for="notaRubrica"> Nota de la Rubrica </label>
            <input type="text" id="notaRubrica" disabled>

            ${retroalimentacion}`
    }

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = `<h1 class='tituloForm'> Ver Calificación ${tipoInfProt}</h1>`

    document.getElementById("Form2").innerHTML = `
        <div id="datosVerCalificacion" class="campos">

            ${equiposHTML}

            ${contenido}

            <label> Criterios de Evaluación </label>

            <div id="columnas" class="tabla">
                <label class="tituloTabla""> Nombre </label>
                <label class="tituloTabla""> Descripción </label>
                <label class="tituloTabla""> Valoración </label>
                <label class="tituloTabla""> Comentario </label>
                <label class="tituloTabla""> Nota </label>
                <label class="tituloTabla""> Peso </label>
            </div>

            <div id="datosCriteriosCalif" class="tabla"> </div>

        </div>

        <div>
            <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    document.getElementById("columnas").style.gridTemplateColumns = "20px 20px 20px 20px 20px 20px";
    document.getElementById("datosCriteriosCalif").style.gridTemplateColumns = "20px 20px 20px 20px 20px 20px";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("equipoVer").addEventListener("change",
        () => {
            actualizarCamposSelect("equipoVer", "datosVerCalificacion", informePrototipo)
            LlenarTablaSelect(equipoSeleccionado, "datosCriteriosCalif", Criterios)
        }, false);
    actualizarCamposSelect("equipoVer", "datosVerCalificacion", informePrototipo)
    LlenarTablaSelect(equipoSeleccionado, "datosCriteriosCalif", Criterios, "criterios")
}

function actualizarCamposSelect(nombreSelect, nombreContenedorCampos, arreglo, buscarPorValue = false, nombreValue = "") {

    const llave = document.getElementById(nombreSelect).value;
    const campos = document.querySelector("#" + nombreContenedorCampos).querySelectorAll("input, textarea");
    var condicionalEncontracion = false;

    // Poniendo iniialmente todos los valores vacíos
    Array.from(campos).forEach(
        (campo) => {
            campo.value = "";
        }
    );

    if (llave != "") {
        if (!buscarPorValue) {
            for (var [key, value] of Object.entries(arreglo)) {
                if (llave == key) {
                    for (var [key, value2] of Object.entries(value)) {
                        var element = Array.from(campos).find(
                            (campo) => {
                                return campo.id == key;
                            }
                        );
                        if (element != undefined) { element.value = value2; }
                    }
                    condicionalEncontracion = true;
                    break;
                }
            }
        }
        else {
            for (var [key, value] of Object.entries(arreglo)) {
                if (llave == value[nombreValue]) {
                    for (var [key, value2] of Object.entries(value)) {
                        var element = Array.from(campos).find(
                            (campo) => {
                                return campo.id == key;
                            }
                        );
                        if (element != undefined) {
                            element.value = value2;
                        }
                    }
                    condicionalEncontracion = true;
                    break;
                }
            }
        }
    }
    if (!condicionalEncontracion) {
        Array.from(campos).forEach(
            (campo) => {
                campo.value = ""
            }
        )
    }
}

function LlenarTablaSelect(llave, nombreContenedorCampos, arreglo, caso) {

    var acumulador = "";

    if (arreglo[Object.keys(arreglo)[0]] != undefined) {
        switch (caso) {
            case "Clases":

                if (llave == "") {
                    llave = arreglo[Object.keys(arreglo)[0]].asignatura;
                }
                for (var [key, value] of Object.entries(arreglo)) {
                    if (value.asignatura == llave) {
                        acumulador += `
                            <label> ${value.numero} </label>
                            <label> ${value.tematica} </label>
                        `;
                    }
                }
                break;

            case "Contenidos":

                for (var [key, value] of Object.entries(arreglo)) {
                    acumulador += `<label> ${value} </label>`;
                }
                break;

            case "Criterios":

                if (llave == "") {
                    llave = arreglo[Object.keys(arreglo)[0]].equipo;
                }
                for (var [key, value] of Object.entries(arreglo)) {
                    if (value.equipo == llave) {
                        acumulador += `
                            <label> ${value.nombre} </label>
                            <label> ${value.descripcion} </label>
                            <label> ${value.valoracion} </label>
                            <label> ${value.comentario} </label>
                            <label> ${value.nota} </label>
                            <label> ${value.peso} </label>
                        `;
                    }
                }
                break;

            case "Criterios llenar":

                if (llave == "") {
                    llave = arreglo[Object.keys(arreglo)[0]].equipo;
                }
                for (var [key, value] of Object.entries(arreglo)) {
                    if (value.equipo == llave) {
                        acumulador += `
                            <label> ${value.nombre} </label>
                            <label> ${value.descripcion} </label>
                            <input type="text" id="valoracion_${value.nombre}">
                            <input type="text" id="comentario_${value.nombre}">
                            <input type="number" id="nota_${value.nombre}">
                            <label> ${value.peso} </label>
                        `;
                    }
                }
                break;
        }
    }
    document.getElementById(nombreContenedorCampos).innerHTML = acumulador;
}

function obtenerDatosSelect(id, display, arreglo, seleccionado = "") {

    var salidaHTML = `<label for='${id}'> ${display} </label> <select id='${id}'>`;
    // var asignaturasHTML = "<label for='asignaturas'>Asignaturas</label> <label id='labelSelect'> <select id='asignaturas'>";
    for (var [key, value] of Object.entries(arreglo)) {

        if (key == seleccionado) {
            salidaHTML += `<option value='${key}' selected> ${key} </option>`;
        }
        else {
            salidaHTML += `<option value='${key}'> ${key} </option>`;
        }
    }
    salidaHTML += "</select>";
    // asignaturasHTML += "</select></label>"
    return salidaHTML;
}

function guardarDatos(input, caso, llave = input[0].value, nuevoAgrega) {

    var condicionCamposCompletos = true; var condicionAlertacion = true;
    var cadenaAux1, cadenaAux2;

    // Esto es para comprobar que se hallan enviado todos los datos
    input.forEach((valor) => {
        if (valor.value == '') { condicionCamposCompletos = false; }
    });

    if (condicionCamposCompletos) {
        switch (caso) {
            case "Asignatura":
                cadenaAux1 = `La asignatura ${llave}`; cadenaAux2 = "almacenada"
                asignaturas[llave] = crearObjeto(input);

                if (nuevoAgrega != undefined) {
                    if (asignaturas[llave] != undefined) {
                        asignaturas[llave]["contenidos"] = {};
                        adicionarAobjeto(asignaturas[llave]["contenidos"], nuevoAgrega);
                    }
                }
                break;

            case "Clase":
                cadenaAux1 = `La clase ${llave} de la asignatura ${input[2].value}`; cadenaAux2 = "almacenada"
                clases[llave] = crearObjeto(input);
                break;

            case "Empresa":
                cadenaAux1 = `La empresa ${llave}`; cadenaAux2 = "almacenada"
                empresas[llave] = crearObjeto(input);
                break;

            case "Representante":
                cadenaAux1 = `El representante ${llave}`; cadenaAux2 = "almacenado"
                representantes[llave] = crearObjeto(input);

                if (nuevoAgrega != undefined) {
                    adicionarAobjeto(representantes[llave], nuevoAgrega);
                }
                break;

            case "Problema":

                if (nuevoAgrega == undefined) {
                    cadenaAux1 = `El problema de la empresa ${llave}`; cadenaAux2 = "almacenado"
                }
                else {
                    cadenaAux1 = `El problema de la empresa ${llave}`; cadenaAux2 = "validado"
                }
                problemas[llave] = crearObjeto(input);
                break;

            case "InformeProgreso":
                cadenaAux1 = `El Informe de Progreso del equipo ${llave}`; cadenaAux2 = "almacenado"
                informesProgreso[llave] = crearObjeto(input);
                break;

            case "InformeInicial":
                cadenaAux1 = `El informe inicial del equipo ${llave}`; cadenaAux2 = "almacenado"
                informesIniciales[llave] = crearObjeto(input);
                break;

            case "InformeFinal":
                cadenaAux1 = `El informe Final del equipo ${llave}`; cadenaAux2 = "almacenado"
                informesFinales[llave] = crearObjeto(input);
                break;

            case "PrototipoAlpha":
                cadenaAux1 = `El prototipo Alpha del equipo ${llave}`; cadenaAux2 = "almacenado"
                prototipoAlfa[llave] = crearObjeto(input);
                break;

            case "Retroalimentacion":
                cadenaAux1 = `La retroalimentación del prototipo Alpha del equipo ${input[0].value}`; cadenaAux2 = "almacenada"
                retroalimentaciones[input[0].value] = crearObjeto(input);
                break;

            case "PrototipoBeta":
                cadenaAux1 = `El prototipo Beta del equipo ${llave}`; cadenaAux2 = "almacenado"
                prototipoBeta[llave] = crearObjeto(input);
                break;

            case "Metodologia":
                cadenaAux1 = `La metodologia del equipo ${llave}`; cadenaAux2 = "almacenada"
                metodologiasDesarrollo[llave] = crearObjeto(input);
                break;

            case "Rubrica Inicial":
                cadenaAux1 = `La rubrica ${input[1].value}`; cadenaAux2 = "almacenada"
                rubricaInicial[llave] = crearObjeto(input);
                break;

            case "Nota Rubrica Inicial":
                if (rubricaInicial[llave] != undefined) {
                    cadenaAux1 = `La nota de la rubrica ${rubricaInicial[llave][1].value}`; cadenaAux2 = "almacenado"
                    rubricaInicial[llave]["nota"] = input.value;
                }
                break;

            default:
                break;
        }
        if (condicionAlertacion) { alert(`${cadenaAux1} ha sido ${cadenaAux2}`); }
    }
    else if (caso != "Contenido Asignatura") {
        alert("Por favor llenar todos los campos")
    }
}

function crearObjeto(listiviris) {
    var objeto = {};
    for (let index = 0; index < listiviris.length; index++) {
        if (listiviris[index].type != "radio") {
            objeto[listiviris[index].id] = listiviris[index].value
        }
        else {
            if (listiviris[index].checked) {
                objeto[listiviris[index].id] = listiviris[index].value
            }
        }
    }
    return objeto;
}

function adicionarAobjeto(objeto, listiviris) {
    if (NodeList.prototype.isPrototypeOf(listiviris)) {
        for (let index = 0; index < listiviris.length; index++) {
            if (listiviris[index].type != "radio") {
                objeto[listiviris[index].id] = listiviris[index].value;
            }
            else {
                if (listiviris[index].checked) {
                    objeto[listiviris[index].id] = listiviris[index].value;
                }
            }
        }
    }
    else if (Array.isArray(listiviris)) {
        for (let index = 0; index < listiviris.length; index++) {
            if (listiviris[index].type != "radio") {
                objeto[listiviris[index][0]] = listiviris[index][1];
            }
            else {
                if (listiviris[index].checked) {
                    objeto[listiviris[index][0]] = listiviris[index][1];
                }
            }
        }
    }
}

var criteriosEvaluacionInfInicial = { 1: { nombre: "A", descripcion: "AA", peso: "Alto" } };
var criteriosEvaluacionInfProgreso = {};
var criteriosEvaluacionInfFinal = {};
var criteriosEvaluacionProtAlfa = {};
var criteriosEvaluacionProtBeta = {};

var asignaturas = {
    "Ingeniería de Software": {
        contenidos: { 1: "Metodologías de Desarrollo", 2: "Conceptos UN-Lencep", 3: "Conceptos UML" },
        nombre: "Ingeniería de Software",
        profesor: "Alan Brito Delgado",
        estado: "Diseñada"
    },
    "Programación Orientada a Objetos": {
        contenidos: {},
        nombre: "Programación Orientada a Objetos",
        profesor: "Elma Riadito",
        estado: "Diseñada"
    },
    "Calidad del Software": {
        contenidos: { 1: "Buena calidad", 2: "Mejor calidad" },
        nombre: "Calidad del Software",
        profesor: "Elsa Pato",
        estado: "Diseñada"
    },
    "Calidad del Software II": {
        contenidos: { 0: "Mucha mejor calidad", 1: "Muchísima mejor calidad", 2: "Muchisisisima mejor calidad" },
        nombre: "Calidad del Software II",
        profesor: "Alan Brito Delgado",
        estado: "Diseñada"
    }
};

var clases = {
    "Calidad del código": {
        tematica: "Calidad del código",
        numero: "1",
        asignatura: "Calidad del Software"
    },
    "Calidad de los casos de uso": {
        tematica: "Calidad de los casos de uso",
        numero: "2",
        asignatura: "Calidad del Software"
    },
    Scrum: {
        tematica: "Scrum",
        numero: "1",
        asignatura: "Ingeniería de Software"
    },
    RUP: {
        tematica: "RUP",
        numero: "2",
        asignatura: "Ingeniería de Software"
    },
    Cascada: {
        tematica: "Cascada",
        numero: "3",
        asignatura: "Ingeniería de Software"
    },
    Espiral: {
        tematica: "Espiral",
        numero: "4",
        asignatura: "Ingeniería de Software"
    }
};

var proyectos = { cantidad: 0 };
var equipos = {
    AA: { nombre: "AA", mision: "misi", vision: "visi", objetivo: "obje", necesidad: "nece" },
};

var representantes = {
    "José José": {
        celular: "123",
        correo: "j@j.com",
        disponibilidad: "mucha",
        nombre: "José José",
        empresa: "Postobon"
    },
    "Yola Prieto": {
        celular: "34233",
        correo: "yola@y.co",
        disponibilidad: "poca",
        empresa: "EPM",
        nombre: "Yola Prieto"
    },
    "Elba Calao": {
        celular: "666",
        correo: "Elbacalao@unal.co",
        disponibilidad: "poca",
        empresa: "Bancolombia Medellín",
        nombre: "Elba Calao"
    }
};

var empresas = {
    Postobon: {
        mision: "Vender Gaseosa",
        necesidad: "Software para mejorar la máquinas expendedoras automáticas",
        nombre: "Postobon",
        objetivo: "Optimizar la venta de gaseosa",
        vision: "Ver como se vende la gaseosa"
    },
    EPM: {
        mision: "Brindar servicios básicos",
        necesidad: "Aplicación para ubicación del personal en la ciudad",
        nombre: "EPM",
        objetivo: "Mejorar los servicios básicos",
        vision: "no c"
    },
    "Bancolombia Medellín": {
        mision: "Obtener mas dinero, y cada vez más y MÁS!!!",
        necesidad: "tampoco",
        nombre: "Bancolombia Medellín",
        objetivo: "ño",
        vision: "ño"
    }
};

var problemas = {
    Postobon: {
        actor: "Cliente",
        causa: "Las máquinas no proveen la bebida correcta",
        descripcion: "Debido a un error en el software, muchas máquinas no proveen la bebida adecuada",
        empresa: "Postobon",
        impacto: "Alto",
        proceso: "no c"
    },
    "Bancolombia Medellín": {
        actor: "Los esclavos, digo clientes",
        causa: "Cajeros automáticos funcionando incorrectamente, perdemos mucho dinero",
        comentario: "Este problema es Perfecto y tiene muy buenas intenciones, apenas pa la guaracha, mero ki, que level, que FUA!, zukistrukis lulu.",
        descripcion: "Se requiere de una inteligencia artificial lo suficientemente poderoxa como para que cada cajero automático sea capaz de proveerle al usuario con una sutil cantidad de billetes falsos, de tal manera que perdamos menos dinero. Pero ojo, debe ser sutíl pa q no estén jodiendo la vida luego.",
        empresa: "Bancolombia Medellín",
        impacto: "Poderoxo",
        proceso: "Retiro de Dinero",
        validacion: "Aprobado Sin Ajustes"
    }
};

var retroalimentaciones = {};
var historiasAcademicas = {};
var estudiantes = {};
var profesores = {
    "Elma Riadito": {
        nombre: "Elma Riadito", correo: "Elma@elma.com", celular: "3173022932", direccion: "Calle falsa 123", identificacion: "1"
    },
    "Elsa Pato": {
        nombre: "Elsa Pato", correo: "Elsa@elsa.ru", celular: "7823", direccion: "Carrera falsa 123", identificacion: "2"
    },
    "Alan Brito Delgado": {
        nombre: "Alan Brito Delgado", correo: "Alan@Brito.delgado", celular: "", direccion: "Carrera falsa 456", identificacion: "3"
    },
    "Elsa Podiondo": {
        nombre: "Elsa Podiondo", correo: "E@P.com", celular: "Mas de 8000!!!!", direccion: "El Hueco", identificacion: "4"
    }
};
var metodologiasDesarrollo = {};
var informesIniciales = {};
var informesProgreso = {};
var informesFinales = {};
var prototipoAlfa = {};
var prototipoBeta = {};
var rubricaInicial = {
    "1": { nombre: "Rubrica de Informe Inicial", nota: 0, equipo: 1 },
};
var rubricaProgreso = {
    "1": { nombre: "Rubrica de Informe Inicial", nota: 0, equipo: 1 },
};
var rubricaFinal = {
    "1": { nombre: "Rubrica de Informe Inicial", nota: 0, equipo: 1 },
};
var rubricaAlfa = {
    "1": { nombre: "Rubrica de Informe Inicial", nota: 0, equipo: 1 },
};
var rubricaBeta = {
    "1": { nombre: "Rubrica de Informe Inicial", nota: 0, equipo: 1 },
};

window.addEventListener("load", inicializarPagina, false)