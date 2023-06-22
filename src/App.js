import logo from './logo.svg';
import PokemonDetailPage from './components/PokemonDetailPage/PokemonDetailPage';
import PokedexPage from './components/PokedexPage/PokedexPage';
import PokemonListPage from './components/PokemonListPage/PokemonListPage';
import Header from './components/Header/Header';
import GlobalStyles from './GlobalStyles';
import { Router } from './components/routes/router';
import GlobalContextProvider from './components/contexts/GlobalContexts';
import { CSSReset, ChakraProvider, extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#5E5E5E",
      },
    },
  },
});



function App() {


  return (
    <GlobalContextProvider>
    <ChakraProvider theme={theme}>
    <CSSReset m="0" p="0" boxSizing="border-box" />
    <GlobalStyles/>
    <Router/>
    </ChakraProvider>
    </GlobalContextProvider>
    
  );
}

export default App;
