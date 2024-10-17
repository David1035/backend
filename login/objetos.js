const objeto = {nombre: 'david', cedula: 1035430767, correo: 'davyd2h@gmail.com'}; 

console.log(typeof(objeto));
console.log(objeto);

// convertimos este objeto a un string
const texto = JSON.stringify(objeto);
console.log(texto);
console.log(typeof(texto));

// convertimos el string a un objeto

const obj = JSON.parse(texto);
console.log(typeof(obj))
console.log(obj)