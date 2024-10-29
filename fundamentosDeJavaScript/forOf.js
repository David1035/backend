/*
Calcular el descuento
*/

function calcularDescuento (precio, descuento){
    const descuent = (precio * descuento) / 100
    const precioConDescuento = precio - descuent
    console.log(precioConDescuento)
}

calcularDescuento(125000,9)