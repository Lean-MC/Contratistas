       // Mostrar el contenedor de filtros al hacer clic en el botón de filtrar
       document.getElementById('filter-btn').addEventListener('click', function() {
        document.getElementById('filter-container').style.display = 'block';
        this.style.display = 'none'; // Ocultar el botón de filtrar
    });
    
    // Aplicar el filtro y ocultar el contenedor de filtros
    document.getElementById('apply-filter-btn').addEventListener('click', function() {
        var specialistFilterValue = document.getElementById('specialist-filter').value;
        var zoneFilterValue = document.getElementById('zone-filter').value;
        var cards = document.querySelectorAll('.card');
    
        cards.forEach(function(card) {
            var matchesSpecialist = (specialistFilterValue === 'all' || card.classList.contains(specialistFilterValue));
            var matchesZone = (zoneFilterValue === 'all' || card.classList.contains(zoneFilterValue));
    
            if (matchesSpecialist && matchesZone) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    
        document.getElementById('filter-container').style.display = 'none'; // Ocultar el contenedor de filtros
        document.getElementById('filter-btn').style.display = 'block'; // Mostrar el botón de filtrar
    });
    
    // Cerrar el contenedor de filtros al hacer clic en el botón de cierre
    document.getElementById('close-filter-btn').addEventListener('click', function() {
        document.getElementById('filter-container').style.display = 'none'; // Ocultar el contenedor de filtros
        document.getElementById('filter-btn').style.display = 'block'; // Mostrar el botón de filtrar
    });
