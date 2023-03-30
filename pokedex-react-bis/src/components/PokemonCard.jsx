
function  PokemonCard ({pokemon}) {

return(
<figure>
    
    <h1>PokemonCards</h1>
    {pokemon.imgSrc === undefined ? <p>???</p> :
    <img src={pokemon.imgSrc} alt={pokemon.name} />}
    <figcaption> {pokemon.name} </figcaption>

</figure>
);

 }

export default PokemonCard;