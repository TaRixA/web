document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('baraja2-button').addEventListener('click', fetchRandomPokemonsJugador2);
});

function fetchRandomPokemonsJugador2() {
    const randomIds = generateRandomIds(5); 
    randomIds.forEach(id => {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Pokémon no encontrado: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
               
                updateSelectedCard(data, 'pokedex2');
            })
            .catch(error => {
                alert(`Ocurrió un error al cargar el Pokémon: ${error.message}`);
            });
    });
}


function generateRandomIds(count) {
    const randomIds = [];
    for (let i = 0; i < count; i++) {
        const randomId = Math.floor(Math.random() * 898) + 1; 
        randomIds.push(randomId);
    }
    return randomIds;
}


function updateSelectedCard(pokemonData, containerId) {
    const selectedCard = document.querySelector(`#${containerId} .pokemon-card.selected`);
    if (selectedCard) {
       
        selectedCard.innerHTML = '';

        const imgElement = document.createElement('img');
        imgElement.src = pokemonData.sprites.other['official-artwork'].front_default;
        imgElement.alt = `Imagen de ${pokemonData.name}`;
        imgElement.classList.add('pokemon-img');

        const types = pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ');

        const infoElement = document.createElement('p');
        infoElement.textContent = `Nombre: ${pokemonData.name} | Altura: ${pokemonData.height / 10} m | Peso: ${pokemonData.weight / 10} kg | Poderes: ${types}`;

        selectedCard.appendChild(imgElement);
        selectedCard.appendChild(infoElement);
    } else {
        alert("Por favor, selecciona una tarjeta antes de cargar los Pokémon.");
    }
}
