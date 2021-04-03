// 12. Un Ejemplo más avanzado de lo que podemos hacer con JS

// referencía hacia ese elemento del HTML
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    console.log('diste click')
    // contains: verifica que un elemento tiene o no una clase
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        // this.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        // this.classList.add('activo');arrowfunction no funciona. verificar primero
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'Cerrar';
    }
    
    console.log(footer.classList);
});