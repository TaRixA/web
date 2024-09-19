document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('baraja1-button').addEventListener('click', fetchRandomPokemonsJugador1);
});

function fetchRandomPokemonsJugador1() {
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
                updateSelectedCard(data, 'pokedex1');
            })
            .catch(error => {
                console.log(`Ocurrió un error al cargar el Pokémon: ${error.message}`);
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


const powerValues = {
    fire: 13,
    water: 8,
    electric: 8,
    rock: 13,
    plant: 21,
    steel: 8,
    grass: 34,
    bug: 34,
    dragon: 8,
    normal: 21,
    fighting: 8,
    ghost: 21,
    fairy: 8,
    ice: 21,
    fight: 8,
    psychic: 21,
    sinister: 13,
    earth: 13,
    flying: 21,
    poison: 13,
};

function updateSelectedCard(pokemonData, containerId) {
    const selectedCard = document.querySelector(`#${containerId} .pokemon-card.selected`);
    if (selectedCard) {
        
        selectedCard.innerHTML = ''; 

    
        const imgElement = document.createElement('img');
        imgElement.src = pokemonData.sprites.other['official-artwork'].front_default;
        imgElement.alt = `Imagen de ${pokemonData.name}`;
        imgElement.classList.add('pokemon-img');

    
        const types = pokemonData.types.map(typeInfo => typeInfo.type.name);
        const typesString = types.join(', ');

       
        const infoElement = document.createElement('p');
        infoElement.textContent = `Nombre: ${pokemonData.name} | Altura: ${pokemonData.height / 10} m | Peso: ${pokemonData.weight / 10} kg | Habilidad: ${typesString}`;

        selectedCard.appendChild(imgElement);
        selectedCard.appendChild(infoElement);

     
        const elementValue = getElementValue(types[0]);
        if (elementValue) {
            const resultado = calcularValor(pokemonData.height / 10, pokemonData.weight / 10, elementValue);
            const resultElement = document.createElement('p');
            resultElement.textContent = `Nivel de Poder: ${resultado}`;
            selectedCard.appendChild(resultElement);
        }
    }
}


function getElementValue(type) {
    return powerValues[type] || 1;
}


function calcularValor(altura, peso, elemento) {
    return (altura * peso * 1.68) / elemento;
    return parseFloat(resultado.toFixed(2));
}
