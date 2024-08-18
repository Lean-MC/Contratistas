// Cargar el archivo nav.html desde la carpeta pageside
fetch('/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading navigation:', error));

// Cargar el archivo footer.html desde la carpeta pageside
fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));