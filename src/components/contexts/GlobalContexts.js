import { createContext, useState } from "react";
//1. criar o contexto Global
export const globalContext = createContext()

const GlobalContextProvider = ({children}) => {
    const [pokedex, setPokedex] = useState([]);
    const [pokelist, setPokelist] = useState([]);

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );
    
        if (!isAlreadyOnPokedex) {
          const newPokedex = [...pokedex, pokemonToAdd];
          setPokedex(newPokedex);
        }
        console.log(pokemonToAdd)
      };

      const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
          (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );
    
        setPokedex(newPokedex);
      };

      return(
        <globalContext.Provider 
        value={{pokedex, pokelist, addToPokedex, removeFromPokedex, setPokedex, setPokelist}}>
            {children}
        </globalContext.Provider>
      )

}

export default GlobalContextProvider