import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonListPage from "../PokemonListPage/PokemonListPage"
import PokedexPage from "../PokedexPage/PokedexPage"
import PokemonDetailPage from "../PokemonDetailPage/PokemonDetailPage"
import Header from "../Header/Header"
import { useState } from "react"
export const Router = () => {

    // const [pokedex, setPokedex] = useState([]);
    // const [pokelist, setPokelist] = useState([]);

    // const addToPokedex = (pokemonToAdd) => {
    //     const isAlreadyOnPokedex = pokedex.find(
    //       (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    //     );
    
    //     if (!isAlreadyOnPokedex) {
    //       const newPokedex = [...pokedex, pokemonToAdd];
    //       setPokedex(newPokedex);
    //     }
    //     console.log(pokemonToAdd)
    //   };

    //   const removeFromPokedex = (pokemonToRemove) => {
    //     const newPokedex = pokedex.filter(
    //       (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    //     );
    
    //     setPokedex(newPokedex);
    //   };

    //  console.log(pokedex)
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<PokemonListPage />} />
                <Route path="/detail" element={<PokemonDetailPage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
            </Routes>
        </BrowserRouter>
    )
}