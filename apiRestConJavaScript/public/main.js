const nameSpan = document.getElementById('nameSpan');
const ageSpan = document.getElementById('ageSpan');
const actualizarBtn = document.getElementById('actualizar-btn')
const URL = 'https://api.thecatapi.com/v1/images/search';
const API_URL = 'http://localhost:5000/api/forms';

async function definirHora () {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        const fechaCreada = new Date(data[0].createdAt)
        const hora = new Date()
        console.log(fechaCreada)
        console.log(hora)
    } catch (error) {
        
    }
}
definirHora()

async function getGatitos () {
    try {
        const response = await fetch(URL);
        const data = await response.json()
        nameSpan.textContent = data[0].url;
        ageSpan.src = data[0].url === 0 ? '' : data[0].url;
    } catch (error) {
        console.error('se presenta error al recibir los datos ')
    }
}

actualizarBtn.addEventListener('click', getGatitos)
getGatitos()    