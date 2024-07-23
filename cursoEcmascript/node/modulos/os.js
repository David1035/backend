const os = require('os');

//console.log(os.arch()); // ver arquitectura
//console.log(os.platform()); // ver plataforma, si s linux o winds
//console.log(os.cpus()); // ver los cores.lent() para ver la cantidad de cores
console.log(os.constants); // errores y prioridad del sistema

const SIZE = 1024;
function kb(bytes){return bytes / SIZE}
function mb(bytes){return kb(bytes) / SIZE}
function gb(bytes){return mb(bytes) / SIZE}
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); //totalMemoria RAM

console.log(os.homedir()); //ver la raiz del directorio
console.log(os.tmpdir()); // ver la raiz de temporal

console.log(os.hostname()); //se accede al host

console.log(os.networkInterfaces()); // interfases de redes


