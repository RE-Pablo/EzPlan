// MENU DE HAMBURGESA

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

// API GOOGLE MAPS
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: position.coords.latitude, lng: position.coords.longitude}, // Ubicación del usuario
                zoom: 12
            });
            var input = document.getElementById('ubicacion');
            var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.bindTo('bounds', map);
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        handleLocationError(false, map.getCenter());
    }
}
function handleLocationError(browserHasGeolocation, pos) {
    // Manejar errores de geolocalización
    // Por ejemplo, centrar en una ubicación predeterminada si la geolocalización no está disponible
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 19.4326, lng: -99.1332}, // Centro de la Ciudad de México
        zoom: 12
    });
    var input = document.getElementById('ubicacion');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
}
