import PokemonCard from './components/PokemonCard'
import './App.css'

 
//the array
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];




//the function
function App() {
  let pokemon = pokemonList[0];
  return (
    <div className='App'>

    <PokemonCard pokemon={pokemon} />
      
    </div>
  )

}



export default App
