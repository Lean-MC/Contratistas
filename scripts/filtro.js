// Filtro de tarjetas
document.getElementById('specialist-filter').addEventListener('change', function() {
    var filterValue = this.value;
    var cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        if (filterValue === 'all' || card.classList.contains(filterValue)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});
