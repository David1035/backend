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