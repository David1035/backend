//1. Tipo de entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal) // los detecta igual, como tipo de datos number

// 2. Notación científica
const cientifico = 5e3

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritmeticas 
//. suma, resta, multiplicación y división 

const suma = 3+4
const resta = 8 - 6
const multiplicacion = 4 * 2
const division = 20 / 4

// 2. módulo y exponenciación
const modulo = 15 % 8 // si un número es multiplo de otro número
const exponenciacion = 2 ** 3 // elevado a la potencia 3

//precisión 
const resultado = 0.1 + 0.2
console.log (resultado.toFixed(1))
console.log (resultado.toFixed(1) === 0.3) // da falso, no son iguales

// Operaciones avanzadas 
const raizCuadrada = Math.sqrt(16) // para saber la raiz cuadrada
const valorAbsoluto = Math.abs(-7) // valor absoluto
const aleatorio = Math.random(1, 3)
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)


// conversión de tipos 
