/*for (variable; condición; incremento){
    //código a ejecutar
}*/

let list = ['eat', 'frutas', 'mangos', 'newYork']

for(let i = 0; i < list.length; i++){
    let palabra = list[i]
    for(let j = 0; j < palabra.length; j++){
        console.log(palabra[j])
    }
    if(i < list.length - 1) {
        console.log('-----------------------')
    }
}