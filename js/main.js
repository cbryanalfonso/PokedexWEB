const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("inputSearch");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
        .then((value) => {
            if (value.status != "200") {
                console.log("Error -> ", res);
            } else {
                return value.json()
            }
        }

        )
        .then((value) => {
            if (value) {
                console.log(value)
                //let pokeImg = value.sprites.front_default;
                pokeImage(value)
                console.log(value)
                //nombrePokemon(value);
            }
        });
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    document.getElementById("nombrePoke").innerHTML = url.forms[0].name;
    document.getElementById("att").innerHTML= url.stats[1].base_stat;
    document.getElementById("def").innerHTML = url.stats[2].base_stat;
    document.getElementById("tipo").innerHTML = url.types[0].type.name
    // var btn = document.createElement("P");
    // nombrePoke.
    //btn.innerHTML= nombrePoke
    // nombrePoke.innerHTML(url)
    pokePhoto.src = url.sprites.front_default;

}
function nombrePokemon(value) {
    console.log(value);
}
