var lasName = 'David';
lasName = 'Juan' // se reasignan los valores
console.log(lasName)

let fruit = 'David';
fruit = 'Juan' // se reasignan los valores
console.log(fruit)

const animal = 'dog';
animal = 'cat';
console.log(animal)
// genera error

const fuit = () => {
    if(true){
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'kiwi'; // blcock scope
        const fruit3 = 'banana'; // block scope 
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fuit()

