function fetchData() {
    fetch('http://localhost:5000/api/registros')
        .then((response) => response.json())
        .then((data) => console.log('datos ',data))
        .catch((error) => console.log(error))
}

let id_llamada = 'kñlsajklsfkjsdfajksdfa'
async function fetchDataId() {
    try {
        let response = await fetch('http://localhost:5000/api/registros')
        let data = await response.json()
        for(let i = 0; i < data.length; i++){
            if(data[i].id_llamada === id_llamada){
                console.log(data[i].nombreClient)
                break
            }
        }
    } catch (error) {
        console.log(error)
    }
}