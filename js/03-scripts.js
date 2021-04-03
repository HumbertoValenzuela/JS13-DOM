// 3. getElementsByClassName Seleccionar elementos por su clase
// puede traer uno o multiples clases con el mismo nombre

const elementos = document.getElementsByClassName('header');
console.log(elementos);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//  Si las clases existen más de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//  Si una clse no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);// no da error, esta vacío



