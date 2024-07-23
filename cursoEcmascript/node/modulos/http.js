const http = require('http')

http.createServer(router).listen(3100);

function router (req, res){
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url){
        case '/hola':
            res.write('hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 4004: No se lo que quieres')
            res.end();
    }
/*
    res.writeHead(201, { 'Content-Type': 'text/plain' })
    // rspuesta al usuario
    res.write('Hola, ya se usar HTTP de NodeJS')

    res.end();
    // los puertos más comunes 3000 */
}

console.log('escuchando en el puerto 3000')