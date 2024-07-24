// para trabajar con fechas
const moment = require('moment');

let ahora = moment();

console.log(ahora) // ver la fecha y hora

console.log(ahora.format('YYYY/MM/DD - HH:mm')) //formatear la fecha