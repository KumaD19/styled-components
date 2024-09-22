import { MainStyle } from "./styles";

import ContainerPokemon from "./ContainerPokemon";
import Login from "./Login";
import ContactForm from "./ContactForm";


const DisplayPokemon = () => {
  return (
    <>
      <MainStyle>
        <Login/>
        <ContainerPokemon />
        <ContactForm/>
      </MainStyle>
    </>
  );
};

export default DisplayPokemon;
