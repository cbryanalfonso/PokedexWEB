let arregloAbilities = [];
let arregloMovimientos = []
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
                console.log(value.abilities)
                //nombrePokemon(value);
               /*  arregloAbilities.push(value.abilities.length) */
                const arregoHabilidades = (value.abilities)
                arregoHabilidades.map((i)=>{
                   // console.log(i.ability.name);
                    arregloAbilities.push(i.ability.name)
                    arregloAbilities.join('<br>')
                })
                const arregloMoves = (value.moves)
                arregloMoves.map((i)=>{
                    arregloMovimientos.push(i.move.name)
                    console.log(i.move.name);
                })
                 console.log("Las habilidades" + arregloAbilities);
                 habilidadesPokemon(arregloAbilities)
            }
        });
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    document.getElementById("nombrePoke").innerHTML = url.forms[0].name;
    document.getElementById("att").innerHTML= url.stats[1].base_stat;
    document.getElementById("def").innerHTML = url.stats[2].base_stat;
    document.getElementById("tipo").innerHTML = url.types[0].type.name
    //document.getElementById("pokeImgModal").innerHTML = url.sprites.front_default;
    const pokePhotoModal = document.getElementById("pokeImgModal");
    // var btn = document.createElement("P");
    // nombrePoke.
    //btn.innerHTML= nombrePoke
    // nombrePoke.innerHTML(url)
    pokePhoto.src = url.sprites.front_default;
    pokePhotoModal.src = url.sprites.front_default; 

}
function habilidadesPokemon(value) {
    console.log("Funcion nueva ...",arregloAbilities);
    document.getElementById("abilityPoke").innerHTML = arregloAbilities 
    document.getElementById("movePoke").innerHTML = arregloMovimientos
}
