//const { response } = require("express");

const nameSpan = document.getElementById('nameSpan');
const ageSpan = document.getElementById('ageSpan');
const I_AM_KEY = 'api_key=live_1344OCleEw0ckKke6F79UQySZeZSYxzGwz9kJ2krCRhoC4kGq1rjBkJRo9crGDQj'
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?';
const spanError = document.getElementById('spanError')



async function getLoadMichis () {
    try {
        const response = await fetch(API_URL_RANDOM);
        const data = await response.json()
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        img1.src = data[0].url
        img2.src = data[1].url

    } catch (error) {
        console.error('se presenta error al recibir los datos ')
    }
}

async function getFavoritesMichis () {
    try {
        const response = await fetch(API_URL_FAVORITES, {
            headers: { "x-api-key": I_AM_KEY },
        });
        console.log(response)
        if(response.status !== 200) {
            spanError.innerHTML = 'Se presentó un error ' + response.status + data.message
        }
        const data = await response.json()
        console.log('Favorites')
        console.log(data)


    } catch (error) {
        console.error('no carga datos')
    }
}

async function saveFavourite() {
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id: 'adz'
        })
    })
    console.log('save')
    console.log(res)
}
   
getFavoritesMichis()
saveFavourite()