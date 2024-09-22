import {
    ButtonStyled,
    Trainer,
    UserContainer,
    UserFormat,
    UserInformation,
    UserInformationText,
    UserSprite,
    UserSpriteInformation,
  } from "./styles";
  
  import trainer from "../../../../assets/img/trainer.png";
  
  const UserLogged = ({ user, onLogout }) => {
    return (
      <UserContainer>
        <UserFormat>
          <UserInformationText>
            <Trainer>TRAINER CARD</Trainer>
            <UserInformation>Name: {user.username}</UserInformation>
            <UserInformation>Money: {user.money}</UserInformation>
            <UserInformation>Pokédex: {user.pokedex}</UserInformation>
            <UserInformation>Started: {user.startDate}</UserInformation>
          </UserInformationText>
          <UserSpriteInformation>
            <p>USER ID: {user.id}</p>
            <UserSprite src={trainer} alt="Trainer Sprite" />
          </UserSpriteInformation>
        </UserFormat>
        <ButtonStyled onClick={onLogout}>Logout</ButtonStyled>
      </UserContainer>
    );
  };
  
  export default UserLogged;
