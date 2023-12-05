async function pokedex() {
    let get = await fetch ("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    let pokemon = await get.json();
    let obj = {
        name:  pokemon.name,
        base_experience: pokemon.base_experience,
        abilities: pokemon.abilities
    }
    if (obj.is_hidden === false) {
        
    }

    console.log(obj.abilities);
}
pokedex()

