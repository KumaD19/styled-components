import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3e3e3e;
  border-radius: 15px;
  padding: 10px;
  transition: transform 0.3s ease;
  width:100%;
  margin: 20px auto;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const CardImg = styled.img`
  border-radius: 100vh;
  border: solid 4px #ffcb05;
  margin-bottom: 15px;
  background-color: #efefef;
  
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  align-items:center;
 
  
 
  color: #000;
`;

const TypeList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  padding: 0;
  margin-bottom: 15px;
`;

const TypeItem = styled.li`
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9em;
`;

const MoveList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const MoveItem = styled.li`
  background-color: #e0e0e0;
  margin-bottom: 5px;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9em;
`;

const CardTitleSpan = styled.span`
  font-weight: 400;
  font-size:clamp(1rem,2.5vw,1.1rem) ;
  color: #eee;
  letter-spacing:1px;
`;

const CardTitleSpanHp = styled.span`
font-size:clamp(0.8rem,2.5vw,1rem) ;
color:#d3d0d0;

`

const MoveContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
    p{
        font-weight:bold;
    }

`;

const MoveTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  color: #3d7dca;
`;




const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC"
  };

  const PokeCardTypes = styled.li`
  background-color: ${({ color }) => typeColors[color]};
  color: ${({ color }) => ['normal', 'electric'].includes(color) ? '#000' : '#fff'};
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9em;
  width:70px;
  text-align:center;
`;
export {
  CardStyled,
  CardImg,
  CardTitle,
  TypeList,
  TypeItem,
  MoveList,
  MoveItem,
  CardTitleSpan,
  CardTitleSpanHp,
  MoveContainer,
  MoveTitle,
  PokeCardTypes
};