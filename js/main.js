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
                let pokeImg = value.sprites.front_default;
                pokeImage(pokeImg)
                console.log(pokeImg)
                //nombrePokemon(value);
            }
        });
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    document.getElementById("nombrePoke").innerHTML = url;
    // var btn = document.createElement("P");
    // nombrePoke.
    //btn.innerHTML= nombrePoke
    // nombrePoke.innerHTML(url)
    pokePhoto.src = url;
}
function nombrePokemon(value) {
    console.log(value);
}
