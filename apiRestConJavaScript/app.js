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

alcancia()
alcancia(25)
alcancia(125)
alcancia(125)


function contarSegundos(horaInicio) {
    return function contador(horaFinal) {
        const diferencia = (horaFinal - horaInicio) /1000;
        return `La diferencia en segundos es ${diferencia.toFixed()}`;
    }
}

const inicio = new Date().getTime()
const realizarCalculoDiferenciaSegundos = contarSegundos(inicio)

let tiempo = 0;
setTimeout(()=> {
    const fin = new Date().getTime()
    tiempo = realizarCalculoDiferenciaSegundos(fin)
    console.log(tiempo)
}, 7000)