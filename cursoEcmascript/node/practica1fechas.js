const fechaActual = new Date()
const fechaAyer = new Date(2024,9,16, 21,30,0)

console.log(fechaActual.toLocaleDateString())
console.log(fechaActual.toLocaleTimeString('es-CO', { hour12: false}))
console.log(fechaAyer.toLocaleTimeString('es-CO', { hour12: false})) 

function restarMinutos(fechaInicial, fechaFinal) {
    let diferenciaMilisegundos = fechaInicial.getTime() - fechaFinal.getTime();
    let convertidoMinutos = Math.floor(diferenciaMilisegundos / 60000)
    return convertidoMinutos
}

console.log(restarMinutos(fechaActual, fechaAyer))