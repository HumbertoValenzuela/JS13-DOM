// 7. Modificar Textos o Imagenes con JS

// Modificar el encabezado con código JavaScript
// acceder al texto de <h1> con JavaScript
//Existen 3 formas de acceder

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Solo trae el Texto, pero si tiene css visibility:hidden
// este no se mostrará
console.log(encabezado.innerText);
//Trae el contenido junto con los retorno de carros. visibility:hidden en textContent lo muestra
console.log(encabezado.textContent);
// Trae el contenido junto con elementos HTML
console.log(encabezado.innerHTML);

// Chaining o encadenamiento
// queremos acceder con encadenamiento o chaining
const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);

const encabezado3 = document.querySelector('.contenido-hero h1').innerText;
console.log(encabezado3);

const encabezado4 = document.querySelector('.contenido-hero h1').innerHTML;
console.log(encabezado4);


// Modificar el texto con JavaScript
document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

// Modificar una imagen con JavaScript
const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';