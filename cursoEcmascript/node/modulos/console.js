console.log('Algo')
console.error('mieeror')
console.warn('esto metodo warn')

var tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b:'z'
    }
]

console.table(tabla)
console.log(tabla)

function function1(){
    console.group('funcion 1')
    console.log('bla bla bla')
    function2()
    console.groupEnd('funcion 1')
}
function function2(){
    console.group('funcion 2')
    console.log('bla bla bla, funcion 2')
    //
    console.groupEnd('funcion 2')
}
function1()
// contador 

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')