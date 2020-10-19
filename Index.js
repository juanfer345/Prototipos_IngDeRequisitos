function inicializarPagina() {

    // Añadiendo los escuchadores cada relación dinámica (2 por cada una pa q se le pueda dar click al texto y al "rectangulo")
    document.getElementById("diseñaAsignatura").addEventListener("click", formularioDisenaAsignatura)
    document.getElementById("diseñaAsignaturaText").addEventListener("click", formularioDisenaAsignatura)

    document.getElementById("diseñaClase").addEventListener("click", formularioDisenaClase)
    document.getElementById("diseñaClaseText").addEventListener("click", formularioDisenaClase)

    document.getElementById("diseñaRubrica").addEventListener("click", formularioDisenaRubrica)
    document.getElementById("diseñaRubricaText").addEventListener("click", formularioDisenaRubrica)

    document.getElementById("registraEmpresa").addEventListener("click", formularioRegistraEmpresa)
    document.getElementById("registraEmpresaText").addEventListener("click", formularioRegistraEmpresa)

    document.getElementById("defineProblema").addEventListener("click", formularioDefineProblema)
    document.getElementById("defineProblemaText").addEventListener("click", formularioDefineProblema)

    document.getElementById("ValidaProblema").addEventListener("click", formularioValidaProblema)
    document.getElementById("ValidaProblemaText").addEventListener("click", formularioValidaProblema)

    document.getElementById("entregaInformeInicial").addEventListener("click", formularioEntregaInformeInicial)
    document.getElementById("entregaInformeInicialText").addEventListener("click", formularioEntregaInformeInicial)

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
            
            <label> Contenido </label>
            <button id="agregarContenido" type="button" class="botonAgregar"> Agregar Contenido </button>
        </div>

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
            campo.setAttribute("id", `contenido_${identificador}`);

            var boton = document.createElement("button");
            boton.setAttribute("id", `botonContenido_${identificador}`);
            boton.setAttribute("type", "button");
            boton.setAttribute("class", "botonRemover");
            boton.innerHTML = "Remover Contenido"
            boton.addEventListener("click", () => { campo.remove(); boton.remove(); }, false)

            div.appendChild(campo); div.appendChild(boton); identificador++;
        }
    );

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDiseñaAsignatura").querySelectorAll("input, select"), "Asignatura");
            guardarDatos(document.querySelector("#contenidoAsignatura").querySelectorAll("input"), "Contenido Asignatura", document.getElementById("nombre").value);
        }, false);
    document.getElementById("verAsignatura").addEventListener("click", verAsignatura, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function verAsignatura(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("asignatura", "Nombre", asignaturas);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Asignatura </h1>"

    document.getElementById("Form2").innerHTML = `
        <div id="datosVerAsignatura" class="campos">

            ${asignaturasHTML}

            <label for="profesor"> Profesor </label>
            <input type="text" id="profesor" readonly>
            
            <label for="estado"> Estado </label>
            <input type="text" id="estado" readonly>
            
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
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases(event, "asignatura") }, false);
    document.getElementById("verContenidos").addEventListener("click", () => { verContenidos(event, "asignatura") }, false);

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("asignatura").addEventListener("change", () => { actualizarCamposSelect("asignatura", "datosVerAsignatura", asignaturas, "Clases") }, false);
    actualizarCamposSelect("asignatura", "datosVerAsignatura", asignaturas, "Clases")
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
    const asignaturasHTML = obtenerDatosSelect("asignatura", "Asignatura", asignaturas, asignatura);

    // Llenando los datos del formulario
    document.getElementById("barraForm3").innerHTML = "<h1 class='tituloForm'> Ver Clases </h1>"

    document.getElementById("Form3").innerHTML = `
            <div class="campos">
                ${asignaturasHTML}
            </div>

            <div class="tabla">
                <label style="color: #05d1ff; font-size: 4px;"> Número </label>
                <label style="color: #05d1ff; font-size: 4px;"> Temática </label>
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
    document.getElementById("asignatura").addEventListener("change", () => { LlenarTablaSelect(asignatura, "datosVerClases", clases, "clases") }, false);
    LlenarTablaSelect(asignatura, "datosVerClases", clases, "clases");
}

function verContenidos(input, nombreSelect) {

    // Asignatura seleccionada antes de dar click a ver clases
    var asignatura = document.getElementById(nombreSelect).value;

    // Obteniendo los valores preestablecidos para llenar el formulario
    const asignaturasHTML = obtenerDatosSelect("asignatura", "Asignatura", asignaturas, asignatura);

    // Llenando los datos del formulario
    document.getElementById("barraForm3").innerHTML = "<h1 class='tituloForm'> Ver Contenidos </h1>"

    document.getElementById("Form3").innerHTML = `
            <div class="campos">
                ${asignaturasHTML}
            </div>

            <div class="tabla">
                <label style="color: #05d1ff; font-size: 4px;"> Número </label>
                <label style="color: #05d1ff; font-size: 4px;"> Contenido </label>
            </div>

            <div id="datosVerContenidos" class="tabla"> </div>

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
    document.getElementById("asignatura").addEventListener("change", () => { LlenarTablaSelect(asignatura, "datosVerContenidos", asignaturas[asignatura]["contenidos"], "Contenidos") }, false);
    LlenarTablaSelect(asignatura, "datosVerContenidos", asignaturas[asignatura]["contenidos"], "Contenidos")
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
        }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases(event) }, false);
}

function formularioDisenaRubrica(input) {

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
        <h2 class='subtituloForm'> Datos Empresa <h2/>

        <div id="datosRegistraEmpresa" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="mision"> Misión </label>
            <input type="text" id="mision">
            
            <label for="vision"> Visión </label>
            <input type="text" id="vision">
            
            <label for="objetivo"> Objetivo Estratégico </label>
            <input type="text" id="objetivo">
            
            <label for="necesidad"> Necesidad </label>
            <input type="text" id="necesidad">
        </div>

        <h2 class='subtituloForm'> Datos Representante <h2/>

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

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosRegistraEmpresa").querySelectorAll("input"), "Empresa");
            guardarDatos(document.querySelector("#datosRegistraRepresentante").querySelectorAll("input"), "Representante");
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
            <input type="text" id="causa">
            
            <label for="descripcion"> Descripción </label>
            <input type="text" id="descripcion">

            <label for="impacto"> Impacto </label>
            <input type="text" id="impacto">
            
            <label for="proceso"> Proceso Asociado </label>
            <input type="text" id="proceso">

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

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDefineProblema").querySelectorAll("input, select"), "Problema");
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
            <input type="text" id="causa" readonly>
            
            <label for="descripcion"> Descripción </label>
            <input type="text" id="descripcion" readonly>

            <label for="impacto"> Impacto </label>
            <input type="text" id="impacto" readonly>
            
            <label for="proceso"> Proceso Asociado </label>
            <input type="text" id="proceso" readonly>

            <label for="actor"> Actor Involucrado </label>
            <input type="text" id="actor" readonly>
            
            ${validacionHTML}

            <label for="comentario"> Comentario </label>
            <input type="text" id="comentario">
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Validar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verEmpresa" type="button" class="botonExtra"> Ver Empresa </button>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosProblema").querySelectorAll("input, select"), "Problema");
        }, false);
    document.getElementById("verEmpresa").addEventListener("click", () => { verEmpresa(event, "empresa") }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresa").addEventListener("change", () => { actualizarCamposSelect("empresa", "datosProblema", problemas) }, false);
    actualizarCamposSelect("empresa", "datosProblema", problemas);
}

function verEmpresa(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresaVer", "Nombre Empresa", empresas);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Empresa </h1>"

    document.getElementById("Form2").innerHTML = `
    
        <h2 class='subtituloForm'> Datos Empresa <h2/>

        <div id="datosEmpresa" class="campos">

            ${empresasHTML}
            
            <label for="mision"> Misión </label>
            <input type="text" id="mision" readonly>
            
            <label for="vision"> Visión </label>
            <input type="text" id="vision" readonly>
            
            <label for="objetivo"> Objetivo Estratégico </label>
            <input type="text" id="objetivo" readonly>
            
            <label for="necesidad"> Necesidad </label>
            <input type="text" id="necesidad" readonly>
        </div>
    
        <h2 class='subtituloForm'> Datos Representante <h2/>

        <div id="datosRepresentante" class="campos">
            <label for="nombreRepre"> Nombre </label>
            <input type="text" id="nombreRepre" readonly>
            
            <label for="correo"> Correo </label>
            <input type="email" id="correo" readonly>
            
            <label for="celular"> Celular </label>
            <input type="number" id="celular" min="0" readonly>
            
            <label> Disponibilidad </label>

            <div class="radios">
                <input type="radio" id="disponibilidad" name="disponibilidad" value="poca" disabled>
                <label> Poca </label>

                <input type="radio" id="disponibilidad" name="disponibilidad" value="mucha" disabled>
                <label> Mucha </label>
            </div>
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
            actualizarCamposSelect("nombreRepre", "datosRepresentante", representantes);
        }, false);

    actualizarCamposSelect("empresaVer", "datosEmpresa", empresas);
    actualizarCamposSelect("nombreRepre", "datosRepresentante", representantes);
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
                          <input type="text" id="idea"></input>
                          `
            var informePrototipo = informesIniciales;
            var Criterios = criteriosEvaluacionInfInicial;
            break;

        case "Informe de Progreso":
            avanceIdea = `<label for="avance"> Avance </label>
                          <input type="text" id="avance"></input>
                          `
            var informePrototipo = informesProgreso;
            var Criterios = criteriosEvaluacionInfProgreso;
            break;

        case "Informe Final":
            avanceIdea = `<label for="conclusion"> Conclusión </label>
                          <input type="text" id="conclusion"></input>
                          `
            var informePrototipo = informesFinales;
            var Criterios = criteriosEvaluacionInfFinal;
            break;

        case "Prototipo Alfa":
            retroalimentacion = `
                    <label for="valoracion"> Valoración </label>
                    <input type="text" id="valoracion"></input>

                    <label for="sugerencia"> Sugerencia </label>
                    <input type="text" id="sugerencia"></input>
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
    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe de Progreso") {
        contenido = `
            <label for="tema"> Tema </label>
            <input type="text" id="tema">
            
            <label for="secciones"> Secciones </label>
            <input type="text" id="secciones">

            ${avanceIdea}
            
            <label for="estado"> Estado </label>
            <input type="text" id="estado">

            <label for="rubrica"> Rúbrica </label>
            <input type="text" id="rubrica">
            
            <label for="notaRubrica"> Nota de la Rubrica </label>
            <input type="text" id="notaRubrica">`
    }
    else {
        contenido = `
            <label for="link"> Link </label>
            <input type="text" id="link">
            
            <label for="calidad"> Calidad </label>
            <input type="text" id="calidad">

            <label for="fecha"> Fecha de Entrega </label>
            <input type="text" id="fecha">
            
            <label for="rubrica"> Rúbrica </label>
            <input type="text" id="rubrica">

            <label for="notaRubrica"> Nota de la Rubrica </label>
            <input type="text" id="notaRubrica">

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
                <label style="color: #05d1ff; font-size: 4px;"> Nombre </label>
                <label style="color: #05d1ff; font-size: 4px;"> Descripción </label>
                <label style="color: #05d1ff; font-size: 4px;"> Valoración </label>
                <label style="color: #05d1ff; font-size: 4px;"> Comentario </label>
                <label style="color: #05d1ff; font-size: 4px;"> Nota </label>
                <label style="color: #05d1ff; font-size: 4px;"> Peso </label>
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

function actualizarCamposSelect(nombreSelect, nombreContenedorCampos, arreglo) {

    const llave = document.getElementById(nombreSelect).value;
    const campos = document.querySelector("#" + nombreContenedorCampos).querySelectorAll("input");
    if (llave != "") {
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
                break;
            }
            else {
                Array.from(campos).forEach(
                    (campo) => {
                        campo.value = ""
                    }
                )
                break;
            }
        }
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
                    acumulador += `
                        <label> ${key.split("_")[1]} </label>
                        <label> ${value} </label>
                    `;
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
        }
        document.getElementById(nombreContenedorCampos).innerHTML = acumulador;
    }
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

function guardarDatos(input, caso, llave = input[0].value) {

    var condicionCamposCompletos = true; var condicionAlertacion = true;
    var cadenaAux1, cadenaAux2;

    // Esto es para comprobar que se hallan enviado todos los datos
    input.forEach((valor) => {
        if (valor.value == '') { condicionCamposCompletos = false; }
    });

    if (condicionCamposCompletos) {
        switch (caso) {
            case "Asignatura":
                cadenaAux1 = `La asignatura ${llave}`; cadenaAux2 = "a"
                asignaturas[llave] = crearObjeto(input);
                break;

            case "Contenido Asignatura":
                condicionAlertacion = false;
                if (asignaturas[llave] != undefined) {
                    asignaturas[llave]["contenidos"] = {};
                    adicionarAobjeto(asignaturas[llave]["contenidos"], input);
                }
                break;

            case "Clase":
                cadenaAux1 = `La clase ${llave}`; cadenaAux2 = "a"
                clases[llave] = crearObjeto(input);
                break;

            case "Empresa":
                cadenaAux1 = `La empresa ${llave}`; cadenaAux2 = "a"
                empresas[llave] = crearObjeto(input);
                break;

            case "Representante":
                cadenaAux1 = `El representante ${llave}`; cadenaAux2 = "o"
                representantes[llave] = crearObjeto(input);
                break;

            case "Problema":
                cadenaAux1 = `El problema de la empresa ${llave}`; cadenaAux2 = "o"
                problemas[llave] = crearObjeto(input);
                break;

            case "InformeInicial":
                cadenaAux1 = `El informe inicial del equipo ${llave}`; cadenaAux2 = "o"
                informesIniciales[llave] = crearObjeto(input);
                break;

            default:
                break;
        }
        if (condicionAlertacion) { alert(`${cadenaAux1} ha sido almacenad${cadenaAux2}`); }
    }
    else if (caso != "Contenido Asignatura") {
        alert("Por favor llenar todos los campos, Mija")
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

var criteriosEvaluacionInfInicial = {};
var criteriosEvaluacionInfProgreso = {};
var criteriosEvaluacionInfFinal = {};
var criteriosEvaluacionProtAlfa = {};
var criteriosEvaluacionProtBeta = {};
var asignaturas = {};
var clases = {};
var proyectos = {};
var equipos = {};
var carteraProyecto = {};
var representantes = {};
var empresas = {
    AA: { nombre: "AA", mision: "misi", vision: "visi", objetivo: "obje", necesidad: "nece" },
    B: { nombre: "B", mision: "otra", vision: "otravisi", objetivo: "otroobje", necesidad: "otranece" }
};
var problemas = {
    AA: {
        actor: "weno si pero no  gua decir",
        causa: "mucho trabajo",
        descripcion: "Hay mucho trabajo",
        empresa: "AA",
        impacto: "juerte",
        proceso: "no c"
    }
};
var retroalimentaciones = {};
var historiasAcademicas = {};
var estudiantes = {};
var profesores = {
    "Elma Riadito": { nombre: "Elma Riadito", correo: "Elma@elma.com", celular: "3173022932", direccion: "Calle falsa 123", identificacion: "1" },
    "Elsa Pato": { nombre: "Elsa Pato", correo: "Elsa@elsa.ru", celular: "7823", direccion: "Carrera falsa 123", identificacion: "2" },
    "Alan Brito Delgado": { nombre: "Alan Brito Delgado", correo: "Alan@Brito.delgado", celular: "", direccion: "Carrera falsa 456", identificacion: "3" },
};
var metodologiasDesarrollo = {};
var informesIniciales = {};
var informesProgreso = {};
var informesFinales = {};
var prototipoAlfa = {};
var prototipoBeta = {};
var rubricas = {
    "Rubrica de Prototipo Alfa": { nombre: "Rubrica de Prototipo Alfa", nota: 0 },
    "Rubrica de Prototipo Beta": { nombre: "Rubrica de Prototipo Beta", nota: 0 },
    "Rubrica de Informe Inicial": { nombre: "Rubrica de Informe Inicial", nota: 0 },
    "Rubrica de Informe de Progreso": { nombre: "Rubrica de Informe de Progreso", nota: 0 },
    "Rubrica de Informe Final": { nombre: "Rubrica de Informe Final", nota: 0 }
};

window.addEventListener("load", inicializarPagina, false)

//var profesoresHTML = obtenerDatosSelect("profesores", "Profesor", profesores);
function HolaKHace() {
    // NO hace nada
}
//Prueba santiago
