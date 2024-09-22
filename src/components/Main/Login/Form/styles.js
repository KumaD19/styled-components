import styled from "styled-components";

const FormContainer = styled.div`
  width: 320px;
  background-color: #1e1e1e;
  padding: 40px 50px;
  border-radius: 15px;
  border: 1px solid #444;
`;

const PStyled = styled.p`
  margin: 0 auto 30px;
  width: fit-content;
  font-size: 1.4rem;
  font-weight: bold;
  color: #f0f0f0;
  letter-spacing: 2px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const InputStyled = styled.input`
  padding: 12px 15px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #2c2c2c;
  color: #f0f0f0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffcb05;
  }

  &::placeholder {
    color: #888888;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  label {
    font-size: 0.9rem;
    color: #bbbbbb;
    font-weight: 500;
    letter-spacing: 1px;
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
  letter-spacing: 1px;

  &:hover {
    box-shadow: 0 0 15px rgba(108, 121, 219, 0.5);
  }
`;

export {
  FormStyled,
  InputStyled,
  InputContainer,
  ButtonStyled,
  FormContainer,
  PStyled,
};
