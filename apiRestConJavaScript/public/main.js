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
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');

        img1.src = data[0].url
        img2.src = data[1].url
        btn1.onclick = () => saveFavourite(data[0].id)
        btn2.onclick = () => saveFavourite(data[1].id)
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
            const section = document.getElementById('favouriteMichis')
            section.innerHTML = "";
            const h2 = document.createElement('h2')
            const h2Text = document.createTextNode('Michis Favoritos')
            h2.appendChild(h2Text)
            section.appendChild(h2)
            data.forEach(element => {
                element.image.url
                const articule = document.createElement('article')
                const img = document.createElement('img')
                const btn = document.createElement('button')
                const btnText = document.createTextNode('sacar al michi de favoritos')

                btn.appendChild(btnText)
                btn.onclick = () => deleteFavouriteMiche(element.id)
                img.src = element.image.url
                img.width = '150'
                articule.appendChild(img)
                articule.appendChild(btn)

                section.appendChild(articule)
            });
        }
        console.log("🐱 Favoritos obtenidos:", data);
    } catch (error) {
        console.error('no carga datos')
    }
}

async function saveFavourite(id) {
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            "X-API-KEY": 'live_1344OCleEw0ckKke6F79UQySZeZSYxzGwz9kJ2krCRhoC4kGq1rjBkJRo9crGDQj'
        },
        body: JSON.stringify({
            image_id: id
        })
    })
    const data = await res.json();

        if (!res.ok) {
            console.error(`Error ${res.status}:`, data);
            return;
        }
        getFavouriteMichis()

        console.log("✅ Imagen guardada como favorita:", data);
}

async function deleteFavouriteMiche(id) {
    const res = await fetch(`${API_URL_FAVORITES}/${id}`, {
        method: 'delete', 
        headers: {
            "X-API-KEY": 'live_1344OCleEw0ckKke6F79UQySZeZSYxzGwz9kJ2krCRhoC4kGq1rjBkJRo9crGDQj'
        },
    })
    const data = res.json
    if(res.status !== 200) {
        spanError = document.getElementById('spanError')
        spanError.innerHTML = 'Se presentó un error ' + res.status + data.message
    } else {
        getFavouriteMichis()
        console.log("✅ Imagen eliminada como favorita:", data);
    }  

    
}


getFavouriteMichis()
