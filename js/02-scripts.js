// 2. Acceder a elementos del HTML con document

// se pueden selecccionar los diferentes elementos, sin embargo
//no vamos a utilizar estas sintaxis la mayoría de las 
// veces. Para ella vamos a utilizar otras formas de 
// seleccionar elementos.
// Pero podemos ver que todo hace referencia al document

let elemento1, elemento2, elemento3, elemento4, elemento5;
let elemento6, elemento7, elemento8, elemento9, elemento10;
let elemento11, elemento12, elemento13, elemento14, elemento15;

elemento1 = document;
elemento2 = document.head;
elemento3 = document.body;
elemento4 = document.forms;//retorna un valor similar a un arreglo, pero se llama HTMLCollection
elemento5 = document.domain;
elemento6 = document.forms[0];
elemento7 = document.forms[0].id;
elemento8 = document.forms[0].method;
elemento9 = document.forms[0].classList;
elemento10 = document.forms[0].action;
elemento11 = document.links;//retorna un arreglo,llamado HTMLCollection
// se puede acceder a travéz del índice
elemento12 = document.links[4];
// Seleccionar las clases. DOMTokenList, entrega como arreglo y se puede acceder como un arreglo
elemento13 = document.links[4].classList;
// Muestra y Selecciona las clases como String
elemento14 = document.links[4].className;
elemento15 = document.images;



console.log(elemento1);
console.log(elemento2);
console.log(elemento3);
console.log(elemento4);
console.log(elemento5);
console.log(elemento6);
console.log(elemento7);
console.log(elemento8);
console.log(elemento9);
console.log(elemento10);
console.log(elemento11);
console.log(elemento12);
console.log(elemento13);
console.log(elemento14);
console.log(elemento15);
