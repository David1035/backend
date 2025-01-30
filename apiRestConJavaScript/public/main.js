//const { response } = require("express");

const nameSpan = document.getElementById('nameSpan');
const ageSpan = document.getElementById('ageSpan');
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites';
const spanError = document.getElementById('spanError')



async function getLoadMichis () {
    try {
        const response = await fetch(API_URL_RANDOM);
        const data = await response.json()
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        img1.src = data[0].url
        img2.src = data[1].url
        console.log('data')
        console.log(data)

    } catch (error) {
        console.error('se presenta error al recibir los datos ')
    }
}

async function getFavouriteMichis () {
    try {
        const response = await fetch(API_URL_FAVORITES, {
            method: 'GET',
            headers: { "X-API-KEY": 'live_1344OCleEw0ckKke6F79UQySZeZSYxzGwz9kJ2krCRhoC4kGq1rjBkJRo9crGDQj' },
        });
        const data = await response.json()

        if(response.status !== 200) {
            spanError.innerHTML = 'Se presentó un error ' + response.status + data.message
        } else {
            data.forEach(element => {
                element.image.url
                console.log(element)
            });
        }
        console.log("🐱 Favoritos obtenidos:", data);
    } catch (error) {
        console.error('no carga datos')
    }
}

async function saveFavourite() {
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            "X-API-KEY": 'live_1344OCleEw0ckKke6F79UQySZeZSYxzGwz9kJ2krCRhoC4kGq1rjBkJRo9crGDQj'
        },
        body: JSON.stringify({
            image_id: '33q'
        })
    })
    const data = await res.json();

        if (!res.ok) {
            console.error(`Error ${res.status}:`, data);
            return;
        }

        console.log("✅ Imagen guardada como favorita:", data);
}
   
getFavouriteMichis()
const btn1 = document.getElementById('btn1')
btn1.addEventListener('click', () => {
    saveFavourite()
})