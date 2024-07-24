let nota1 = Number(prompt('ingrese la nota 1'))
let nota2 = Number(prompt('ingrese la nota 2'))
let nota3 = Number(prompt('ingrese la nota 3'))
let mensaje;

let notaFinal = ((nota1 + nota2 + nota3) / 3).toFixed(1)

if(notaFinal < 2){
    mensaje = `perdió la materia, su nota fue ${notaFinal}`
} else if (notaFinal >= 2 && notaFinal < 3){
    mensaje = `tienes que nivelar, tu nota fue ${notaFinal}`
} else {
    mensaje = `Ganaste la materia, tu nota fue ${notaFinal}`
}

document.getElementById('ejercicio').innerHTML = mensaje



/* hacer un programa que valide el salarioi de los empleados, de la siguiente nmanera
si gana un salario mínimo, sumele de transporte 100.000 y muestre esta validación

si gana más de 1800.000 es un empleado contratista, se le descuenta el 10%

si gana más de 3000.000 tiene un seguro del 10% del salario*/