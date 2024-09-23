function verificarJugadoresListos() {
    if (jugador1Listo && jugador2Listo) {
        compararPokemon();
    }
}

function compararPokemon() {
    const pokedex1 = document.querySelectorAll('#pokedex1 .pokemon-card');
    const pokedex2 = document.querySelectorAll('#pokedex2 .pokemon-card');

    let poderMaxJugador1 = 0;
    let pokemonGanadorJugador1 = '';
    pokedex1.forEach(card => {
        const poder = parseInt(card.getAttribute('data-power'));
        if (poder > poderMaxJugador1) {
            poderMaxJugador1 = poder;
            pokemonGanadorJugador1 = card.getAttribute('data-name');
        }
    });

    let poderMaxJugador2 = 0;
    let pokemonGanadorJugador2 = '';
    pokedex2.forEach(card => {
        const poder = parseInt(card.getAttribute('data-power'));
        if (poder > poderMaxJugador2) {
            poderMaxJugador2 = poder;
            pokemonGanadorJugador2 = card.getAttribute('data-name');
        }
    });

    const resultadoDiv = document.getElementById('resultado-comparacion');
    if (poderMaxJugador1 > poderMaxJugador2) {
        resultadoDiv.innerHTML = `El ganador es el Jugador 1 con ${pokemonGanadorJugador1} (Poder: ${poderMaxJugador1})`;
    } else if (poderMaxJugador2 > poderMaxJugador1) {
        resultadoDiv.innerHTML = `El ganador es el Jugador 2 con ${pokemonGanadorJugador2} (Poder: ${poderMaxJugador2})`;
    } else {
        resultadoDiv.innerHTML = 'Es un empate';
    }
}

function compararPokemon2() {
    const pokedex1 = document.querySelectorAll('#pokedex1 .pokemon-card');
    const pokedex2 = document.querySelectorAll('#pokedex2 .pokemon-card');




    const tiposPokemon = {
        steel: { ganaContra: ['fairy', 'ice', 'rock'], pierdeContra: ['fire', 'fighting', 'ground'], inmune: ['poison'] },
        water: { ganaContra: ['fire', 'rock', 'ground'], pierdeContra: ['electric', 'grass'], inmune: [] },
        bug: { ganaContra: ['grass', 'psychic', 'dark'], pierdeContra: ['fire', 'flying', 'rock'], inmune: [] },
        dragon: { ganaContra: ['dragon'], pierdeContra: ['fairy', 'ice'], inmune: [] },
        electric: { ganaContra: ['water', 'flying'], pierdeContra: ['ground'], inmune: [] },
        ghost: { ganaContra: ['ghost', 'psychic'], pierdeContra: ['dark'], inmune: ['normal', 'fighting'] },
        fire: { ganaContra: ['bug', 'grass', 'ice', 'steel'], pierdeContra: ['water', 'rock', 'ground'], inmune: [] },
        fairy: { ganaContra: ['dragon', 'fighting', 'dark'], pierdeContra: ['steel', 'poison'], inmune: ['dragon'] },
        ice: { ganaContra: ['dragon', 'grass', 'ground', 'flying'], pierdeContra: ['fire', 'rock', 'steel', 'fighting'], inmune: [] },
        fighting: { ganaContra: ['normal', 'ice', 'rock', 'dark', 'steel'], pierdeContra: ['flying', 'psychic', 'fairy'], inmune: ['ghost'] },
        normal: { ganaContra: [], pierdeContra: ['fighting'], inmune: ['ghost'] },
        grass: { ganaContra: ['water', 'ground', 'rock'], pierdeContra: ['fire', 'bug', 'poison', 'flying'], inmune: [] },
        psychic: { ganaContra: ['fighting', 'poison'], pierdeContra: ['bug', 'ghost', 'dark'], inmune: [] },
        rock: { ganaContra: ['fire', 'ice', 'flying', 'bug'], pierdeContra: ['water', 'grass', 'ground', 'fighting', 'steel'], inmune: [] },
        dark: { ganaContra: ['psychic', 'ghost'], pierdeContra: ['fighting', 'bug', 'fairy'], inmune: ['psychic'] },
        ground: { ganaContra: ['fire', 'electric', 'poison', 'rock', 'steel'], pierdeContra: ['water', 'ice', 'grass'], inmune: ['electric'] },
        poison: { ganaContra: ['grass', 'fairy'], pierdeContra: ['psychic', 'ground'], inmune: [] },
        flying: { ganaContra: ['grass', 'fighting', 'bug'], pierdeContra: ['electric', 'ice', 'rock'], inmune: ['ground'] }
    };
    
    function ganador(jugador1, jugador2) {
        if (tiposPokemon[jugador1].ganaContra.includes(jugador2) && tiposPokemon[jugador2].ganaContra.includes(jugador1)
        ){return "Empate. Ambos Pokémon tienen igual fortaleza.";}
        else if (tiposPokemon[jugador1].inmune.includes(jugador2)) {
            return `${jugador1} es inmune a ${jugador2}. ${jugador1} gana.`;
        } else if (tiposPokemon[jugador2].inmune.includes(jugador1)) {
            return `${jugador2} es inmune a ${jugador1}. ${jugador2} gana.`;
        } else if (tiposPokemon[jugador1].ganaContra.includes(jugador2)) {
            return `${jugador1} es eficaz contra ${jugador2}. ${jugador1} gana.`;
        } else if (tiposPokemon[jugador2].ganaContra.includes(jugador1)) {
            return `${jugador2} es eficaz contra ${jugador1}. ${jugador2} gana.`;
        } else {
            return "Empate. Ambos Pokémon tienen igual fortaleza.";
        }
    }
    
    

}
