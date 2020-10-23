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

    document.getElementById("registraHistoria").addEventListener("click", formularioRegistraHistoria)
    document.getElementById("registraHistoriatext").addEventListener("click", formularioRegistraHistoria)

    document.getElementById("conformaEquipo").addEventListener("click", formularioConformaEquipo)
    document.getElementById("conformaEquipoText").addEventListener("click", formularioConformaEquipo)

    document.getElementById("defineMetodologia").addEventListener("click", formularioDefineMetodologia)
    document.getElementById("defineMetodologiaText").addEventListener("click", formularioDefineMetodologia)

    document.getElementById("entregaInformeInicial").addEventListener("click", () => { formularioEntregaInforme(event, "Informe Inicial") })
    document.getElementById("entregaInformeInicialText").addEventListener("click", () => { formularioEntregaInforme(event, "Informe Inicial") })

    document.getElementById("calificaInformeInicial").addEventListener("click", () => { formularioCalificaInforme(event, "Informe Inicial") })
    document.getElementById("calificaInformeInicialText").addEventListener("click", () => { formularioCalificaInforme(event, "Informe Inicial") })

    document.getElementById("entregaInformeProgreso").addEventListener("click", () => { formularioEntregaInforme(event, "Informe de Progreso") })
    document.getElementById("entregaInformeProgresoText").addEventListener("click", () => { formularioEntregaInforme(event, "Informe de Progreso") })

    document.getElementById("calificaInformeProgreso").addEventListener("click", () => { formularioCalificaInforme(event, "Informe de Progreso") })
    document.getElementById("calificaInformeProgresoText").addEventListener("click", () => { formularioCalificaInforme(event, "Informe de Progreso") })

    document.getElementById("entregaPrototipoAlpha").addEventListener("click", () => { formularioEntregaInforme(event, "Prototipo Alpha") })
    document.getElementById("entregaPrototipoAlphaText").addEventListener("click", () => { formularioEntregaInforme(event, "Prototipo Alpha") })

    document.getElementById("calificaPrototipoAlpha").addEventListener("click", () => { formularioCalificaInforme(event, "Prototipo Alpha") })
    document.getElementById("calificaPrototipoAlphaText").addEventListener("click", () => { formularioCalificaInforme(event, "Prototipo Alpha") })

    document.getElementById("realizaRetroalimentacion").addEventListener("click", formularioRealizaRetroalimentacion)
    document.getElementById("realizaRetroalimentacionText").addEventListener("click", formularioRealizaRetroalimentacion)

    document.getElementById("entregaInformeFinal").addEventListener("click", () => { formularioEntregaInforme(event, "Informe Final") })
    document.getElementById("entregaInformeFinalText").addEventListener("click", () => { formularioEntregaInforme(event, "Informe Final") })

    document.getElementById("calificaInformeFinal").addEventListener("click", () => { formularioCalificaInforme(event, "Informe Final") })
    document.getElementById("calificaInformeFinalText").addEventListener("click", () => { formularioCalificaInforme(event, "Informe Final") })


    document.getElementById("entregaPrototipoBeta").addEventListener("click", () => { formularioEntregaInforme(event, "Prototipo Beta") })
    document.getElementById("entregaPrototipoBetaText").addEventListener("click", () => { formularioEntregaInforme(event, "Prototipo Beta") })

    document.getElementById("calificaPrototipoBeta").addEventListener("click", () => { formularioCalificaInforme(event, "Prototipo Beta") })
    document.getElementById("calificaPrototipoBetaText").addEventListener("click", () => { formularioCalificaInforme(event, "Prototipo Beta") })

    //Factores criticos de exito

    document.getElementById("promoverCompetencia").addEventListener("click", formularioPromoverCompetencia)
    document.getElementById("promoverCompetenciaText").addEventListener("click", formularioPromoverCompetencia)

    document.getElementById("desarrollarProyecto").addEventListener("click", formularioDesarrollarProyecto)
    document.getElementById("desarrollarProyectoText").addEventListener("click", formularioDesarrollarProyecto)

    document.getElementById("fomentarParticipacion").addEventListener("click", formularioFomentarParticipacion)
    document.getElementById("fomentarParticipacionText").addEventListener("click", formularioFomentarParticipacion)

    document.getElementById("reconocerProgreso").addEventListener("click", formularioReconocerProgreso)
    document.getElementById("reconocerProgresoText").addEventListener("click", formularioReconocerProgreso)

    document.getElementById("reconocerCausa").addEventListener("click", formularioReconocerCausa)
    document.getElementById("reconocerCausaText").addEventListener("click", formularioReconocerCausa)

    document.getElementById("garantizarEquipoProyecto").addEventListener("click", formulariocGarantizarEquipoProyecto)
    document.getElementById("garantizarEquipoProyectoText").addEventListener("click", formulariocGarantizarEquipoProyecto)

    document.getElementById("garantizarEquipoEstudiante").addEventListener("click", formularioGarantizarEquipoEstudiante)
    document.getElementById("garantizarEquipoEstudianteText").addEventListener("click", formularioGarantizarEquipoEstudiante)

    document.getElementById("incrementarCartera").addEventListener("click", formularioIncrementarCartera)
    document.getElementById("incrementarCarteraText").addEventListener("click", formularioIncrementarCartera)

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

        <h2 class='subtituloForm'> Contenido </h2>

        <button id="agregarContenido" type="button" class="botonAgregar"> Agregar Contenido </button>

        <div id="contenidoAsignatura" class="tabla"></div>

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
    llenarBotonesExpansibles("agregarContenido", "contenidoAsignatura", [["input", "contenido"]], "1.5fr 1fr", "Remover Contenido")

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDiseñaAsignatura").querySelectorAll("input, select"), "Asignatura",
                undefined, document.querySelector("#contenidoAsignatura").querySelectorAll("input"));
        }
    );
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
            <label class="tituloTabla"> Número </label>
            <label class="tituloTabla"> Temática </label>
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
            llenarTablaSelect(asignatura, "datosVerClases", clases, "Clases")
        }, false
    );
    llenarTablaSelect(asignatura, "datosVerClases", clases, "Clases");
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
        llenarTablaSelect(asignatura, "contenidoTabla", asignaturas[asignatura]["contenidos"], "Contenidos")
    }, false);
    llenarTablaSelect(asignatura, "contenidoTabla", asignaturas[asignatura]["contenidos"], "Contenidos")
}

function formularioDisenaClase(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("asignatura", "Asignatura", asignaturas);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Diseña Clase </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosDiseñaClase" class="campos">

            ${asignaturasHTML}

            <label for="tematica"> Temática </label>
            <input type="text" id="tematica">
            
            <label for="numero"> Número </label>
            <input type="number" id="numero" min="0">
            
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
            guardarDatos(document.querySelector("#datosDiseñaClase").querySelectorAll("input, select"), "Clase",
                document.getElementById("tematica").value);
        }, false
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases(event, "asignatura") }, false);
}

function formularioDefineCriterioEvaluacion(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const rubricaHTML = obtenerDatosSelect("rubrica", "Rúbrica Asociada", { "Informe Inicial": {}, "Informe de Progreso": {}, "Informe Final": {}, "Prototipo Alpha": {}, "Prototipo Beta": {} });

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Define Criterio de Evaluación </h1>"

    document.getElementById("Form1").innerHTML = `

        <div id="datosDefineCrit" class="campos">

            ${rubricaHTML}

            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="descripcion"> Descripción </label>
            <textarea id="descripcion"></textarea>

            <label for="peso"> Peso (%) </label>
            <input type="number" id="peso" min="0" max="100">
         
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Definir </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verCriterio" type="button" class="botonExtra"> Ver Criterios </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosDefineCrit").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            var peso = document.getElementById("peso").value;
            if (peso < 0 || peso > 100) {
                alert("El valor del peso debe estar entre 0 y 100 %")
            }
            else {
                guardarDatos(document.querySelector("#datosDefineCrit").querySelectorAll("select, input, textarea"), "Criterio",
                    document.getElementById("nombre").value);
            }
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verCriterio").addEventListener("click", () => { verCriterios(event, "rubrica") }, false);
}

function verCriterios(input, selectRubrica) {

    var rubrica = document.getElementById(selectRubrica).value;

    const rubricaHTML = obtenerDatosSelect("rubricaVer", "Rúbrica Asociada", { "Informe Inicial": {}, "Informe de Progreso": {}, "Informe Final": {}, "Prototipo Alpha": {}, "Prototipo Beta": {} }, rubrica);

    document.getElementById("barraForm2").innerHTML = `<h1 class='tituloForm'> Ver Criterios </h1>`

    document.getElementById("Form2").innerHTML = `
        <div id="datosVerCriterio" class="campos">
            ${rubricaHTML}
        </div>

        <div id="columnas" class="tabla">
            <label class="tituloTabla"> Nombre </label>
            <label class="tituloTabla"> Descripción </label>
            <label class="tituloTabla"> Peso </label>
        </div>

        <div id="datosCriteriosVer" class="tabla"> </div>

        <div>
            <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    document.getElementById("columnas").style.gridTemplateColumns = "1.5fr 2.3fr 1.2fr";
    document.getElementById("datosCriteriosVer").style.gridTemplateColumns = "1.5fr 2.3fr 1.2fr";

    // document.getElementById("columnas").style.gridTemplateColumns = "1.5fr 4fr 1.2fr 4fr 1.2fr 1.2fr";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("rubricaVer").addEventListener("change",
        () => {
            llenarTablaSelect(document.getElementById("rubricaVer").value,
                "datosCriteriosVer", { a: { a: "a" } }, "Criterios")

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosCriteriosVer").querySelectorAll("textarea"));

        }
    );
    llenarTablaSelect(document.getElementById("rubricaVer").value,
        "datosCriteriosVer", { a: { a: "a" } }, "Criterios")

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosCriteriosVer").querySelectorAll("textarea"));
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

            const condicionalDatosIngresados = guardarDatos(document.querySelector("#datosRegistraEmpresa").querySelectorAll("input, textarea"), "Empresa", undefined,
                document.querySelector("#datosRegistraRepresentante").querySelectorAll("input"));

            if (condicionalDatosIngresados) {
                guardarDatos(document.querySelector("#datosRegistraRepresentante").querySelectorAll("input"), "Representante",
                    undefined, [["empresa", empresas[llaveEmpresa].nombre]]);
            }
        }
    );
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
            
            <label for="descripcionProblema"> Descripción </label>
            <textarea id="descripcionProblema"></textarea>

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
            
            <label for="descripcionProblema"> Descripción </label>
            <textarea id="descripcionProblema" disabled></textarea>

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
        }
    );
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
            actualizarCamposSelect("empresaVer", "datosRepresentante", representantes, "empresa");

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosEmpresa").querySelectorAll("textarea"));
        }
    );

    actualizarCamposSelect("empresaVer", "datosEmpresa", empresas);
    actualizarCamposSelect("empresaVer", "datosRepresentante", representantes, "empresa");

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosEmpresa").querySelectorAll("textarea"));
}

function formularioConstruyeCartera(input) {

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Construye Cartera de Proyecto </h1>"

    document.getElementById("Form1").innerHTML = `

        <div id="datosCartera" class="campos">
            
            <label for="cantidad"> Cantidad </label>
            <input type="number" id="cantidad" disabled value="${carteraDeProyectos.cantidadProyectos}">

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
    const empresasHTML = obtenerDatosSelect("empresa", "Nombre Empresa", empresas);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Agregar Proyecto </h1>"

    document.getElementById("Form2").innerHTML = `
       
        <div id="datosProyecto" class="campos">

            ${empresasHTML}

            <label for="objetivo"> Objetivo Estratégico </label>
            <textarea id="objetivo" disabled></textarea>

            <label for="descripcionProyecto"> Descripción </label>
            <textarea id="descripcionProyecto"></textarea>

        </div>
        
        <div class="botones">
            <button id="confirmarForm2" type="button" class="botonExtra"> Agregar Proyecto </button>
            <button id="reset" type="button" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Borrado especial cuando hay campos editables y no editables
    document.getElementById("reset").addEventListener("click",
        () => {
            document.getElementById("descripcion").value = "";
        }
    );

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm2").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosProyecto").querySelectorAll("select, textarea"), "Proyecto",
                undefined, undefined, [true, false, true]);
            document.getElementById("cantidad").value = carteraDeProyectos.cantidadProyectos;
        }
    );
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresa").addEventListener("change",
        () => {
            actualizarCamposSelect("empresa", "datosProyecto", empresas);

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosProyecto").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("empresa", "datosProyecto", empresas);

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosProyecto").querySelectorAll("textarea"));
}

function verProyecto(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const proyectosHTML = obtenerDatosSelect("proyectos", "Nombre Empresa", carteraDeProyectos.proyectos);

    // Llenando los datos del formulario
    document.getElementById("barraForm3").innerHTML = "<h1 class='tituloForm'> Ver Proyecto </h1>"

    document.getElementById("Form3").innerHTML = `
       
        <div id="datosVerProyecto" class="campos">

            ${proyectosHTML}

            <label for="objetivo"> Objetivo Estratégico </label>
            <textarea id="objetivo" disabled></textarea>

            <label for="descripcion"> Descripción </label>
            <textarea id="descripcion" disabled></textarea>

            <label for="codigo"> Código </label>
            <input type="text" id="codigo" disabled>

            <label for="calidad"> Calidad </label>
            <input type="text" id="calidad" disabled>
            
            <label for="informeInicial"> Informe Inicial </label>
            <input type="text" id="informeInicial" disabled>
            
            <label for="informeProgreso"> Informe de Progreso </label>
            <input type="text" id="informeProgreso" disabled>
            
            <label for="informeFinal"> Informe Final </label>
            <input type="text" id="informeFinal" disabled>
            
            <label for="prototipoAlpha"> Prototipo Alpha </label>
            <input type="text" id="prototipoAlpha" disabled>
            
            <label for="prototipoBeta"> Prototipo Beta </label>
            <input type="text" id="prototipoBeta" disabled>

        </div>
        
        <button id="cerrarForm3" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm3");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm3").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("proyectos").addEventListener("change",
        () => {
            actualizarCamposSelect("proyectos", "datosVerProyecto", carteraDeProyectos.proyectos);

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosVerProyecto").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("proyectos", "datosVerProyecto", carteraDeProyectos.proyectos);

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosVerProyecto").querySelectorAll("textarea"));
}

function formularioRegistraHistoria(input) {

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Registra Historia Académica </h1>"

    document.getElementById("Form1").innerHTML = `
        <h2 class='subtituloForm'> Datos Estudiante </h2>

        <div id="datosRegistraEstudiante" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">

            <label for="identificacion"> Identificación </label>
            <input type="number" id="identificacion" min="0">
            
            <label for="direccion"> Dirección </label>
            <textarea id="direccion"></textarea>
            
            <label for="celular"> Celular </label>
            <input type="number" id="celular" min="0">

            <label for="correo"> Correo </label>
            <input type="email" id="correo">

            <label for="carrera"> Carrera </label>
            <input type="text" id="carrera">

            <label for="semestre"> Semestre </label>
            <input type="text" id="semestre">

            <label for="rol"> Rol </label>
            <input type="text" id="rol">

            <label> Competencia </label>

            <div class="radios">
                <input type="radio" id="competencia" name="competencia" value="tecnica">
                <label> Técnica </label>

                <input type="radio" id="competencia" name="competencia" value="social">
                <label> Social </label>
            </div>

        </div>

        <h2 class='subtituloForm'> Historia Académica </h2>

        <button id="agregarAsignatura" type="button" class="botonExtra"> Agregar Asignatura </button>
        
        <div id="titulosColumnas" class="tabla">
            <label class="tituloTabla"> Nombre </label>
            <label class="tituloTabla"> Nota </label>
            <label class="tituloTabla"> Semestre </label>
            <label class="tituloTabla"></label>
        </div>

        <div id="datosAgregaAsig" class="tabla"> </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Registrar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verHistoria" type="button" class="botonExtra"> Ver Historia Académica </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    // Cambiando el número de columnas de la tabla (ya que por defecto son 2)
    document.getElementById("columnas").style.gridTemplateColumns = "repeat(4, minmax(0, 1fr))";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosRegistraEstudiante").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    llenarBotonesExpansibles("agregarAsignatura", "datosAgregaAsig",
        [["input", "nombre"], ["input", "nota"], ["input", "semestre"]], 4, "Remover Asignatura");

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            const llaveEstudiante = document.querySelector("#datosRegistraEstudiante").querySelectorAll("input")[1].value;

            guardarDatos(document.querySelector("#datosRegistraEstudiante").querySelectorAll("input, textarea"), "Estudiante");

            guardarDatos(["historia", document.querySelector("#datosAgregaAsig").querySelectorAll("input")], "Estudiante",
                llaveEstudiante, 0);
        }
    );
    document.getElementById("verHistoria").onclick = () => { verHistoria(event, "documento") };
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function verHistoria(input, inputDocumento) {

    if (inputDocumento != undefined) {
        var idEstudiante = document.getElementById(inputDocumento).value;
    }
    else {
        var idEstudiante = "";
    }
    // Obteniendo los valores preestablecidos para llenar el formulario
    const estudiantesHTML = obtenerDatosSelect("estudiante", "Nombre Estudiante", estudiantes, idEstudiante, "nombre");

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Historia Académica </h1>"

    document.getElementById("Form2").innerHTML = `
    
        <h2 class='subtituloForm'> Datos Estudiante </h2>

        <div id="datosEstudiante" class="campos">

            ${estudiantesHTML}

            <label for="identificacion"> Identificación </label>
            <input type="number" id="identificacion" min="0" disabled>
            
            <label for="direccion"> Dirección </label>
            <textarea id="direccion" disabled></textarea>
            
            <label for="celular"> Celular </label>
            <input type="number" id="celular" min="0" disabled>

            <label for="correo"> Correo </label>
            <input type="email" id="correo" disabled>

            <label for="carrera"> Carrera </label>
            <input type="text" id="carrera" disabled>

            <label for="semestre"> Semestre </label>
            <input type="text" id="semestre" disabled>

            <label for="rol"> Rol </label>
            <input type="text" id="rol" disabled>

            <label for="competencia"> Competencia </label>
            <input type="text" id="competencia" disabled>

        </div>
    
        <h2 class='subtituloForm'> Asignaturas </h2>

        <div id="titulosColumnasVer" class="tabla">
            <label class="tituloTabla"> Nombre </label>
            <label class="tituloTabla"> Nota </label>
            <label class="tituloTabla"> Semestre </label>
        </div>

        <div id="datosVerHistoria" class="tabla"> </div>
        
        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("estudiante").addEventListener("change",
        () => {
            actualizarCamposSelect("estudiante", "datosEmpresa", estudiantes, undefined, "nombre");
            llenarTablaSelect(idEstudiante, "datosVerHistoria", estudiantes[idEstudiante].historia.asignaturas, "Historia");

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosEstudiante").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("estudiante", "datosEmpresa", estudiantes, undefined, "nombre");

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    llenarTablaSelect(idEstudiante, "datosVerHistoria", estudiantes[idEstudiante].historia.asignaturas, "Historia");
    expansionTextAreaDisabled(document.querySelector("#datosEstudiante").querySelectorAll("textarea"));
}

function formularioConformaEquipo(input) {
    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Empresa Proyecto", empresas);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Conforma Equipo </h1>"

    document.getElementById("Form1").innerHTML = `
        <div id="datosEquipo" class="campos">
        
            ${empresasHTML}

            <label for="codigo"> Código </label>
            <input type="number" id="codigo" disabled>

            <label for="cantidad"> Cantidad </label>
            <input type="number" id="cantidad" disabled>
            
        </div>
        
        <h2 class='subtituloForm'> Estudiantes </h2>
            
        <button id="agregarEstudiante" type="button" class="botonExtra"> Agregar Estudiante </button>

        <div id="datosAgregaEst" class="tabla"> </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Conformar </button>
            <button id="verEquipo" type="button" class="botonExtra"> Ver Equipo </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    llenarBotonesExpansibles("agregarEstudiante", "datosAgregaEst", ["select", "estudiante", estudiantes],
        3, "Quitar Estudiante", "Ver Estudiante", verHistoria);

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEquipo").querySelectorAll("input, select, textarea"), "Equipo");
        }
    );
    document.getElementById("verEquipo").addEventListener("click", () => { verEquipo(event, "empresa") }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function verEquipo(input, inputEmpresa) {

    if (inputEmpresa != undefined) {
        var idEquipo = document.getElementById(inputEmpresa).value;
    }
    else {
        var idEquipo = "";
    }
    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Empresa Proyecto", empresas);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Equipo </h1>"

    document.getElementById("Form2").innerHTML = `
    
        <h2 class='subtituloForm'> Datos Equipo </h2>

        <div id="datosEquipo" class="campos">

            ${empresasHTML}

            <label for="codigo"> Código </label>
            <input type="number" id="codigo" disabled>

            <label for="cantidad"> Cantidad </label>
            <input type="number" id="cantidad" disabled>
            
            <label for="comunicacion"> Comunicación </label>
            <textarea id="comunicacion" disabled></textarea>

        </div>
    
        <h2 class='subtituloForm'> Estudiantes </h2>

        <div id="titulosColumnasVer" class="tabla">
            <label class="tituloTabla"> Nombre </label>
            <label class="tituloTabla"> Identificación </label>
        </div>

        <div id="datosVerIntegrantes" class="tabla"> </div>
        
        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresa").addEventListener("change",
        () => {
            var idEquipo = document.getElementById("empresa").value;

            actualizarCamposSelect("empresa", "datosEquipo", equipos);
            llenarTablaSelect(idEquipo, "datosVerIntegrantes", equipos[idEquipo].estudiantes, "Equipo");

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosEquipo").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("estudiante", "datosVerIntegrantes", estudiantes, undefined, "nombre");
    llenarTablaSelect(idEquipo, "datosVerIntegrantes", equipos[idEquipo].estudiantes, "Equipo");

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosEquipo").querySelectorAll("textarea"));
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
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioEntregaInforme(input, tipoInfProt) {

    // Parámetros que cambian dependiendo del tipo de informe y prototipo
    var contenido; var informePrototipo;

    var botones = `
        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verCalificacion" type="button" class="botonExtra"> Ver Calificación </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `
    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
        contenido = `
            <div id="datosEntrega" class="campos">
            
                ${equiposHTML}

                <label for="tema"> Tema </label>
                <textarea id="tema"></textarea>
        `
        switch (tipoInfProt) {
            case "Informe Inicial":
                contenido += `
                        <label for="idea"> Idea de Desarrollo </label>
                        <textarea id="idea"></textarea>
                    </div>
                `
                informePrototipo = informesIniciales;
                break;

            case "Informe de Progreso":
                contenido += `
                        <label for="avance"> Avance </label>
                        <textarea id="avance"></textarea>
                    </div>
                `
                informePrototipo = informesProgreso;
                break;

            case "Informe Final":
                contenido += `
                        <label for="conclusion"> Conclusión </label>
                        <textarea id="conclusion"></textarea>
                    </div>
                `
                informePrototipo = informesFinales;
                break;
        }
        contenido += `
            <h2 class='subtituloForm'> Secciones </h2>
            <button id="agregarSeccion" type="button" class="botonExtra"> Agregar Sección </button>
            <div id="datosAgregaSecc" class="tabla"> </div>
        `
    }
    else {
        contenido = `
            <div id="datosEntrega" class="campos">
            
                ${equiposHTML}

                <label for="link"> Link </label>
                <input type="url" id="link">

                <label for="fecha"> Fecha de Entrega </label>
                <input type="date" id="fecha">
            </div>
        `
        if (tipoInfProt == "Prototipo Alpha") {
            var botones = `
            <div class="botones">
                <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
                <button type="reset" class="botonBorrar"> Limpiar Campos </button>
                <button id="verCalificacion" type="button" class="botonExtra"> Ver Calificación </button>
                <button id="verRetroalimentacion" type="button" class="botonExtra"> Ver Retroalimentación </button>
            </div>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        `
        }
    }

    // Juntando los datos del formulario
    document.getElementById("barraForm1").innerHTML = `<h1 class='tituloForm'> Entrega ${tipoInfProt} </h1>`
    document.getElementById("Form1").innerHTML = `${contenido} ${botones} `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosEntrega").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
        llenarBotonesExpansibles("agregarSeccion", "datosAgregaSecc", "input", 2, "Remover Sección");
    }
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEntrega").querySelectorAll("select, input", "textarea"), "Entrega" + tipoInfProt);
        }
    );

    document.getElementById("verCalificacion").addEventListener("click",
        () => {
            verCalificacion(event, "equipo", tipoInfProt)
        }
    );

    if (tipoInfProt == "Prototipo Alpha") {
        document.getElementById("verCalificacion").addEventListener("click",
            () => {
                verRetroalimentacion(event, "equipo");
            }
        );
    }
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioCalificaInforme(input, tipoInfProt) {

    // Parámetros que cambian dependiendo del tipo de informe y prototipo
    var contenido; var informePrototipo;

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);
    const estadosHTML = obtenerDatosSelect("estado", "Estado", { Completo: {}, Incompleto: {} }, "Incompleto");
    const calidadHTML = obtenerDatosSelect("calidad", "Calidad", { Baja: {}, Media: {}, Alta: {} });

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {

        contenido = `
            <div id="datosCalifica" class="campos">
            
                ${equiposHTML}

                <label for="tema"> Tema </label>
                <textarea id="tema" disabled></textarea>
        `
        switch (tipoInfProt) {
            case "Informe Inicial":
                contenido += `
                    <label for="idea"> Idea de Desarrollo </label>
                    <textarea id="idea" disabled></textarea>
                `
                informePrototipo = informesIniciales;
                break;

            case "Informe de Progreso":
                contenido += `
                    <label for="avance"> Avance </label>
                    <textarea id="avance" disabled></textarea>
                `
                informePrototipo = informesProgreso;
                break;

            case "Informe Final":
                contenido += `
                    <label for="conclusion"> Conclusión </label>
                    <textarea id="conclusion" disabled></textarea>
                `
                informePrototipo = informesFinales;
                break;
        }

        contenido += `${estadosHTML}</div>`

        var botones = `
            <div class="botones">
                <button id="confirmarForm1" type="button" class="botonConfirmar"> Calificar </button>
                <button type="reset" class="botonBorrar"> Limpiar Campos </button>
                <button id="verSecciones" type="button" class="botonExtra"> Ver Secciones </button>
                <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
            </div>
        `
    }
    else {
        contenido = `
            <div id="datosCalifica" class="campos">
            
                ${equiposHTML}

                <label for="link"> Link </label>
                <input type="url" id="link">

                <label for="fecha"> Fecha de Entrega </label>
                <input type="date" id="fecha">

                ${calidadHTML}
                
            </div>
        `
        var botones = `
            <div class="botones">
                <button id="confirmarForm1" type="button" class="botonConfirmar"> Calificar </button>
                <button id="reset" type="button" class="botonBorrar"> Limpiar Campos </button>
            </div>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        `
    }

    contenido += `
        <h2 class='subtituloForm'> Rubrica ${tipoInfProt} </h2>
        
        <div id="datosCalificarRubrica" class="campos">

            <label for="nota"> Nota de la Rúbrica </label>
            <input type="number" id="nota" min="0">

        </div>

        <label class="subsubtituloForm"> Criterios de Evaluación </label>

        <div id="columnas" class="tabla">
            <label class="tituloTabla"> Nombre </label>
            <label class="tituloTabla"> Descripción </label>
            <label class="tituloTabla"> Valoración </label>
            <label class="tituloTabla"> Comentario </label>
            <label class="tituloTabla"> Nota </label>
            <label class="tituloTabla"> Peso </label>
        </div>

        <div id="datosCriteriosEval" class="tabla"> </div>
    `

    // Juntando los datos del formulario
    document.getElementById("barraForm1").innerHTML = `<h1 class='tituloForm'> Califica ${tipoInfProt} </h1>`
    document.getElementById("Form1").innerHTML = `${contenido} ${botones}`;
    document.getElementById("columnas").style.gridTemplateColumns = "repeat(6, minmax(0, 1fr))";
    document.getElementById("datosCriteriosEval").style.gridTemplateColumns = "repeat(6, minmax(0, 1fr))";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosCalifica").querySelectorAll("select, input", "textarea"), "Califica" + tipoInfProt);
        }
    );
    document.getElementById("reset").onclick =
        () => {
            // FUNCION RESETEAR CONDICIONAL
        };
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("equipo").addEventListener("change",
        () => {
            actualizarCamposSelect("equipo", "datosVerCalificacion", informesIniciales);
            llenarTablaSelect("none", "datosCriteriosEval", criteriosEvaluacionInfInicial, "Criterios llenar");
        }
    );
    actualizarCamposSelect("equipo", "datosVerCalificacion", informesIniciales);
    llenarTablaSelect("none", "datosCriteriosEval", criteriosEvaluacionInfInicial, "Criterios llenar")

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosVerProyecto").querySelectorAll("textarea"));
}

function verSecciones(input, SelectEquipo) {

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

        </div>

        <h2 class='subtituloForm'> Rúbrica Informe Inicial </h2>

        <div id="datosCalificarRubrica" class="campos">

            <label for="nota"> Nota de la Rúbrica </label>
            <input type="text" id="nota">

        </div>

        <label> Criterios de Evaluación </label>

        <div id="columnas" class="tabla">
            <label class="tituloTabla"> Nombre </label>
            <label class="tituloTabla"> Descripción </label>
            <label class="tituloTabla"> Valoración </label>
            <label class="tituloTabla"> Comentario </label>
            <label class="tituloTabla"> Nota </label>
            <label class="tituloTabla"> Peso </label>
        </div>

        <div id="datosCriteriosEval" class="tabla"> </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Calificar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("columnas").style.gridTemplateColumns = "repeat(6, minmax(0, 1fr))";
    document.getElementById("datosCriteriosEval").style.gridTemplateColumns = "repeat(6, minmax(0, 1fr))";

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
            llenarTablaSelect(equipoSeleccionado, "datosCriteriosEval", criteriosEvaluacionInfInicial, "Criterios llenar");
        }, false);
    actualizarCamposSelect("equipoVer", "datosVerCalificacion", informesIniciales);
    llenarTablaSelect(equipoSeleccionado, "datosCriteriosEval", criteriosEvaluacionInfInicial, "Criterios llenar")
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
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Realizar </button>
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

    // Parámetros que cambian dependiendo del tipo de informe y prototipo
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

        case "Prototipo Alpha":
            retroalimentacion = `
                    <label for="valoracion"> Valoración </label>
                    <input type="text" id="valoracion" disabled></input>

                    <label for="sugerencia"> Sugerencia </label>
                    <input type="text" id="sugerencia" disabled></input>
                    `
            var informePrototipo = prototipoAlpha;
            var Criterios = criteriosEvaluacionProtAlpha;
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

    // Asignatura seleccionada antes de dar click a ver clases¿
    var equipoSeleccionado = document.getElementById(IDequipoSeleccionado).value;

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipoVer", "Código Equipo", equipos, equipoSeleccionado);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = `<h1 class='tituloForm'> Ver Calificación ${tipoInfProt}</h1>`

    document.getElementById("Form2").innerHTML = `
        <div id="datosVerCalificacion" class="campos">

            ${equiposHTML}

            ${contenido}

            <label> Criterios de Evaluación </label>

            <div id="columnas" class="tabla">
                <label class="tituloTabla"> Nombre </label>
                <label class="tituloTabla"> Descripción </label>
                <label class="tituloTabla"> Valoración </label>
                <label class="tituloTabla"> Comentario </label>
                <label class="tituloTabla"> Nota </label>
                <label class="tituloTabla"> Peso </label>
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
            llenarTablaSelect(equipoSeleccionado, "datosCriteriosCalif", Criterios)
        }, false);
    actualizarCamposSelect("equipoVer", "datosVerCalificacion", informePrototipo)
    llenarTablaSelect(equipoSeleccionado, "datosCriteriosCalif", Criterios, "criterios")
}

function actualizarCamposSelect(nombreSelect, nombreContenedorCampos, arreglo, buscaAtributo = undefined, devuelveAtributo = undefined) {

    const llave = document.getElementById(nombreSelect).value;
    var campos = document.querySelector("#" + nombreContenedorCampos).querySelectorAll("input, textarea");
    var condicionalEncontracion = false;

    // Poniendo iniialmente todos los valores vacíos
    campos.forEach(
        (campo) => {
            campo.value = "";
        }
    );

    if (llave != "") {
        if (buscaAtributo == undefined) {
            for (var [key, value] of Object.entries(arreglo)) {
                if (llave == key) {
                    for (var [key, value2] of Object.entries(value)) {
                        var element = Array.from(campos).find(
                            (campo) => {
                                return campo.id == key;
                            }
                        );
                        if (element != undefined) {
                            if (devuelveAtributo == undefined) {
                                element.value = value2;
                            }
                            else {
                                element.value = value2[devuelveAtributo];
                            }
                        }
                    }
                    condicionalEncontracion = true;
                    break;
                }
            }
        }
        else {
            for (var [key, value] of Object.entries(arreglo)) {
                if (llave == value[buscaAtributo]) {
                    for (var [key, value2] of Object.entries(value)) {
                        var element = Array.from(campos).find(
                            (campo) => {
                                return campo.id == key;
                            }
                        );
                        if (element != undefined) {
                            if (devuelveAtributo == undefined) {
                                element.value = value2;
                            }
                            else {
                                element.value = value2[devuelveAtributo];
                            }
                        }
                    }
                    condicionalEncontracion = true;
                    break;
                }
            }
        }
    }
    if (!condicionalEncontracion) {
        campos.forEach(
            (campo) => {
                campo.value = ""
            }
        )
    }
}

function llenarTablaSelect(llave, nombreContenedorCampos, arreglo = undefined, caso) {

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

                var Objeto;

                switch (llave) {
                    case "Informe Inicial":
                        Objeto = criteriosEvaluacionInfInicial;
                        break;
                    case "Informe de Progreso":
                        Objeto = criteriosEvaluacionInfProgreso;
                        break;
                    case "Informe Final":
                        Objeto = criteriosEvaluacionInfFinal;
                        break;
                    case "Prototipo Alpha":
                        Objeto = criteriosEvaluacionProtAlpha;
                        break;
                    case "Prototipo Beta":
                        Objeto = criteriosEvaluacionProtBeta;
                        break;
                }

                // const llaves = [["nombre", "label", ""], ["descripcion", "textarea", "disabled"], ["valoracion", "label", ""],
                // ["comentario", "textarea", "disabled"], ["nota", "label", ""], ["peso", "label", ""]]

                const llaves = [["nombre", "label", ""], ["descripcion", "textarea", "disabled"], ["peso", "label", ""]]

                // Recorre todos los criterios
                for (var value of Object.values(Objeto)) {

                    // Recorre los atributos deseados de los criterios
                    for (let index = 0; index < llaves.length; index++) {

                        var condicionalEncontracion = false;

                        // Recorre los atributos del criterio pa ver si estan o no definidos
                        for (var [key, value2] of Object.entries(value)) {
                            if (llaves[index][0] == key) {
                                acumulador += `<${llaves[index][1]} ${llaves[index][2]}>${value2}</${llaves[index][1]}>`;
                                condicionalEncontracion = true;
                                break;
                            }
                        }
                        if (!condicionalEncontracion) { acumulador += `<label> ${" "} </label>`; }
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

            case "Historia":

                for (var [key, value] of Object.entries(arreglo)) {
                    acumulador += `
                        <label> ${value.nombre} </label>
                        <label> ${value.nota} </label>
                        <label> ${value.semestre} </label>
                    `;
                }
                break;

            case "Equipo":

                for (var [key, value] of Object.entries(arreglo)) {
                    acumulador += `
                        <label> ${value.nombre} </label>
                        <label> ${value.identificacion} </label>
                    `;
                }
                break;
        }
    }
    document.getElementById(nombreContenedorCampos).innerHTML = acumulador;
}

function llenarBotonesExpansibles(idBotonDisparo, idDivContenido, arregloTipoInputs, columnas, nombreBotonRemover, nombreBotonExtra = undefined,
    funcionBotonExtra = undefined) {

    document.getElementById(idBotonDisparo).addEventListener("click",
        () => {

            var identificador = indicesBotonesExpansibles(idDivContenido, arregloTipoInputs);

            var div = document.getElementById(idDivContenido);
            div.style.gridTemplateColumns = columnas;

            // [[tipo input, prefijoID, objetoLista], ]
            var auxiliar = []
            arregloTipoInputs.forEach(
                (input) => {

                    if (input[0] == "input") {
                        var campo = document.createElement("input");
                        campo.setAttribute("type", "text");
                        campo.setAttribute("id", input[1] + '_' + identificador);
                    }

                    else if (input[0] == "select") {
                        var campo = obtenerDatosSelect(input[1] + '_' + identificador, "", input[2])
                    }
                    div.appendChild(campo); auxiliar.push(campo);
                }
            )

            var boton = document.createElement("button");
            boton.setAttribute("type", "button");
            boton.setAttribute("class", "botonRemover");
            boton.innerHTML = nombreBotonRemover
            boton.addEventListener("click",
                () => {
                    auxiliar.forEach((campo) => { campo.remove(); });
                    boton.remove();
                    indicesBotonesExpansibles(idDivContenido, arregloTipoInputs);
                }
            )
            if (nombreBotonExtra != undefined) {
                var botonExtra = document.createElement("button");
                boton.setAttribute("type", "button");
                boton.setAttribute("class", "botonExtra");
                boton.innerHTML = nombreBotonExtra;
                boton.addEventListener("click", () => { funcionBotonExtra(event) })
                div.appendChild(botonExtra); div.appendChild(boton);
            }
            else {
                div.appendChild(boton);
            }
        }
    );
}

function indicesBotonesExpansibles(idDivContenido, arregloTipoInputs) {

    var identificador = 1;
    var auxiliar = document.querySelector(`#${idDivContenido}`).querySelectorAll("input, select");

    for (let index = 0; index < auxiliar.length; index = index) {
        arregloTipoInputs.forEach(
            (input) => {
                auxiliar[index].id = input[1] + '_' + identificador
                index++;
            }
        )
        identificador++;
    }
    return identificador;
}

function obtenerDatosSelect(id, display, arreglo, seleccionado = "", atributo = undefined) {

    var salidaHTML = `<label for='${id}'> ${display} </label> <select id='${id}'>`;
    var aux;

    for (var [key, value] of Object.entries(arreglo)) {

        if (atributo == undefined) {
            aux = key
        }
        else {
            aux = value[atributo];
        }
        if (key == seleccionado) {
            salidaHTML += `<option value='${key}' selected> ${aux} </option>`;
        }
        else {
            salidaHTML += `<option value='${key}'> ${aux} </option>`;
        }
    }
    salidaHTML += "</select>";
    return salidaHTML;
}

function guardarDatos(input, caso, llave = input[0].value, nuevoAgrega = undefined, AgregaConCondicion = undefined) {

    var condicionCamposCompletos = true; var condicionAlertacion = true;
    var cadenaAux1, cadenaAux2;

    // Esto es para comprobar que se hallan enviado todos los datos
    input.forEach((valor) => {
        if (valor.value == '') { condicionCamposCompletos = false; }
    });

    if (nuevoAgrega != undefined) {
        nuevoAgrega.forEach((valor) => {
            if (valor.value == '') { condicionCamposCompletos = false; }
        });
    }

    if (condicionCamposCompletos) {
        switch (caso) {
            case "Asignatura":
                cadenaAux1 = `La asignatura ${llave}`; cadenaAux2 = "diseñada"
                asignaturas[llave] = crearObjeto(input);

                asignaturas[llave]["contenidos"] = {};
                adicionarAobjeto(asignaturas[llave]["contenidos"], nuevoAgrega);

                asignaturas[llave].estado = "Diseñada"
                break;

            case "Clase":
                cadenaAux1 = `La clase ${llave} de la asignatura ${input[2].value}`; cadenaAux2 = "diseñada"
                clases[llave] = crearObjeto(input);
                break;

            case "Criterio":
                cadenaAux1 = `El criterio de evaluación "${llave}" de la rubrica del ${input[0].value}`; cadenaAux2 = "definido"

                switch (input[0].value) {
                    case "Informe Inicial":
                        criteriosEvaluacionInfInicial[llave] = crearObjeto(input);
                        break;
                    case "Informe de Progreso":
                        criteriosEvaluacionInfProgreso[llave] = crearObjeto(input);
                        break;
                    case "Informe Final":
                        criteriosEvaluacionInfFinal[llave] = crearObjeto(input);
                        break;
                    case "Prototipo Alpha":
                        criteriosEvaluacionProtAlpha[llave] = crearObjeto(input);
                        break;
                    case "Prototipo Beta":
                        criteriosEvaluacionProtBeta[llave] = crearObjeto(input);
                        break;
                }
                break;

            case "Empresa":
                cadenaAux1 = `La empresa ${llave}`; cadenaAux2 = "registrada"
                empresas[llave] = crearObjeto(input);
                break;

            case "Representante":
                condicionAlertacion = false;
                representantes[llave] = crearObjeto(input);

                if (nuevoAgrega != undefined) {
                    adicionarAobjeto(representantes[llave], nuevoAgrega);
                }
                break;

            case "Problema":

                if (nuevoAgrega == undefined) {
                    cadenaAux1 = `El problema de la empresa ${llave}`; cadenaAux2 = "definido"
                }
                else {
                    cadenaAux1 = `El problema de la empresa ${llave}`; cadenaAux2 = "validado"
                }
                problemas[llave] = crearObjeto(input);
                break;

            case "Proyecto":

                cadenaAux1 = `El proyecto de la empresa ${llave}`;

                var aux = 1; var total = 1; var encontradoCodigo = false;
                for (var [undefined, value] of Object.entries(carteraDeProyectos.proyectos)) {
                    if (!encontradoCodigo) {
                        for (var [key1, value2] of Object.entries(value)) {
                            if (key1 == "codigo") {
                                if (value2 != aux) {
                                    encontradoCodigo = true;
                                    break;
                                }
                                else {
                                    aux++;
                                    break;
                                }
                            }
                        }
                    }
                    total++;
                }

                carteraDeProyectos.proyectos[llave] = crearObjeto(input, AgregaConCondicion);
                carteraDeProyectos.proyectos[llave].codigo = aux;
                carteraDeProyectos.cantidadProyectos = total;

                cadenaAux2 = `agregado con código ${aux}`
                break;

            case "Estudiante":

                if (nuevoAgrega == undefined) {
                    cadenaAux1 = `La historia académica`;
                    cadenaAux2 = `registrada`
                    estudiantes = crearObjeto(input);
                }
                else {
                    condicionAlertacion = false;
                    var asignaturasHist = {}; var tripleta = 1; var promedio;
                    for (let index = 0; index < input.length; index++) {
                        if (tripleta == 1) {
                            const nombre = input[index].id
                        }
                        else {
                            if (tripleta == 2) {

                                promedio += input[index].value * 3 / input.length
                            }
                            tripleta++;
                        }
                        asignaturasHist[nombre][input[index].id] = input[index].value;

                    }
                    estudiantes[llave][nuevoAgrega[0]] = { promedio, asignaturasHist };
                }
                break;

            case "Informe Progreso":
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
                prototipoAlpha[llave] = crearObjeto(input);
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

            case "Nota Rubrica Inicial":
                if (rubricaInicial[llave] != undefined) {
                    cadenaAux1 = `La nota de la rubrica ${rubricaInicial[llave][1].value}`; cadenaAux2 = "almacenado"
                    rubricaInicial[llave]["nota"] = input.value;
                }
                break;

            case "Nota Rubrica Progreso":
                if (rubricaProgreso[llave] != undefined) {
                    cadenaAux1 = `La nota de la rubrica ${rubricaProgreso[llave][1].value}`; cadenaAux2 = "almacenado"
                    rubricaProgreso[llave]["nota"] = input.value;
                }
                break;

            default:
                break;
        }
        if (condicionAlertacion) { alert(`${cadenaAux1} ha sido ${cadenaAux2}`); }
        return true;
    }
    else if (caso != "Contenido Asignatura") {
        alert("Por favor llenar todos los campos")
        return false;
    }
}

function crearObjeto(listiviris, AgregaConCondicion) {
    var objeto = {};

    if (AgregaConCondicion == undefined) {

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
    }
    else {
        var j = 0;
        for (let index = 0; index < listiviris.length; index++) {
            if (AgregaConCondicion[j]) {
                if (listiviris[index].type != "radio") {
                    objeto[listiviris[index].id] = listiviris[index].value
                }
                else {
                    if (listiviris[index].checked) {
                        objeto[listiviris[index].id] = listiviris[index].value
                    }
                }
                j++;
            }
            else {
                j++;
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
        // Pa ponerle la empresa a representante
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

// Formularios factores criticos de exito

function formularioPromoverCompetencia(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de prototipos beta y prototipos alpha con calidad alta </h1>"
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="campos">

            <label for="formula"> ((Número de prototipos beta con calidad alta + Número de prototipos alpha con calidad alta) / (Número de prototipos beta + Número de prototipos alpha))*100 </label>
            <input type="text" id="formula">

        </div>

        <div class="botones">
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioDesarrollarProyecto(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de proyectos con calidad alta </h1>"
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="campos">

            <label for="formula"> (Número de proyectos con calidad alta / Número de proyectos)*100 </label>
            <input type="text" id="formula">

        </div>

        <div class="botones">
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioFomentarParticipacion(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Promedio de las notas de los estudiantes </h1>"
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="campos">

            <label for="formula"> Nota de informes y prototipos entregados / Número de informes y prototipos entregados </label>
            <input type="text" id="formula">

        </div>

        <div class="botones">
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioReconocerProgreso(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de entrega de informes y prototipos </h1>"
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="campos">

            <label for="formula"> (Número de informes y prototipos entregados/ Número total de informes y prototipos) * 100 </label>
            <input type="text" id="formula">

        </div>

        <div class="botones">
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioReconocerCausa(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de problemas trabajados </h1>"
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="campos">

            <label for="formula"> (Número de equipos conformados / Número de problemas validados) * 100 </label>
            <input type="text" id="formula">

        </div>

        <div class="botones">
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formulariocGarantizarEquipoProyecto(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de problemas validados </h1>"
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="campos">

            <label for="formula"> (Número de problemas validados/ Número de empresas registradas) * 100 </label>
            <input type="text" id="formula">

        </div>

        <div class="botones">
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioGarantizarEquipoEstudiante(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Proporción de estudiantes por equipo </h1>"
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="campos">

            <label for="formula"> Número de estudiantes / Número de equipos conformados </label>
            <input type="text" id="formula">

        </div>

        <div class="botones">
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioIncrementarCartera(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Proporción de equipos por proyecto </h1>"
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="campos">

            <label for="formula"> Número de equipos conformados / Número de proyectos en la cartera de proyectos </label>
            <input type="text" id="formula">

        </div>

        <div class="botones">
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

var criteriosEvaluacionInfInicial = {
    "Aproximación a los requisitos iniciales": {
        descripcion: "Lo expuesto por el estudiante se aproxima lo suficiente a los intereses del representante",
        nombre: "Aproximación a los requisitos iniciales",
        peso: "70",
        rubrica: "Informe Inicial"
    },
    Plenitud: {
        descripcion: "Se describen todas las características necesarias para los objetos, actores y funciones encontradas",
        nombre: "Plenitud",
        peso: "30",
        rubrica: "Informe Inicial"
    }
};
var criteriosEvaluacionInfProgreso = {
    "Avance en los requisitos": {
        descripcion: "Se nota el avance entre definir el contexto, analizar el problema y empezar a modelar la solución",
        nombre: "Avance en los requisitos",
        peso: "50",
        rubrica: "Informe de Progreso"
    },
    Plenitud: {
        descripcion: "Se describen y se asocian los objetivos y problemas, se establecen todos los procesos",
        nombre: "Plenitud",
        peso: "50",
        rubrica: "Informe de Progreso"
    }
};
var criteriosEvaluacionInfFinal = {};
var criteriosEvaluacionProtAlpha = {};
var criteriosEvaluacionProtBeta = {};

var asignaturas = {
    "Ingeniería de Software": {
        contenidos: { contenido_1: "Esquema Preconceptual" },
        estado: "Diseñada",
        nombre: "Ingeniería de Software",
        profesor: "Carlos Lopez"
    },
    "Programación Orientada a Objetos": {
        contenidos: { contenido_1: "Clases", contenido_2: "Objetos" },
        nombre: "Programación Orientada a Objetos",
        profesor: "Daniel Delgado",
        estado: "Diseñada"
    },
    "Ingeniería de Requisitos": {
        contenidos: { contenido_1: "Casos de Uso", contenido_2: "Diagrama de Procesos" },
        estado: "Diseñada",
        nombre: "Ingeniería de Requisitos",
        profesor: "Sara Berrio"
    }
};

var clases = {
    "Calidad del código": {
        tematica: "Calidad del código",
        numero: "1",
        asignatura: "Programación Orientada a Objetos"
    },
    "Calidad de los casos de uso": {
        tematica: "Calidad de los casos de uso",
        numero: "1",
        asignatura: "Ingeniería de Requisitos"
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
var carteraDeProyectos = { cantidadProyectos: 0, proyectos: {} };
var equipos = {};

var representantes = {
    "Santiago Bolaños": {
        celular: "3123044398",
        correo: "sbols@gmail.com",
        disponibilidad: "mucha",
        nombre: "Santiago Bolaños",
        empresa: "Postobon"
    },
    "Juan Perez": {
        celular: "3023139870",
        correo: "perez.juan@gmail.com",
        disponibilidad: "poca",
        empresa: "EPM",
        nombre: "Juan Perez"
    }
};

var empresas = {
    Postobon: {
        mision: "Refrescar el mundo. Inspirar momentos de optimismo y felicidad. Crear valor y marcar la diferencia.",
        necesidad: "Software para incrementar las ventas",
        nombre: "Postobon",
        objetivo: "Crear y satisfacer la demanda. Generar rentabilidad y agregar valor a la organización.",
        vision: "Satisfacer con excelencia a los consumidores de bebidas"
    },
    EPM: {
        mision: "Somos una empresa filial del Grupo Empresarial EPM que contribuye al mejoramiento de la calidad de vida de la población a través de servicios de agua y energía con sustentabilidad ambiental.",
        necesidad: "Aplicación para ubicación del personal en la ciudad",
        nombre: "EPM",
        objetivo: "Mejorar los servicios básicos",
        vision: "En 2022 Ticsa será una empresa líder en México en excelencia operativa, reputación y transparencia, ofreciendo a los clientes y al mercado un portafolio integral de soluciones hídricas y energéticas, fundamentada en prácticas socialmente responsables con todos los grupos de ínteres y contribuyendo a la consolidación multilatina del Grupo Empresarial EPM."
    }
};

var problemas = {
    Postobon: {
        actor: "Cliente",
        causa: "Mala manipulación de la base de datos",
        comentario: "Se hace muy difícil trabajar con un proyecto tan grande",
        descripcionProblema: "Debido a un error en el software, muchas máquinas no proveen la bebida adecuada",
        empresa: "Postobon",
        impacto: "Alto",
        proceso: "Obtención de bebidas",
        validacion: "No Aprobado"
    },
    EPM: {
        actor: "Administración",
        causa: "Mala manipulación de la base de datos y resto del código",
        comentario: "Buen problema para trabajar en el curso, pero se va a evitar la parte que involucra a los usuarios",
        descripcionProblema: "No se puede acceder correctamente a la información y cuentas de algunos usuarios",
        empresa: "EPM",
        impacto: "Bajo",
        proceso: "Obtención de información",
        validacion: "Aprobado Con Ajustes"
    }
};

var retroalimentaciones = {};
var historiasAcademicas = {};
var estudiantes = {};
var profesores = {
    "Carlos Lopez": {
        nombre: "Carlos Lopez", correo: "carlop@gmail.com", celular: "3173022932", direccion: "Cll 123A #12A-32", identificacion: "1"
    },
    "Daniel Delgado": {
        nombre: "Daniel Delgado", correo: "dldelgado@unal.edu.co", celular: "3013215643", direccion: "Cra. 58 #32-12", identificacion: "2"
    },
    "Sara Berrio": {
        nombre: "Sara Berrio", correo: "sraberr@gmail.com", celular: "3053876514", direccion: "Cll 93B #24-43", identificacion: "3"
    },
};
var metodologiasDesarrollo = {};
var informesIniciales = {};
var informesProgreso = {};
var informesFinales = {};
var prototipoAlpha = {};
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
var rubricaAlpha = {
    "1": { nombre: "Rubrica de Informe Inicial", nota: 0, equipo: 1 },
};
var rubricaBeta = {
    "1": { nombre: "Rubrica de Informe Inicial", nota: 0, equipo: 1 },
};

window.addEventListener("load", inicializarPagina, false)

// En construye cartera de proyectos, en el botón "Agregar Proyecto", la ventana que se abre seria buneno
// o filtrar las empresas cuyos proyectos fueron validados, o que aparezca el atributo que dice si se aprobo o no

// En construye cartera de proyectos, el botón de "Ver Proyectos" no funciona correctamente
// Doble mensaje en registra empresas
// Código equipo igual a código proyecto, pero no igual a código Empresa

// Quitar rol estudiante
// quitar entregables
// Pasos y roles un solo string

// arreglar obj estrategico de proyecto es editable