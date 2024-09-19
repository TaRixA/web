document.addEventListener('DOMContentLoaded', function() {

    createPokedex('pokedex1', 'Jugador 1');
    createPokedex('pokedex2', 'Jugador 2');
});

function createPokedex(containerId, player) {
    const pokedexContainer = document.getElementById(containerId);


    for (let i = 0; i < 5; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('pokemon-card');
        cardElement.textContent = 'Pokedex';
        cardElement.setAttribute('data-index', i); 
        cardElement.addEventListener('click', function() {
            elegirCarta(cardElement, containerId);
        });
        pokedexContainer.appendChild(cardElement);
    }
}

function elegirCarta(cardElement, containerId) {

    const cards = document.querySelectorAll(`#${containerId} .pokemon-card`);
    cards.forEach(card => card.classList.remove('selected'));


    cardElement.classList.add('selected');


    if (containerId === 'pokedex1') {
        document.getElementById('baraja1-button').disabled = false;
    } else {
        document.getElementById('baraja2-button').disabled = false;
    }
}