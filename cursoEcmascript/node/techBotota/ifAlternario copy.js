/* let nota = 4;
if(nota < 5){
    console.log('perdió la materia')
} else {
    console.log('Ganó la materia')
 } */

    /*
let nota = 5;

(nota < 5) ? console.log('perdió la materia'): console.log('Ganó la materia')
*/
//--- arriba vemos el if alternario 'operador ternario'
/*
let nota = 5;

(nota < 2)? console.log('perdió la materia'):
(nota < 3 && nota > 1) ? console.log('debe nivelar'):
(nota < 4 && nota > 2) ? console.log('su nota es suficiente')
(nota < 5 && nota > 3) ? console.log('su nota es bueno'):
console.log('su nota es excelente')
 
*/
/*
hacer un programa que nos permita saber que tipo de trabajador tenemos en la empresa
empleadoPorHoras = 800.000, empleadoSalarioB = 1300.000, 
empleadoContratista = 2millones a 3millones,
empleadoDePlanta = 1400.000 a 1900.000, gerente más de 3millones
*/
/*
let salario = 1900000; // ingreso por pantalla

if (salario >= 800000 && salario < 1300000) {
    console.log(`Es empleado por horas, y su salario es ${salario}`);
} else if (salario === 1300000) {
    console.log(`Es empleado por el salario mínimo, y su salario es ${salario}`);
} else if (salario >= 1400000 && salario <= 1900000) {
    console.log(`Es empleado de planta, y su salario es ${salario}`);
} else if (salario >= 2000000 && salario < 3000000) {
    console.log(`Es contratista, y su salario es ${salario}`);
} else if (salario >= 3000000) {
    console.log(`Es el gerente, y su salario es ${salario}`);
} else {
    console.log('Valor ingresado no válido para ningún tipo de empleado');
}
*/

let salario = 15000; // ingreso por pantalla

(salario >= 800000 && salario < 1300000) ? console.log(`Es empleado por horas, y su salario es ${salario}`) :
(salario === 1300000) ? console.log(`Es empleado por el salario mínimo, y su salario es ${salario}`) :
(salario >= 1400000 && salario <= 1900000) ? console.log(`Es empleado de planta, y su salario es ${salario}`) :
(salario >= 2000000 && salario < 3000000) ? console.log(`Es contratista, y su salario es ${salario}`) :
(salario >= 3000000) ? console.log(`Es el gerente, y su salario es ${salario}`) :
console.log('Valor ingresado no válido para ningún tipo de empleado'); 
