import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import {Container,PokemonNumber,PokemonName,PokemonType,TypesContainer,Pokeball,CatchButton,Pokemon } from "./styled"
import PokemonCard from "../PokemonCard/PokemonCard"
import { api } from "../api"
import  { globalContext } from "../contexts/GlobalContexts"
function PokemonListPage() {

  const {pokedex} = useContext(globalContext)
const [pokemons, setPokemons] = useState([])

useEffect(() => {
    api.get("/pokemon").then((res) => {
      const results = res.data.results;
      console.log(results);
      const promise = results.map((result) => api.get(result.url));
      Promise.all(promise).then((responses) => {
        const pokemonData = responses.map((res) => res.data);
        console.log(pokemonData);
        setPokemons(pokemonData)
      });
    });
  }, []);

 
    return <>
   <Container>
      
        {pokemons.filter((pokemon)=>{
         return pokedex.includes(pokemon)? false : true
        })
        .map((pokemon)=> (
       
    <PokemonCard name={pokemon.name}
    
    types={pokemon.types}
    pokemon={pokemon}
    id={pokemon.id}
     image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}></PokemonCard>
       
        ))}
      
    </Container></>
}

export default PokemonListPage