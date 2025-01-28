const nameSpan = document.getElementById('nameSpan');
const ageSpan = document.getElementById('ageSpan');
const actualizarBtn = document.getElementById('actualizar-btn')
const URL = 'https://api.thecatapi.com/v1/images/search';

/*async function getPerson() {
    const response = await fetch(URL)
    const data = await response.json();
    const person = data[0];
    console.log(person)
    nameSpan.textContent = person.name;
    ageSpan.textContent = person.documentoIdentidad;
}

getPerson()*/

/*
fetch(URL)
    .then(hola => hola.json())
    .then(data => {
        nameSpan.textContent = data[0].url;
        ageSpan.src = data[0].url;
        ageSpan.style.width = '700px';
    }) */

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