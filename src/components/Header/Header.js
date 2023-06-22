import { Container, BotaoPokedex, ButtonRemovePokemon, Imagem , BotaoHome} from "./styled"
import logo from "../../Assets/LogoPokemon.svg"
import { useLocation, useNavigate } from "react-router-dom"
import { goToHome, goToPokedex } from "../routes/cordinator"
import { useContext } from "react"
import { globalContext } from "../contexts/GlobalContexts"

function Header() {
const navigate = useNavigate()

const {pokedex, removeFromPokedex, addToPokedex} = useContext(globalContext)
const location = useLocation()






    return <>
    <Container>
        {location.pathname !== "/" && (
    <BotaoHome onClick={()=>{goToHome(navigate)}}>Todos Pokemons</BotaoHome>)}
    <Imagem src={logo}  alt="Logo do pokemon"/>
    {location.pathname === "/" && (
    <BotaoPokedex onClick={()=>{goToPokedex(navigate)}}>Pokedex</BotaoPokedex>)}
    {location.pathname.includes("/detail") && (
     
       pokedex.find((pokemon)=> pokemon.id === location.state.prop.id)?  <ButtonRemovePokemon
       onClick={() => removeFromPokedex(location.state.prop)}
       
     >
       Excluir da Pokédex
     </ButtonRemovePokemon> : <ButtonRemovePokemon onClick={() => addToPokedex(location.state.prop)}>Adicionar</ButtonRemovePokemon>
       
      
      )}
    </Container>
    </>
}

export default Header