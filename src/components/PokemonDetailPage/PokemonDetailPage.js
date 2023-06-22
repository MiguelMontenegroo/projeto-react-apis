import { PageTittle } from "../../GlobalStyles";
import pokeballBackground from "../../Assets/bigPokebola.svg";
import {
  Container,
  InfosBox,
  InfosContainer,
  MovesAndInfosContainer,
  MovesBox,
  NameIdTypeBox,
  Pic1,
  Pic2,
  PicsContainer,
  PokeBallBackground,
  PokeballDetail,
  PokemonImage,
  ProgressBar,
  Stats,
  StatsContainer,
  TypesBox,}
 from "./styled";
import pokeballDetail from "../../Assets/pokeballDetailInsideBackground.svg";
import pokemonImageDetail from "../../Assets/pokemonDetailPage.svg";
import grassType from "../../Assets/grassTypeIcon.svg";
import poisonType from "../../Assets/poisonTypeIcon.svg";
import { useLocation } from "react-router-dom";

export default function PokemonDetailPage() {
   const location = useLocation()
   const pokemon = location.state.prop
   console.log(pokemon)

    const status = [45, 49, 49, 65, 65, 45];
    const moves = ["Razor Wind", "Sword Dance", "Cut", "Vine Whip"];
   let moveCount = 0
    return (
      <>
        <h1>Detalhes</h1>
        <PokeBallBackground src={pokeballBackground} alt="" />
        <Container>
          <InfosBox>
            <PokeballDetail src={pokeballDetail} alt="pokeball" />
            <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
  
            <InfosContainer>
              <PicsContainer>
                <Pic1>
                  <img src={pokemon.sprites.front_default} alt="" />
                </Pic1>
                <Pic2>
                  <img src={pokemon.sprites.back_default} alt="" />
                </Pic2>
              </PicsContainer>
              <StatsContainer>
                <h2>Base stats</h2>
                {pokemon.stats.map((stat)=>{
                    return (
                        <Stats>
                        <span>{stat.stat.name}</span>
                        <span>{stat.base_stat}</span>
                        <ProgressBar stat={stat.base_stat} ></ProgressBar>
                        </Stats>
                    )
                })}
                {/* <Stats>
                  <span>HP</span>
                  <span>{status[0]}</span>
                  <ProgressBar stat={status[0]}></ProgressBar>
                </Stats>
                <Stats>
                  <span>Attack</span>
                  <span>{status[1]}</span>
                  <ProgressBar stat={status[1]}></ProgressBar>
                </Stats>
                <Stats>
                  <span>Defense</span>
                  <span>{status[2]}</span>
                  <ProgressBar stat={status[2]}></ProgressBar>
                </Stats>
                <Stats>
                  <span>Sp. Atk</span>
                  <span>{status[3]}</span>
                  <ProgressBar stat={status[3]}></ProgressBar>
                </Stats>
                <Stats>
                  <span>Sp. Def</span>
                  <span>{status[4]}</span>
                  <ProgressBar stat={status[4]}></ProgressBar>
                </Stats>
                <Stats>
                  <span>Speed</span>
                  <span>{status[5]}</span>
                  <ProgressBar stat={status[5]}></ProgressBar>
                </Stats>
                <Stats>
                  <p>Total</p>
                  <span>318</span>
                </Stats> */}
              </StatsContainer>
              <MovesAndInfosContainer>
                <NameIdTypeBox>
                  <p>{pokemon.id}</p>
                  <p>{pokemon.name}</p>
                  <TypesBox>
                    <img src={grassType} alt="" />
                    <img src={poisonType} alt="" />
                  </TypesBox>
                </NameIdTypeBox>
                <MovesBox>
                  <h2>Moves:</h2>
                  {pokemon.moves.map((move) => {
                  if(moveCount< 6){
                    moveCount+= 1
                    return <p>{move.move.name}</p>;
                  }
                })}
                </MovesBox>
              </MovesAndInfosContainer>
            </InfosContainer>
          </InfosBox>
        </Container>
      </>
    );
  }
  
  
  
  