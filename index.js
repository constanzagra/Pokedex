const pokeURL = "https://pokeapi.co/api/v2/pokemon";
let pokemon;
const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};
const input = document.querySelector("#poke-number-input");

const getPokemons = async () => {
    const pokeID = input.value;
    try{
        const res = await axios.get(`${pokeURL}/${pokeID}`)
        return pokemon = res.data;
    }
    catch(err){
        handleError();
    }
};
const displayPokemon = async () => {
    let pokemon = await getPokemons();
    let pokeSprites = pokemon.sprites.front_default;
    const pokeBox = document.querySelector("#pokeBox");
    let pokeImg = document.querySelector("#pokeImg");
    pokeImg.setAttribute("src", pokeSprites);
    pokeImg.classList.add("pokeImg")

    let pokeName = document.querySelector("#pokeName");
    pokeName.innerHTML = `${pokemon.id} - ${pokemon.name}`
    pokeName.classList.add("pokeName");

    let pokeType = document.querySelector("#pokeType");
    let type = pokemon.types;
    pokeType.innerHTML = type[0].type.name;
    input.value = "";
};
const goButton = document.querySelector("#go-button");
goButton.addEventListener("click", displayPokemon);

const randomize = () => {
    input.value = Math.floor(Math.random() * 800);
    displayPokemon();
}
const randomButton = document.querySelector("#random-button");
randomButton.addEventListener("click", randomize)
