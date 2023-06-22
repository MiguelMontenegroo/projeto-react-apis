import { useNavigate } from "react-router-dom"
import { goToDetail } from "../routes/cordinator"
import {Container2,PokemonNumber,PokemonName,PokemonType,TypesContainer,Pokeball,CatchButton,Pokemon, NamePokemon, ImageTipo, Detalhes, IdPokemon, PokemonImage, CardBox } from "./styled"
import pokemonTypes from "../../pokemonTypes"
import { useContext, useEffect, useState } from "react"
import { globalContext } from "../contexts/GlobalContexts"
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import tema from "../../tema";
import pokebola from "../../Assets/pokebola.svg"
import { useLocation} from "react-router-dom";

function PokemonCard({name, image, id, types, pokemon}) {
  
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const [isPokedex, setIsPokedex] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)

const {pokedex, addToPokedex, removeFromPokedex} = useContext(globalContext)

const getBackgroundColor = (types) => {
  if (types.length > 0) {
    if (types[0].type.name === "normal" && types[1]) {
      return tema.colors.backgroundCard[types[1].type.name];
    }
  }
  return tema.colors.backgroundCard[types[0].type.name] || "#ffffff";
};

const location = useLocation()

const onCloseModal = () => {
  onClose();
  if (location.pathname === "/pokedex") {
    removeFromPokedex(id);
  }
};

useEffect(()=>{
  pokedex.map((pokemon)=>{
    if(pokemon.name === name){
      setIsPokedex(true)
    }
  })
} ,[])
  
const navigate = useNavigate()
console.log(pokemon)

    return (
     <><Flex
        h={"16.438rem"}
        w={"27.5rem"}
        alignItems={"flex-end"}
        position={"relative"}
      >
        <Image
          h="12.063rem"
          w="12.063rem"
          src={image}
          alt=""
          zIndex={1}
          position={"absolute"}
          top={0}
          right={0}
        />
        <Box
          color={"white"}
          position={"relative"}
          h={"13.125rem"}
          w={"27.5rem"}
          
          backgroundColor={tema.colors.backgroundCard[types[0].type.name]}
          borderRadius={"0.75rem"}
        >
          {/* <DivInfo>  */}
          {/* <Info> */}
          <Text
            fontSize={"1rem"}
            fontFamily={"Inter"}
            position={"absolute"}
            top={"1.563rem"}
            left={"1.438rem"}
          >
            # {id}
          </Text>
          <Text
            fontSize={"2rem"}
            fontFamily={"Inter"}
            position={"absolute"}
            top={"2.5rem"}
            left={"1.438rem"}
          >
            {name}
            </Text>
          <Flex position={"absolute"} left={"1.438rem"} top={"5.563rem"}>
            {types.map((type) => (
              <Image
                key={type.type.name}
                src={pokemonTypes[type.type.name]}
                alt={type.type.name}
              />
            ))}
	        </Flex>
          <Button
            fontWeight={700}
            position={"absolute"}
            left={"1.438rem"}
            bottom={"1.25rem"}
            bgColor={"transparent"}
            color={"white"}
            border={"none"}
            _hover={"none"}
            _active={"none"}
            zIndex={2}
            onClick={() => {
              goToDetail(navigate, pokemon);
            }}
          >
            <u>Detalhes</u>
          </Button>
          <Image
            position={"absolute"}
            top={0}
            right={0}
            src={pokebola}
            alt=""
          />
          {!isPokedex && (
          <Button
            w={"9.125rem"}
            h={"2.375rem"}
            fontWeight={400}
            position={"absolute"}
            right={"1.375rem"}
            bottom={"1.25rem"}
            fontSize={"1rem"}
            fontFamily={"Poppins"}
            onClick={() => {
              addToPokedex(pokemon);
               setOverlay(<OverlayTwo />);
               onOpen();
            }}
          >
            Capturar
          </Button>
        )}
        {location.pathname === "/pokedex" && (
          <Button
            w={"9.125rem"}
            h={"2.375rem"}
            fontWeight={400}
            position={"absolute"}
            right={"1.375rem"}
            bottom={"1.25rem"}
            fontSize={"1rem"}
            fontFamily={"Poppins"}
            onClick={() => {removeFromPokedex(pokemon)
               setOverlay(<OverlayTwo />);
               onOpen();
            }}
          >
            Excluir
          </Button>
        )}
        </Box>
      </Flex>

      {<Modal isCentered isOpen={isOpen} onClose={onCloseModal}>
        {overlay}
        <ModalContent>
          <ModalHeader>{location.pathname === "/"
                ? "Gotcha"
                : "Oh, no"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
            <Text>
              {location.pathname === "/"
                ? "O Pokémon foi adicionado a sua Pokédex"
                : "O Pokémon foi removido da sua Pokédex"}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> }
      </> 
//     <Container2 types={types}>
//     <NamePokemon>{name}</NamePokemon>
//     <IdPokemon>{id}</IdPokemon>
//    <Detalhes onClick={()=>{goToDetail(navigate, pokemon)}}>Detalhes</Detalhes>
//    {types.map((type)=>(
//      <ImageTipo
//      key={type.type.name}
//      src={pokemonTypes[type.type.name]}
//      alt={type.type.name}
//      />
//    ))}
//     {isPokedex === false ? <button onClick={() => addToPokedex(pokemon)}>Capturar</button> :
//      <button onClick={() => removeFromPokedex(pokemon)}>Remover</button>}
   
//     <PokemonImage src={image}/>
//     </Container2>
// )
// }
    )}

export default PokemonCard

// import React from 'react'
// import { Container, CardBox, InfoBox, Box, BoxTipo, ImageTipo, Detalhes, PokemonImage,CapturarButton, IdPokemon, NamePokemon } from './pokemonCardStyle'
// import pokebola from "../../assets/pokebola.svg"
// import TipoBug from "../../assets/TipoBug.svg"
// import TipoPoison from "../../assets/TipoPoison.svg"
// import Pokemon from "../../assets/Beedrill.svg"
// import { useNavigate } from 'react-router-dom'
// import { goToDetail } from '../Routes/cordinator'


// export default function PokemonCard() {
//     const navigate = useNavigate()
//     return (
//         <Container>
//             <PokemonImage src={Pokemon} alt="" />
//             <CardBox>
//                 <InfoBox>
//                     <Box>
//                         <IdPokemon>ID</IdPokemon>
//                         <NamePokemon>Nome</NamePokemon>
//                         <BoxTipo>
//                             <ImageTipo src={TipoBug} alt="" />
//                             <ImageTipo src={TipoPoison} alt="" />
//                         </BoxTipo>

//                     </Box>
//                     <Detalhes onClick={()=>{goToDetail(navigate)}}>Detalhes</Detalhes>

//                 </InfoBox>
//                 <img src={pokebola} alt="" />
//             </CardBox>

//             <CapturarButton>Capturar</CapturarButton>
//         </Container>
//     )
// }