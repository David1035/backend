let horaInicial;
let dataHora = '';
let horaFinal;
const btnInicio = document.getElementById('btnInicio')
const observacionesText = document.getElementById('observaciones');
const btnCopiar = document.getElementById('btnCopiar')
const btnEnviar = document.getElementById('btnEnviar')
const selectTecnology = document.getElementById('tecnology');
const selectTipoServicio = document.getElementById('tipoServicio');
const selectNaturaleza = document.getElementById('naturaleza');



btnInicio.addEventListener('click', function(event) {
    event.preventDefault();
    horaInicial = new Date();
    insertarTexto()
    btnInicio.disabled = true;
    idLlamada.focus()

})


observacionesText.addEventListener('input', () => {
    observacionesText.style.height = 'auto';
    observacionesText.style.height = `${observacionesText.scrollHeight}px`;
});



btnCopiar.addEventListener('click', function(event) {
    event.preventDefault()
    console.log(horaInicial)
    copiarDatos()
    btnEnviar.focus()
})



btnEnviar.addEventListener('click', function(event) {
    event.preventDefault()
    if(horaInicial){
        calcularTiempo()
        btnInicio.disabled = false;
        limpiarDatosForm()
    } else{
        limpiarDatosForm()
    }
    btnInicio.focus()
})

function calcularTiempo() {
    horaFinal = new Date();
    console.log(horaFinal)
    const diferenciaMilisegundos = horaFinal - horaInicial;
    const diferenciaSegundos = Math.floor(diferenciaMilisegundos / 1000);

    let tiempoTotal = parseInt(localStorage.getItem('datos')) || 0;
    tiempoTotal += diferenciaSegundos;
    localStorage.setItem('datos', tiempoTotal)

    let counter = parseInt(localStorage.getItem('counter') || 0);
    counter++;
    localStorage.setItem('counter', counter)
}

function insertarTexto () {
    const totalTiempotext = document.getElementById('totalTiempoText')
    
    const totalPrueba = parseInt(localStorage.getItem('datos'))
    const counter = parseInt(localStorage.getItem('counter'))
    if(totalPrueba > 0) {
        totalTiempotext.textContent = `Promedio segundos ${(totalPrueba/counter).toFixed()} y en minutos ${((totalPrueba/60)/counter).toFixed(1)}`;
        } else {
            totalTiempotext.textContent = '0'
            }
}

const localStorageButton = document.getElementById('localStorageButton').addEventListener('click', function(event) {
    event.preventDefault()
    localStorage.clear()
    insertarTexto()
    })

function copiarDatos () {
    const idLlamada = document.getElementById('id-llamada')
    const smnet = document.getElementById('smnet')
    const observaciones = document.getElementById('observaciones')
    const tecnology = document.getElementById('tecnology');
    const tipoServicio = document.getElementById('tipoServicio')
    const naturaleza = document.getElementById('naturaleza')
    const horarioB2B = document.getElementById('horario-b2b')
    const quienAtiende = document.getElementById('quien-atende')
    const telefonoAtiende = document.getElementById('telefono-atende')
    const diasAtencion = document.getElementById('dias-atencion')
    const horarioAtencion = document.getElementById('horario-atencion')
    const documento = document.getElementById('documentoIdentidad')

    if(horarioB2B.value === 'Si'){
        const plantillaCreada = `Observaciones ${observaciones.value}, Id de la llamada ${idLlamada.value}, prueba SMNET: ${smnet.value}, tecnología ${tecnology.value}, tipo de servicio ${tipoServicio.value}, naturaleza ${naturaleza.value}. Aplica horario B2B, atiende ${quienAtiende.value}, celular de quién atiende ${telefonoAtiende.value}, días de atención ${diasAtencion.value}, horario de atención ${horarioAtencion.value}, documento ${documento.value}`;
        return navigator.clipboard.writeText(plantillaCreada)
    } else {
        const plantillaCreada = `Observaciones ${observaciones.value}, Id de la llamada ${idLlamada.value}, prueba SMNET: ${smnet.value}, tecnología ${tecnology.value}, tipo de servicio ${tipoServicio.value}, naturaleza ${naturaleza.value}, documento ${documento.value}`;
        return navigator.clipboard.writeText(plantillaCreada)
        }
}

function limpiarDatosForm () {
    document.getElementById('id-llamada').value = '';
    document.getElementById('smnet').value = '';
    document.getElementById('observaciones').value = '';
    document.getElementById('tecnology').value = '';
    document.getElementById('tipoServicio').value = '';
    document.getElementById('naturaleza').value = '';
    document.getElementById('horario-b2b').value = '';
    document.getElementById('quien-atende').value = '';
    document.getElementById('telefono-atende').value = '';
    document.getElementById('dias-atencion').value = '';
    document.getElementById('horario-atencion').value = '';
    document.getElementById('documentoIdentidad').value = '';
    const datos = document.getElementById('actualizacion-datos')
    datos.value = 'No';
    const guion = document.getElementById('guion-agendamiento')
    guion.value = 'No';
    const back = document.getElementById('modo-back')
    back.value = 'No';
    const b2b = document.getElementById('horario-b2b')
    b2b.value = 'No';
    

}
/* TIPO DE SERVICIO Y TECNOLOGIA */
const opcionesTiposervicio = {
    'HFC': ['Internet', 'Telefonía', 'TV_Digital', 'One_TV_2.0'],
    'GPON': ['Internet', 'IPTV', 'Telefonía', 'One_TV_2.0'],
    'ADSL': ['Internet', 'IPTV', 'Telefonía', 'One_TV_2.0']
}
const opcionesNaturaleza = {
    'Internet': ['No navega', 'Navegación Lenta', 'Servicio Intermitente', 'Problemas WiFi'],
    'Telefonía': ['No funciona línea telefónica', 'Servicio Intermitente', 'Mala Calidad Voz / Entrecortada', 'Ingresa llamada de otra línea', 'No salen ni entran llamadas'],
    'TV_Digital': ['Sin señal', 'Tv no visualiza algunos canales', 'Mala calidad de imagen', 'Fallas en audio / subtítulos', 'Problemas con paquetes adicionales', 'Problemas con control remoto'],
    'IPTV': ['Sin señal', 'Tv no visualiza algunos canales', 'Mala calidad de imagen', 'Fallas en audio / subtítulos', 'Problemas con paquetes adicionales', 'Problemas con control remoto'],
    'One_TV_2.0': ['Sin señal', 'DRM falló', 'Imagen congelada / TV pixelada', 'Problemas de audio', 'Error de descarga', 'Problemas en comando de voz', 'Configuración de control', 'Problemas app One TV', 'Servicio intermitente']
};

// Cargar opciones de tecnología
function cargarOpcionesTecnology() {
    Object.keys(opcionesTiposervicio).forEach((tecnology, index) => {
        const option = document.createElement('option');
        option.value = tecnology;
        option.textContent = tecnology;
        if (index === 0) option.selected = true; // Seleccionar el primer hijo por defecto
        selectTecnology.appendChild(option);
    });
}

// Filtrar y cargar tipos de servicio
function cargarOpcionesTipoServicio(tecnology) {
    // Limpiar el select antes de agregar opciones
    selectTipoServicio.innerHTML = '';
    const servicios = opcionesTiposervicio[tecnology] || [];
    servicios.forEach((servicio, index) => {
        const option = document.createElement('option');
        option.value = servicio;
        option.textContent = servicio;
        if (index === 0) option.selected = true; // Seleccionar el primer hijo por defecto
        selectTipoServicio.appendChild(option);
    });

    // Cargar naturaleza por defecto para el primer servicio
    const primerTipoServicio = servicios[0] || null;
    if (primerTipoServicio) {
        cargarOpcionesNaturaleza(primerTipoServicio);
    }
}

// Cargar opciones de naturaleza
function cargarOpcionesNaturaleza(tipoServicio) {
    // Limpiar el select antes de agregar opciones
    selectNaturaleza.innerHTML = '';
    const naturalezas = opcionesNaturaleza[tipoServicio] || [];
    naturalezas.forEach((naturaleza, index) => {
        const option = document.createElement('option');
        option.value = naturaleza;
        option.textContent = naturaleza;
        if (index === 0) option.selected = true; // Seleccionar el primer hijo por defecto
        selectNaturaleza.appendChild(option);
    });
}

// Eventos
selectTecnology.addEventListener('change', (event) => {
    const tecnologiaSeleccionada = event.target.value;
    cargarOpcionesTipoServicio(tecnologiaSeleccionada);
});

selectTipoServicio.addEventListener('change', (event) => {
    const tipoServicioSeleccionado = event.target.value;
    cargarOpcionesNaturaleza(tipoServicioSeleccionado);
});

// Inicialización
function inicializarSelects() {
    cargarOpcionesTecnology();
    const tecnologiaSeleccionada = selectTecnology.value;
    cargarOpcionesTipoServicio(tecnologiaSeleccionada);
}

inicializarSelects();

/* Actualización datos guion entre otros dinámico */
// Listado de opciones comunes para los select
const opciones = [
    { value: 'no', text: 'No' },
    { value: 'si', text: 'Si' }
];

// IDs de los select en los que deseas añadir las opciones
const selectIDs = ['actualizacion-datos', 'guion-agendamiento', 'modo-back', 'horario-b2b'];

// Función para cargar las opciones dinámicamente
function cargarOpcionesDinamicas() {
    selectIDs.forEach((selectID) => {
        const selectElement = document.getElementById(selectID);

        // Asegurarse de que el select esté vacío antes de añadir opciones
        selectElement.innerHTML = '';

        // Añadir opciones dinámicamente
        opciones.forEach((opcion) => {
            const optionElement = document.createElement('option');
            optionElement.value = opcion.value;
            optionElement.textContent = opcion.text;
            selectElement.appendChild(optionElement);
        });

        // Seleccionar la opción predeterminada ("No" en este caso)
        selectElement.value = 'no';
    });
}

// Llamar a la función para cargar las opciones
document.addEventListener('DOMContentLoaded', cargarOpcionesDinamicas);
