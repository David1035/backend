const parent = document.getElementById("parent")
console.log(parent)

console.log(parent.children); // nos trae todos los elementos hijos

console.log(parent.firstElementChild); // Nos trae el primer hijo

console.log(parent.lastElementChild); // Nos trae el último elemento hijo

console.log(parent.previousElementSibling); // Nos trae el elemento anterior, 
// que está detrás, básicamente un familiar previo

console.log(parent.nextElementSibling); /* Nos trae el siguiente elemento 
que le sigue, puede ser hermano del padre, no un hijo*/

console.log(parent.childNodes); // trae los nodos hijos, hasta los nodos invisibles como los comentarios o espacios en blanco

const children2 = parent.querySelector('li') // trae el elemento hijo el primero
console.log(children2)

console.log(children2.parentNode); /* al ubicarme en el elemento hijo, ahora trae el elemento padre con sus elementos*/

console.log(children2.parentElement) /* Tiene la misma función que el elemento anterior*/

console.log(children2.closest("menu")) /* Trae al elemento abuelo más cercado, que cumpla con la petición de menu en este caso*/

