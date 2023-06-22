import { useContext } from "react"
import PokemonCard from "../PokemonCard/PokemonCard"
import { globalContext } from "../contexts/GlobalContexts"

function PokedexPage() {

    const {pokedex} = useContext(globalContext)



    return <>
    {pokedex.map((pokemon)=>{
     return <PokemonCard 
     name={pokemon.name}
     types={pokemon.types}
     pokemon={pokemon}
     id={pokemon.id}
      image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}></PokemonCard>
     
    })}
    </>
}


export default PokedexPage