import styled from "styled-components";
import tema from "../../tema";

const getBackgroundColor = (types)=>{
  return tema.colors.backgroundCard[types[0].type.name]|| "fff";
  
}
console.log(tema)
export const Container = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 440px;
  border: 1px solid red;
  background: ${({types})=>getBackgroundColor(types)};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  color: black;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const Pokemon = styled.img`
width: 193px;
height: 193px;
position: absolute;
top: -60px;
right: 0;
z-index: 2;
`
// import styled from "styled-components";

 export const Container2 = styled.div`
 width: 30vw;
 height: 29vh;
 display: flex;
 align-items: end;
 margin-left: 1vw;
 position: relative;
 background:  ${({types})=>getBackgroundColor(types)};;
 `
 export const NamePokemon = styled.p`
 font-size: 2vw;
 width: 116px;
height: 39px;
top: 40px;
left: 23px
 `
export const ImageTipo = styled.img`
//width:7vw;
//height: 4vh;
width: 91px;
height: 31px;
top: 89px;
left: 23px;
radius: 8px;
border: 1px;
padding: 5px, 8px, 5px, 8px;
gap: 17px
`
 
export const Detalhes = styled.button`
color: #ffffff;
text-decoration:underline;
background: transparent;
border: solid red 1px;
font-size: 2vw;
z-index:2;
cursor: pointer;
`
export const IdPokemon = styled.p`
 font-size: 2vw;
 `

 export const PokemonImage = styled.img`
 position: absolute;
 top: -1.5vh;
 width: 14vw;
 right: 0.4vw;
 `

 

 export const CardBox = styled.div`
  width: 29.9vw;
 height: 23vh;
 background: ${({types})=>getBackgroundColor(types)};
 border-radius: 0.6vw;
 display: flex;
 justify-content: space-between;
 `

// import styled from "styled-components";
// import tema from "../../tema";
// const getBackgroundColor = (types) => {
//   if (types.length > 0) {
//     if (types[0].type.name === "normal" && types[1]) {
//       return tema.colors.backgroundCard[types[1].type.name];
//     }
//   }
//   return tema.colors.backgroundCard[types[0].type.name] || "#ffffff";
// };
// console.log(tema);

// export const Container = styled.div`
//   width: 30vw;
//   height: 29vh;
//   display: flex;
//   align-items: end;
//   margin-left: 1vw;
//   position: relative;
// `;
// export const PokemonImage = styled.img`
//   position: absolute;
//   top: -1.5vh;
//   width: 12vw;
//   right: 0.4vw;
// `;

// export const CardBox = styled.div`
//   width: 29.9vw;
//   height: 23vh;
//   background-color: ${({ types }) => getBackgroundColor(types)};
//   border-radius: 0.6vw;
//   display: flex;
//   justify-content: space-between;
// `;

// export const InfoBox = styled.div`
//   display: flex;
//   padding: 3%;
//   flex-direction: column;
//   justify-content: space-around;
//   overflow: hidden;
//   width: 50%;
// `;

// export const BoxInfoAndType = styled.div`
//   color: #ffffff;
//   font-size: 3rem;
//   font-style: bold;
//   display: flex;
//   flex-direction: column;
//   gap: 1vh;
// `;

// export const BoxTipo = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// export const IdPokemon = styled.p`
//   font-size: 2vw;
// `;
// export const NomePokemon = styled.p`
//   font-size: 2vw;
// `;
// export const DetailButtom = styled.button`
//   color: #ffffff;
//   text-decoration: underline;
//   background: transparent;
//   border: none;
//   font-size: 2vw;
//   z-index: 2;
//   cursor: pointer;
// `;

// export const TypeImg = styled.img`
//   width: 7vw;
//   height: 4vh;
// `;

// export const CapturarButtom = styled.button`
//   position: absolute;
//   right: 0;
//   height: 4.2vh;
//   width: 7.6vw;
//   margin-bottom: 1vh;
//   margin-right: 1.3vw;
//   border-radius: 0.4vw;
//   border: none;
//   font-size: 1vw;
// `;














// export const InfoBox = styled.div
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// overflow: hidden;

// export const Box = styled.div
// color: #ffffff;
// font-size: 3rem;
// font-style: bold;
// display: flex;
// flex-direction: column;
// gap: 1vh;

// export const BoxTipo = styled.div
// display: flex;
// flex-direction: row;

 
 

 


 





// export const CapturarButton= styled.button
// position: absolute;
// right: 0;
// height: 4.2vh;
// width: 7.6vw;
// margin-bottom:2vh;
// margin-right: 2.3vw;
// border-radius:.4vw;
// border:none;
// font-size: 1vw;

