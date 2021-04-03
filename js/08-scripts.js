// 8. Cambiando el CSS con JavaScript

const encabezado = document.querySelector('h1');
console.log(encabezado.style);// todos los estilos o propiedades que se pueden pasar a estos selectores 
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

// Recomiendo agregar o quitar clases.
// Seleccionar el primera clase .card de la página
// existe classList trae las clases como si fuera un arreglo
// class
// className como si fuera un string
const card = document.querySelector('.card');
console.log(card);

const card1 = document.querySelector('.card');
console.log(card1.classList);// entrega un arreglo

const card2 = document.querySelector('.card');
console.log(card2.className);// entrega un String


//classList tiene un metodo .add para agregar una clase
// en este caso se agregan dos clases
const card3 = document.querySelector('.card');
card3.classList.add('nuevo-clase', 'segunda-clase');
//classList tiene un metodo .remove para remover una clase
card3.classList.remove('card');
console.log(card3.classList);// entrega un arreglo