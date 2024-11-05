/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

// Array que simula una base de datos de usuarios
const dataBase = [
    { username: 'Estefany', password: 'password123' },
    { username: 'luz456', password: 'abcde456' },
    { username: 'Andres', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
    { username: 'Mariana', password: 'john2023' },
    { username: 'janeDoe', password: 'jane@doe' },
    { username: 'Oscar', password: 'maria#123' },
    { username: 'admin', password: 'admin2023' },
    { username: 'guest', password: 'guestAccess' }
  ];

  const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encanta Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebelooper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mí me gusta más el café que el té",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    }
  ];
  


function validarUsuario (username, password, callback){
    let user = dataBase.find((user) => user.username === username && user.password === password)
    
   setTimeout(()=>{
    if(user) {
        console.log(`Bienvenido ${username}`);
        callback(username)
    } else {
        console.log('Usuario o contraseña incorrecto');
    }
   }, 2000)
}


function mostrarTime(username) {
    let timeline = usersTimeline.find((timeline) => timeline.username === username)
    if(timeline) {
        console.log(`El usuario tiene un timeline ${timeline.timeline}`);
    } else {
        console.log('No se encontró timeline')
    }
}

validarUsuario('Estefany', 'password123', mostrarTime)