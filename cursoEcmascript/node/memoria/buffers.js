//let buffer = Buffer.alloc(4);

let buffer1 = Buffer.from('hola');

console.log(buffer1.toString())
/*Cómo se puede ver, toString() sirve para traducir a texto, y pasar de binario a texto
además, Buffer.from() dentro de paréntesis, podemos meter lo que deseamos guardar en memoria */

let abc = Buffer.alloc(26);

console.log(abc)

for(let i = 0; i < 26; i++){
    abc[i] = i +97
}

console.log(abc.toString())
