import { game } from './game.js';

game();

// document.body.children[0].textContent;

// const title = document.querySelector('h1');
// title.textContent = "Texto nuevo"

// lo de arriba es lo mismo que lo de abajo; para trabajar vamos a usar lo de abajo, el documentQuery
//
const párrafos = document.querySelectorAll('text');

// esto es para buscar clases, para buscar ids:

const párrafos2 = document.querySelectorAll('#text');
párrafos2.textContent = 'Te cambio el texto';

// Nos remite al párrafo o párrafo de clase text del documento html
// Este query all nos devuelve un array de nodos, el de arriba nos devuelve un array de un sólo nodo

// con estas herramientas podemos ir a cualquier punto del DOM
// cuando tengo sólo un elemento los elementos tienen textContent y lo puedo editar; cuando tengo varios
// los textContents no están en el array, están en sus elementos
// se puede hacer textElements.forEach(p, index) =>{
// p.textContent = `Hola, he cambiado el texto del párrafo ${index+1}`;
// }
// .textContent puede ser sustituido por innerHTML, que te deja introducir texto pero si
// encuentra html lo ejectuta, así podemos añadie un <strong> por ejemplo a un texto cambiado desde
// el DOM
párrafos2.innerHTML = 'Te cambio el <strong>texto</strong>';
//
//
//
//
//
