// 11. Generar HTML con JavaScript

// crear un elemento enlace <a>
// se conoce como DOM Scripting
const enlace = document.createElement('a');

// agregar atributo - texto al <a>
enlace.textContent = 'Nuevo Enlace';
// agregar atributo href
enlace.href = 'https://www.youtube.cl';
// agregar atributo target _blank
enlace.target = '_blank';
// Agregar una clase al <a>
enlace.classList = 'alguna-clase';
// agregar una función onclick
enlace.onclick = miFuncion;
console.log(enlace);

// Mostrar enlace. Definir donde Mostrar enlace
// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion'); 
// agregar un hijo nuevo al final de los enlaces
navegacion.appendChild(enlace);
// agregar con más control usando insertBefore
console.log(navegacion.children);//saber la posición
// requiere dos argumentos argumento
navegacion.insertBefore(enlace, navegacion.children[1]);
// agregar con innerHTML
navegacion.appendChild(enlace).innerHTML;

// enlace.onclick = miFuncion
function miFuncion() {
    alert('funcion click');    
}


// Crear un nuevo elemento Card de forma dinámica
// primero crear 3 parrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto'); 

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// crear div padre de los parrafos con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'; 
imagen.alt = 'Texto Alternativo';

// Crear el Card padre. 
const card = document.createElement('div');
card.classList.add('card');

// asignar la imagen. como ya lo tenemos creado o seleccionado
card.appendChild(imagen);
// asignar div info
card.appendChild(info);

// Insertar en el HTML
// queryselector porque es una clase existente
const contenedor = document.querySelector('.hacer .contenedor-cards');
// insertarlo al último
contenedor.appendChild(card);
// o insertarlo donde desees
contenedor.insertBefore(card, contenedor.children[0] );
console.log(parrafo1);
console.log(parrafo2);
console.log(parrafo3);
console.log(info);
console.log(imagen);
console.log(card);