import { useState } from "react";
import {
  ButtonStyled,
  FormContainer,
  FormStyled,
  InputContainer,
  InputStyled,
  PStyled,
} from "./styles";

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <FormContainer>
    <PStyled>POKELAB LOGIN</PStyled>
      <FormStyled onSubmit={handleSubmit}>
        <InputContainer>
          <label for="username">USERNAME</label>
          <InputStyled
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          ></InputStyled>
        </InputContainer>
        <InputContainer>
          <label for="password">PASSWORD</label>
          <InputStyled
            type="password"
            name="password"
            id='password'
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          ></InputStyled>
        </InputContainer>
        <ButtonStyled type="submit">Login</ButtonStyled>
      </FormStyled>
    </FormContainer>
  );
};

export default Form;
