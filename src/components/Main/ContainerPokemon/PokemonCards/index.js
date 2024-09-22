import { CardImg, CardStyled, CardTitle, TypeList, CardTitleSpan, MoveList,MoveContainer,PokeCardTypes, CardTitleSpanHp } from "./styles";

const PokemonCards = ({ name, type, sprite, hp, moves }) => {
    return (
      <CardStyled>
        <CardTitle>
            <CardTitleSpan>{name.toUpperCase()}</CardTitleSpan>
            <CardTitleSpanHp>HP: {hp}</CardTitleSpanHp>
        </CardTitle>
        <CardImg src={sprite} alt={`${name} sprite`} />
        <TypeList>
          {type.map((t, index) => (
            <PokeCardTypes key={index} color={t}>{t}</PokeCardTypes> // Display each type as a list item
          ))}
        </TypeList>
        <MoveContainer>
            <p>Moves:</p>
            <MoveList>
            {moves.map((move, index) => (
                <li key={index}>{move}</li> // Display each move as a list item
            ))}
            </MoveList>
        </MoveContainer>
      </CardStyled>
    );
  };
  
  export default PokemonCards;