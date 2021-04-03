// 6. querySelectorAll

//Selecciona todos los elementos que cumplan con la condición del selector
// tiene las mismas caracteristicas que queryselector
const card = document.querySelectorAll('.card');
console.log(card);// retorna un NodeList con los card seleccionados

const noExiste = document.querySelectorAll('.no-existe');
console.log(noExiste);// NodeList arreglo vacio