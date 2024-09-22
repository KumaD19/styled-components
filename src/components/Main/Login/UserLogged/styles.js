import styled from "styled-components";

const UserContainer = styled.div`
  width: 700px;
  background-color: #1e1e1e;
  padding: 40px 50px;
  border-radius: 15px;
  border: 1px solid #444;
  @media screen and (max-width: 50.125rem) {
    padding: 20px;
    width: 100%;
  }
`;

const ButtonStyled = styled.button`
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: #6c79db;
  color: #ffffff;
  transition: all 0.3s ease;
  margin-top: 20px;
  letter-spacing: 1px;

  &:hover {
    box-shadow: 0 0 15px rgba(108, 121, 219, 0.5);
  }

  @media screen and (max-width: 50.125rem) {
    margin: 20px auto 0;
    display: block;
  }
`;

const UserInformation = styled.p`
  background-color: #2c2c2c;
  margin-bottom: 15px;
  padding: 12px 15px;
  border-radius: 5px;
  color: #f0f0f0;
  font-size: 1rem;
`;

const UserFormat = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 50.125rem) {
    flex-direction: column;
  }
`;

const UserSprite = styled.img`
  width: 150px;
  height: 150px;
  background-color: #2c2c2c;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid #6c79db;
  margin-top: 30px;
`;

const UserInformationText = styled.div`
  width: 100%;
`;

const Trainer = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #f0f0f0;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const UserSpriteInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 0.9rem;
    color: #f0f0f0;
    letter-spacing: 1px;
  }
`;

export {
  UserContainer,
  ButtonStyled,
  UserInformation,
  UserFormat,
  UserSprite,
  UserInformationText,
  UserSpriteInformation,
  Trainer
};
