// 4. getElementById

// toma el valor de id="formulario"
// si existe más de uno con el mismo nombre, tomará el primero que encuentre
// esta en desuso
const formulario =  document.getElementById('formulario');
console.log(formulario);

const noExiste = document.getElementById('no-existe');
console.log(noExiste); // null

