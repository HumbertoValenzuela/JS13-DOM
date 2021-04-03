// 10. Eliminar elementos en el DOM

// Eliminar un elemento por si mismo
const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
primerEnlace.remove(); // quita Vender

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
// se recomienda colocar .children para saber que hijo seleccionar
console.log(navegacion.children);
console.log(navegacion.children[0]);//está se eliminará ayuda
navegacion.removeChild(navegacion.children[0]);//elimina enlace ayuda
