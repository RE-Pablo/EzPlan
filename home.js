const burgerBtn = document.getElementById('burgerBtn');
const menu = document.getElementById("menu");

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Función para controlar el menú dependiendo del tamaño de la pantalla
function controlarMenu() {
    if (window.innerWidth <= 768) {
        // Si la pantalla es menor que 768px, activa el burger menu
        burgerBtn.style.display = 'block';
    } else {
        // Si la pantalla es mayor o igual a 768px, desactiva el burger menu
        burgerBtn.style.display = 'none';
        menu.classList.remove('active');
    }
}

window.addEventListener('load', controlarMenu);
window.addEventListener('resize', controlarMenu);
