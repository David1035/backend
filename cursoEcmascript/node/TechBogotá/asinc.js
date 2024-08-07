/* 
Montar un arrego de objetos y utilizar promesas y función asincrona
*/

const carros = [
    { marca: "Toyota", modelo: "Corolla", año: 2021 },
    { marca: "Ford", modelo: "Mustang", año: 2020 },
    { marca: "Chevrolet", modelo: "Camaro", año: 2022 },
    { marca: "Honda", modelo: "Civic", año: 2019 }
];

function buscarCarro(marca, modelo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const resultado = carros.find(carro => carro.marca === marca && carro.modelo === modelo);
            if (resultado) {
                resolve(resultado);
            } else {
                reject(new Error(`No se encontró el carro con marca ${marca} y modelo ${modelo}`));
            }
        }, 2000);
    });
}

async function obtenerDetallesCarro(marca, modelo) {
    try {
        console.log("Buscando el carro...");
        const detallesCarro = await buscarCarro(marca, modelo);
        console.log(`Carro encontrado: ${detallesCarro.marca} ${detallesCarro.modelo}, año ${detallesCarro.año}`);
    } catch (error) {
        console.error(error.message);
    }
}

// Llamando a la función asíncrona
obtenerDetallesCarro("Toyota", "Corolla");
obtenerDetallesCarro("Ford", "Fiesta"); // Este llamará un error porque no está en la lista
