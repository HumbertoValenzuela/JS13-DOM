// 5. querySelector

// permite seleccionar elementos, clases, id
// Selecciona solo uno. Si existe mas de uno con el mismo nombre. Tomará el primero que encuentre

// Podemos tener selectores especificos como en CSS. ejemplo elemento una clase, una clase y otra clase, una clase un id, un id y una clase y seleccionar elementos html y una clase o id

//.premium es el padre y el hijo .info
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el primer .card de la clase padre de hospedaje
//elemento section y la clase de hospedaje. y el hijo .card
const primerCard = document.querySelector('section.hospedaje .card');
console.log(primerCard);

//Seleccionar el segundo .card de la clase padre de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');

console.log(segundoCard);

// Seleccionar id usando querySelector
//
const idFormulario = document.querySelector('#formulario');
console.log(idFormulario);

