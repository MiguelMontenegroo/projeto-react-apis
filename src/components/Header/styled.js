import styled from "styled-components";

export const Container = styled.header`
border: 1px solid black;
height: 15vh;
display: grid;
  grid-template-columns: repeat(16, 1fr);
  background-color: white;
`
export const Imagem = styled.img`
 grid-column: 7/11; 
`

export const BotaoHome = styled.button`
 grid-column: 2/5; 
 z-index: 2;
`

export const BotaoPokedex = styled.button`
padding: 4px 10px;
grid-column: 13/16;
width: 287px;
width: 287px;
height: 74px;
left: 1112px;
top: 41px;

background: #33A4F5;
border-radius: 8px;
`
export const ButtonRemovePokemon = styled.button`
 font-size: 1rem;

 height: 50%;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.8vw;
  color: #ffffff;
  cursor: pointer;
  align-self: center;
  grid-column: 13/16;
  width: 70%;
  background: #ff6262;
  border-radius: 0.4vw;
  z-index: 2;
  
`