import styled from "styled-components";

const FormStyle = styled.form`
  width: 600px;
  height: fit-content;
  background-color: #1e1e1e;
  margin:auto;
  padding: 40px 50px;
  border-radius: 15px;
  border: 1px solid #444;
  display:flex;
  flex-direction:column;
  gap:8px;
  label {
    font-size: 0.9rem;
    color: #bbbbbb;
    font-weight: 500;
    letter-spacing: 1px;
  }

  @media screen and (max-width:50.125rem){
    width:80%;
    padding: 20px 20px;
  }
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


const TextAreaStyle = styled.textarea`
  padding: 12px 15px;
  width: 100%;
  height:300px;
  resize:none;
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

const ButtonContact = styled.button`

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
  }`

export { FormStyle, InputStyled, TextAreaStyle,ButtonContact };
