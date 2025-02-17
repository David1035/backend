// closure

function dinerLocal() {
    let dinero = 0;
    return function ahorrar(total) {
        if(!total){
            console.log('ingresa un valor a sumar');
        } else {
            dinero += total;
            console.log(`El total de mi dinero almacenado es: $${dinero}`)
        }
    }
}

const alcancia = dinerLocal()

alcancia(25)
alcancia(125)


function contarSegundos(horaInicio) {
    return function contador(horaFinal) {
        const diferencia = (horaFinal - horaInicio) /1000;
        return `La diferencia en segundos es ${diferencia.toFixed(0)}`;
    }
}

const inicio = new Date().getTime()
const realizarCalculoDiferenciaSegundos = contarSegundos(inicio)

setTimeout(()=> {
    const fin = new Date().getTime()
    let nuevaHora = fin + 98000;
    console.log(`Nueva hora: ${nuevaHora}`)
    console.log(realizarCalculoDiferenciaSegundos(nuevaHora))
}, 1000)




