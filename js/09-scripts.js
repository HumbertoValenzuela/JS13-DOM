// 9. Traversing the DOM
// Recorrer el DOM, como si fuera un mapa

//en este ejemplo selecionar un nav que sería el menú
const navegacion = document.querySelector('.navegacion');
// dentro de navegacion tiene enlaces con la etiqueta <a>
// En JavaScript estos se conocen como nodos
console.log(navegacion);

// para acceder a los nodos se realiza de la sgte forma
//0: text
// 1: a
// nota que dice 0: text, esto pasa porque childNodes 
// considera como elementos los espacios en blanco
console.log(navegacion.childNodes);

//Los espacios en blanco no son considerados con children
console.log(navegacion.children);

// con una sintaxis similar a la de un arreglo se puede 
// acceder a un nodo y esos nodos están conectados al DOM
// acceder al segundo nodo de la clase navegacion
console.log(navegacion.children[1]);

console.log(navegacion.children[1].nodeName);// A enlace
console.log(navegacion.children[1].nodeType); // 1
//nodeType es un element_node (etiquetas HTML)
//https://developer.mozilla.org/es/docs/Web/API/Node/nodeType


// Traversing the DOM en la clase .card
// resumiendo: con children y con un índice se podrá
// hacer Traversing de DOM
const card = document.querySelector('.card');
// card.children nos lista los elementos de ese .card. 
console.log(card.children);
// ingresar a .info
console.log(card.children[1]);//selecciona elemento div.info
// div.info tambien tiene hijos, ingresemos a ellos
console.log(card.children[1].children);// muestra 3 <p>
// ingresar al tercer elemento <p> 
console.log(card.children[1].children[2]);

// Modificar usando Traversing the DOM
card.children[1].children[2].textContent = 'Nuevo Heading';
// Mostrar el Texto usando Traversing the DOM
console.log(card.children[1].children[2].textContent);

// Traversing de hijo al padre

const card1 = document.querySelector('.card');
console.log(card1.parentElement.parentElement.parentElement);

// Traversing entre hermanos pero al siguiente
const card2 = document.querySelector('.card');
console.log(card2.nextElementSibling);

// Traversing entre hermanos pero al previo
// sino existe hermano entrega valor null
const card3 = document.querySelector('.card:nth-child(4)');
console.log(card3.previousElementSibling);

// seleccionar el primer elemento hijo
console.log(navegacion.firstElementChild);
// seleccionar el ultimo elemento hijo
console.log(navegacion.lastElementChild);