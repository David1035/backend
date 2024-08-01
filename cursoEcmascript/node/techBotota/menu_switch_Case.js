/*
let variable;
variable = 3

switch(variable){
    case 1:
        {console.log('hola')
            break
        }
    case 2:
        {
            console.log('segunda validacion')
            break
        }
    case 3:
        {
            console.log('tercera validacion')
            break
        }
}
*/

/*
let edad = 18   // ingresar por pantalla, legalizado...

switch (true) {
    case (edad < 6):
        console.log(`Tienes ${edad} años, tu entrada es gratis. Felicitaciones`);
        break;
    case (edad >= 6 && edad < 18):
        console.log(`Tienes ${edad} años, y pagas por la entrada $12.000 pesos`);
        break;
    default:
        console.log(`Tienes ${edad} años, eres mayor de edad y pagas por la entrada $18.000 pesos`);
}
*/


/*
let numeroEsPar = 19;

switch (numeroEsPar % 2 === 0) {
    case true:
        console.log('El número es par ' + numeroEsPar);
        break;
    default:
        console.log('El número es impar ' + numeroEsPar);
}*/

/* utilizar el case, para validar la suma de dos números
qué me nuestre la suma correcta */

/*
let n1 = 4
let n2 = -1
let n = n1 + n2;

switch(n) {
    case 3:
    case 3:
        console.log('la suma es incorrecta')
        break;
    case 9:
        console.log('la suma es correcta')
        break;
    default:
        console.log('ingresa una suma válida')
}
*/

let programacion = 'netmmmmmmm'

switch(programacion) {
    case'net':
    case'java':
    case'php':
        console.log('Tu programas para la parte web')
        break;
    case'móvil':
        console.log('programas para móvil')
        break;
    default:
        console.log('programa microcontroladores')
}
