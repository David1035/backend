let horaI = ''
let horaF = ''

function obtenerFechaHoraColombia() {
    // Obtener la fecha y hora actual en la zona horaria de Colombia
    let fechaHoraColombia = new Date().toLocaleString('es-CO', {
        timeZone: 'America/Bogota',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Usar formato 24 horas
    });

    return fechaHoraColombia;

}

function probandoCallBack(inicia, miCallback) {
    setTimeout(() => {
        let fecha = new Date()
        horaI = obtenerFechaHoraColombia()
        console.log(fecha, horaI, inicia)
        miCallback()
    })
}

probandoCallBack('David', () => {
    setTimeout(() => {
        horaF = obtenerFechaHoraColombia()
        console.log(horaF)
    },3000)
})