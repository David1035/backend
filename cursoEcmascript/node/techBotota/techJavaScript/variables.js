

/* 
Inicio
    leer a;
    leer b;
    leer c;
    suma = a + b;
    producto = c * suma;

    imprimir suma;
    imprimir producto;
fin
*/

let a = parseInt(prompt("Ingrese un número: "))
let b = parseInt(prompt("Ingrese un número: "))
let c = parseInt(prompt("Ingrese un número: "))

let suma = a + b
let producto = c * suma

alert(`La suma de a y b, es: ${suma}, y el producto es ${producto}`)
/*
Inicio 
    //Empleado de la planta, salario + bono
    salarioPlanta = 130000;
    bonoPlanta = salarioPlanta * 0.10;
    totalSalarioPlanta = salarioPlanta + bonoPlanta;
    imprimir totalSalarioPlanta;

    //Empleado contratista, salario - descuento
    salarioContratista = 2000000;
    descuentoContratista = salarioContratista * 0.20;
    totalSalarioContratista = salarioContratista - descuentoContratista;
    imprimir totalSalarioContratista;

    //Tercer empleado, horas semanales * hora diaria
    leer horasTrabajadasSemana;
    tarifaPorHora = 20000;

    si horasTrabajadasSemana > 30 entonces
        horaTrabajada = 30;
    fin si

    salarioTercerEmpleado = horasTrabajadasSemana * tarifaPorHora;
    imprimir salarioTercerEmpleado;
fin

*/
let salarioPlanta = 130000;
let bonoPlanta = salarioPlanta * 0.10;
let totalSalarioPlanta = salarioPlanta + bonoPlanta;

let salarioContratista = 2000000;
let descuentoContratista = salarioContratista * 0.20;
let totalSalarioContratista = salarioContratista - descuentoContratista;


let horasTrabajadasSemana = parseInt(prompt("Ingrese las horas trabajadas: "));
let tarifaPorHora = 20000;
if (horasTrabajadasSemana > 30) {
    horasTrabajadasSemana = 30;
}else{
    horasTrabajadasSemana = horasTrabajadasSemana;
};
let salarioTercerEmpleado = horasTrabajadasSemana * tarifaPorHora;

alert(`Salario del trabajor de planta: ${totalSalarioPlanta}, salario del contratista: ${totalSalarioContratista} y el salario del tercer empleados es ${salarioTercerEmpleado}`)

