/*
let n = 0;

while(n < 10){
    console.log(n)
    n++
}


Hacer un programa utilizando for, que muestre los
numeros impares del 10 al 71.

utlizando while, que muestre los impares, del 10 al 71
*/


function createElement(content, tagName = 'div') {
    const newElement = document.createElement(tagName);
    newElement.textContent = content;
    return newElement;
}

let numero = parseFloat(prompt('Ingrese un número'));
let n = 0;



for(let i = 0; i < numero; i++){
    if(i >= 10 && i % 2 === 0){
        const element = createElement(`for ${i}`);
        document.getElementById('ejercicio').appendChild(element);
    }
}


while(n < numero){
    if(n >= 10 && n % 2 === 0){
        const element = createElement(`while ${n}`, 'p');
        document.getElementById('idsalario').appendChild(element);
    }
    n++;
}
