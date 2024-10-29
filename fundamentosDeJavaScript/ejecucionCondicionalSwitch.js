/* 
switch(expresion) {
    case valor1:
        //código a ejecutar
        break;
    case valor2:
        //código a ejecutar
        break;
    case valor3:
        //código a ejecutar
        break;
    default:
        //si ninguno caso fue verdad, código
}
*/

let expr = 'uvas'

switch (expr){
    case 'naranjas':
        console.log(`Si tenemos ${expr}`)
        break
    case 'uvas':
        console.log(`Si tenemos ${expr}`)
        break
    case 'peras':
        console.log(`Si tenemos ${expr}`)
        break
    default:
        console.log('no tenemos esa fruta')
}