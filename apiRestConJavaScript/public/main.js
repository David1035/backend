const nameSpan = document.getElementById('nameSpan');
const ageSpan = document.getElementById('ageSpan');
const actualizarBtn = document.getElementById('actualizar-btn')
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';


async function getGatitos () {
    try {
        const response = await fetch(API_URL);
        const data = await response.json()
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');

        img1.src = data[0].url
        img2.src = data[1].url
        img3.src = data[2].url

    } catch (error) {
        console.error('se presenta error al recibir los datos ')
    }
}

actualizarBtn.addEventListener('click', getGatitos)
getGatitos()    