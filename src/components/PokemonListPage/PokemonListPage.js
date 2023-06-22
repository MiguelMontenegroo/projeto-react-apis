import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import {Container,PokemonNumber,PokemonName,PokemonType,TypesContainer,Pokeball,CatchButton,Pokemon } from "./styled"
import PokemonCard from "../PokemonCard/PokemonCard"
import { api } from "../api"
import  { globalContext } from "../contexts/GlobalContexts"
import { Button, Flex} from "@chakra-ui/react"
import pokebolagif from "../../Assets/pokebolagif.gif"

function PokemonListPage() {
  const [loading, setLoading] = useState(true)
  const {pokedex} = useContext(globalContext)
  const [pokemons, setPokemons] = useState([]) 
  const [page, setPage] = useState(0)
  const [anterior, setAnterior]= useState(true)
  const [proximo, setProximo]= useState(true)

useEffect(() => {
    api.get("/pokemon", {
      params: {
        limit: 30,
        offset: page*30
      },
    }).then((res) => {
      setAnterior(res.data.previous)
      setProximo(res.data.next)
      const results = res.data.results;
      console.log(results);
      const promise = results.map((result) => api.get(result.url));
      Promise.all(promise).then((responses) => {
        const pokemonData = responses.map((res) => res.data);
        console.log(pokemonData);
        
        setTimeout(()=> {
          setPokemons(pokemonData)
          setLoading(false)
        }, 2000)
        
      });
    });
  }, [page]);

 
  if (loading) {
    return (
      <>
        <img src={pokebolagif} alt="pokebola" />
      </>
    );
  }

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
      
    </Container>
    <Flex>
    <Button hidden={!anterior}  onClick={()=>setPage(page-1)}>Anterior</Button>
        <Button disabled={!proximo} onClick={()=>setPage(page+1)}>Proximo</Button>
    </Flex>
    </>
}

export default PokemonListPage