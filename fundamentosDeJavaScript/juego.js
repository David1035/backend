/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

// Array que simula una base de datos de usuarios
const dataBase = [
    { username: 'david123', password: 'password123' },
    { username: 'luz456', password: 'abcde456' },
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
    { username: 'johnDoe', password: 'john2023' },
    { username: 'janeDoe', password: 'jane@doe' },
    { username: 'mariaG', password: 'maria#123' },
    { username: 'admin', password: 'admin2023' },
    { username: 'guest', password: 'guestAccess' }
  ];
  
let inputNameUser = ''
let passwordUser = ''

for(let i = 0; i < dataBase.length; i++){
        
}