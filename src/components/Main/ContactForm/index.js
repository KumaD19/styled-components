import { useState } from "react";
import { ButtonContact, FormStyle, InputStyled, TextAreaStyle } from "./styles";
const ContactForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <section>
      <FormStyle>
        <label for='email'>EMAIL</label>
        <InputStyled type="email" name="email" id="email" value={form.email} onChange={handleChange}placeholder="Email" required></InputStyled>
        <label for="message">MESSAGE</label>
        <TextAreaStyle id="message" name="message" value={form.message}onChange={handleChange}placeholder="Message" required></TextAreaStyle>
        <ButtonContact>Submit</ButtonContact>
      </FormStyle>
    </section>
  );
};

export default ContactForm;
