function handleImageClick() {
    // Obtener todas las imágenes pequeñas
    document.querySelectorAll('.smallImage').forEach(image => {
        image.addEventListener('click', function() {
            // Obtener la imagen grande y su src
            const largeImage = document.getElementById('largeImage');
            const largeImageSrc = largeImage.src;

            // Intercambiar el src de la imagen grande con la imagen pequeña clicada
            largeImage.src = this.src;
            this.src = largeImageSrc;
        });
    });
}

// Función para activar/desactivar el JavaScript basado en el tamaño de la pantalla
function checkScreenWidth() {
    if (window.innerWidth > 468) {
        handleImageClick(); // Activar funcionalidad si la pantalla es mayor a 768px
    }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
checkScreenWidth();
window.addEventListener('resize', function() {
    // Elimina todos los event listeners antes de volver a agregarlos si es necesario
    document.querySelectorAll('.smallImage').forEach(image => {
        const newImage = image.cloneNode(true); // Clonar la imagen para eliminar listeners previos
        image.replaceWith(newImage); // Reemplazarla en el DOM
    });

    checkScreenWidth(); // Verificar el tamaño de la pantalla nuevamente
});
