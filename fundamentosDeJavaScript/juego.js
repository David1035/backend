//adivina el número secreto
const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = 8

if(numeroJugador === numeroSecreto){
    console.log('empate')
} else {
    console.log('sigue intentando   ')
}

