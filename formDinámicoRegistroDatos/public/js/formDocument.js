let horaInicial;
let horaFinal;
let tiempoTotal;
let hora;
let fecha;
// Extensión para manejar el contador con alarmas
let interval; // Variable para el intervalo
let startTime; // Tiempo de inicio del contador
let isRunning = false; // Estado del contador
let aht = ''
const btnInicio = document.getElementById('btnInicio')
const observacionesText = document.getElementById('observaciones');
const btnCopiar = document.getElementById('btnCopiar')
const btnEnviar = document.getElementById('btnEnviar')
const selectTecnology = document.getElementById('tecnology');
const selectTipoServicio = document.getElementById('tipoServicio');
const selectNaturaleza = document.getElementById('naturaleza');
const idLlamada = document.getElementById('id-llamada');


btnEnviar.disabled = true;
btnInicio.addEventListener('click', function(event) {
    event.preventDefault();
    horaInicial = new Date();
    hora = horaInicial.toTimeString().split(' ')[0]; // solo hora
    fecha = horaInicial.toISOString().split('T')[0]; // solo fecha
    console.log(hora);
    startCounter()
    insertarTexto()
    btnInicio.disabled = true;
    btnEnviar.disabled = false;
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
    } 
    btnInicio.focus()
    insertarTexto()
    enviarDatosAlServidor()
    limpiarDatosForm()
    stopCounter()
})


function insertarTexto() {
    const modoDeTrabajo = document.getElementById('modoDeTrabajo')
    const totalTiempotext = document.getElementById('totalTiempoText')
    if(modoDeTrabajo.value === 'N2') {
        const totalPrueba = parseInt(localStorage.getItem('n2'))
        const counter = parseInt(localStorage.getItem('counterN2'))
        if(totalPrueba > 0) {
            aht = `AHT de N2: --- ${(totalPrueba/counter).toFixed()}, Min ${((totalPrueba/60)/counter).toFixed(1)}`
            totalTiempotext.textContent = aht;
            } else {
                totalTiempotext.textContent = '0'
            }
    } else {
        const totalPrueba = parseInt(localStorage.getItem('n1'))
        const counter = parseInt(localStorage.getItem('counterN1'))
        if(totalPrueba > 0) {
            aht = `AHT n1: --- ${(totalPrueba/counter).toFixed()}, Min ${((totalPrueba/60)/counter).toFixed(1)}`
            totalTiempotext.textContent = aht;
            } else {
                totalTiempotext.textContent = '0'
            }
    }
    
}
insertarTexto()
function insertarTextDinamico() {
    const modoDeTrabajo = document.getElementById('modoDeTrabajo')
    modoDeTrabajo.addEventListener('change' , () => { insertarTexto()})
}
insertarTextDinamico()

//limpiar el local Storage
const localStorageButton = document.getElementById('localStorageButton').addEventListener('click', function(event) {
    event.preventDefault()
    localStorage.clear()
    insertarTexto()
    })

function copiarDatos () {
    const smnet = document.getElementById('smnet')
    const observaciones = document.getElementById('observaciones')
    const tecnology = document.getElementById('tecnology');
    const tipoServicio = document.getElementById('tipoServicio')
    const naturaleza = document.getElementById('naturaleza')
    const horarioB2B = document.getElementById('horario-b2b')
    const atiendeB2b = document.getElementById('atiende-b2b')
    const celularB2b = document.getElementById('celular-b2b')
    const diasAtencion = document.getElementById('dias-atencion')
    const horarioAtencion = document.getElementById('horario-atencion')
    const documento = document.getElementById('documentoIdentidad')
    const cel = document.getElementById('celular')

    if(horarioB2B.value === 'si'){
        const plantillaCreada = `Observaciones: ${observaciones.value}, Id de la llamada: ${idLlamada.value}, SMNET: ${smnet.value}, Tecnología: ${tecnology.value}, Tipo de servicio: ${tipoServicio.value}, Naturaleza: ${naturaleza.value}. Horario B2B activo. Los datos del representante encargado de atender la visita se especifican a continuación: nombre: ${atiendeB2b.value}, celular: ${celularB2b.value}, días de atención: ${diasAtencion.value}, en el horario: ${horarioAtencion.value}, Documento: ${documento.value}`;
        return navigator.clipboard.writeText(plantillaCreada)
    } else {
        const plantillaCreada = `Observaciones: ${observaciones.value}, Id de la llamada: ${idLlamada.value}, SMNET: ${smnet.value}, Tecnología: ${tecnology.value}, Tipo de servicio: ${tipoServicio.value}, Naturaleza: ${naturaleza.value}, Documento: ${documento.value}, Cel: ${cel.value}`;
        return navigator.clipboard.writeText(plantillaCreada)
    }
}

async function enviarDatosAlServidor () {
    const smnet = document.getElementById('smnet')
    const observaciones = document.getElementById('observaciones')
    const name = document.getElementById('name')
    const tecnology = document.getElementById('tecnology');
    const tipoServicio = document.getElementById('tipoServicio')
    const naturaleza = document.getElementById('naturaleza')
    const horarioB2B = document.getElementById('horario-b2b')
    const atiendeB2b = document.getElementById('atiende-b2b')
    const celularB2b = document.getElementById('celular-b2b')
    const diasAtencion = document.getElementById('dias-atencion')
    const horarioAtencion = document.getElementById('horario-atencion')
    const documento = document.getElementById('documentoIdentidad')
    const cel = document.getElementById('celular')
    const actualizacion = document.getElementById('actualizacion-datos');
    const guion = document.getElementById('guion-agendamiento');
    const modo = document.getElementById('modo-back');
    const modoDeTrabajo = document.getElementById('modoDeTrabajo');
    const actualizacionDeDatos = `¿Actualicé los datos? ${actualizacion.value}, ¿Brindé guion de agendamiento? ${guion.value}, ¿Realicé verificación de modo back? ${modo.value}`
    let plantillaCreada;

    if(horarioB2B.value === 'si'){
        plantillaCreada = `Observaciones: ${observaciones.value}, Id de la llamada: ${idLlamada.value}, SMNET: ${smnet.value}, Tecnología: ${tecnology.value}, Tipo de servicio: ${tipoServicio.value}, Naturaleza: ${naturaleza.value}. Horario B2B activo. Los datos del representante encargado de atender la visita se especifican a continuación: nombre: ${atiendeB2b.value}, celular: ${celularB2b.value}, días de atención: ${diasAtencion.value}, en el horario: ${horarioAtencion.value}, Documento o Nit: ${documento.value}`;
    } else {
        plantillaCreada = `Observaciones: ${observaciones.value}, Id de la llamada: ${idLlamada.value}, SMNET: ${smnet.value}, Tecnología: ${tecnology.value}, Tipo de servicio: ${tipoServicio.value}, Naturaleza: ${naturaleza.value}, Documento: ${documento.value}, Cel: ${cel.value}`;
    }
    const data = {
        idLlamada: idLlamada.value,
        name: name.value,
        documentoIdentidad: documento.value,
        observaciones: plantillaCreada,
        actualizacionDeDatos: actualizacionDeDatos,
        fecha: fecha,
        hora: hora,
        tiempoPromedio: tiempoTotal,
        tipoPlantilla: modoDeTrabajo.value
    }

    try {
        const response = await fetch('http://localhost:5000/api/forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //define el tipo de contenido
            },
            body: JSON.stringify(data)
        })

        //Manejo de la respuesta del servidor
        if(response.ok) {
            const result = await response.json();
            console.log('Datos enviados con éxito', result)
        } else {
            console.log(`Error en la solicitud ${response.statusText}`)
        }
    } catch (error) {
        console.error(`Error al enviar los datos al servidor ${error}`)
    }

}

function limpiarDatosForm () {
    document.getElementById('id-llamada').value = '';
    document.getElementById('smnet').value = '';
    document.getElementById('name').value = '';
    document.getElementById('observaciones').value = '';
    document.getElementById('tecnology').value = '';
    document.getElementById('tipoServicio').value = '';
    document.getElementById('naturaleza').value = '';
    document.getElementById('celular').value = '';
    document.getElementById('horario-b2b').value = 'no';
    document.getElementById('documentoIdentidad').value = '';
    document.getElementById('atiende-b2b').value = '';
    document.getElementById('celular-b2b').value = '';
    document.getElementById('dias-atencion').value = 'Lunes a Viernes';
    document.getElementById('actualizacion-datos').value = 'no';
    document.getElementById('guion-agendamiento').value = 'no';
    document.getElementById('modo-back').value = 'no';
    ocultarB2b()
    function reiniciarObservarciones () {
        const observaciones = document.getElementById('observaciones')
        observaciones.style.height = 'auto';
    }
    reiniciarObservarciones()
    
}

/*Cambiar de forma dinámica b2b */
function ocultarB2b() {
    const dinamicB2bInvisible = document.getElementById('horario-b2b');
    const invisible = document.getElementById('horario-b2b-invisible');

    function actualizarVisibilidad () {
        if(dinamicB2bInvisible.value === 'si'){
            
            invisible.style.display = 'block';
        }else {
            const invisible = document.getElementById('horario-b2b-invisible');
            invisible.style.display = 'none';
        }
    }
    dinamicB2bInvisible.addEventListener('change', actualizarVisibilidad);
    actualizarVisibilidad()
}   
ocultarB2b() 

// Calcular el tiempo, de acuerdo al modo de trabajo seleccionado
function calcularTiempo() {
    horaFinal = new Date();
    console.log(horaFinal.getHours())
    const modoDeTrabajo = document.getElementById('modoDeTrabajo')

    if(modoDeTrabajo.value === 'N2') {
        const diferenciaMilisegundos = horaFinal - horaInicial;
        const diferenciaSegundos = Math.floor(diferenciaMilisegundos / 1000);

        tiempoTotal = parseInt(localStorage.getItem('n2')) || 0;
        tiempoTotal += diferenciaSegundos;
        localStorage.setItem('n2', tiempoTotal)

        let counter = parseInt(localStorage.getItem('counterN2') || 0);
        counter++;
        localStorage.setItem('counterN2', counter)
    } else {
        const diferenciaMilisegundos = horaFinal - horaInicial;
        const diferenciaSegundos = Math.floor(diferenciaMilisegundos / 1000);

        tiempoTotal = parseInt(localStorage.getItem('n1')) || 0;
        tiempoTotal += diferenciaSegundos;
        localStorage.setItem('n1', tiempoTotal)

        let counter = parseInt(localStorage.getItem('counterN1') || 0);
        counter++;
        localStorage.setItem('counterN1', counter)
    }
    
}

// Función para reproducir un sonido genérico
function playSound(frequency = 440, duration = 1000) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
        audioContext.close();
    }, duration);
}

// Función para iniciar el contador
function startCounter() {
    if (isRunning) return; // Evita múltiples inicios
    isRunning = true;

    startTime = Date.now();
    let hasPlayedInitialAlarm = false;
    let nextAlarmTime = 60; // Primera alarma a los 60 segundos

    interval = setInterval(() => {
        const elapsedTime = (Date.now() - startTime) / 1000; // Tiempo transcurrido en segundos

        // Alarma inicial a los 60 segundos
        if (!hasPlayedInitialAlarm && elapsedTime >= 60) {
            playSound(); // Reproduce el sonido
            hasPlayedInitialAlarm = true;
            nextAlarmTime = 230; // Configura la siguiente alarma a los 200 segundos (60 + 170)
        }

        // Alarmas repetitivas cada 140 segundos
        if (elapsedTime >= nextAlarmTime) {
            playSound(); // Reproduce el sonido
            nextAlarmTime += 170; // Actualiza para la siguiente alarma
        }

    }, 100); // Actualización precisa cada 100ms
}


// Función para detener el contador
function stopCounter() {
    clearInterval(interval);
    isRunning = false;
}