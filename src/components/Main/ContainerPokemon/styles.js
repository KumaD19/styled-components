import styled from "styled-components";

const SectionStyled = styled.section`
  background-color: rgba(24, 23, 23, 0.6); 
  backdrop-filter: blur(30px);
  width: 80%;
  height: fit-content;
  margin: 0 auto;
  border-radius: 10px;
`;


const TitleStyled = styled.h1`
    color:#eeeeee;
    font-size:clamp(1.1rem,2.5vw,1.6rem);
    letter-spacing: 1px;

`

const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    gap: 15px;
    margin-left:20px;
    padding-top:20px;
  

`


const CardContainer = styled.section`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(200px,max-content));
grid-gap:15px;
justify-content:center;

`

export { SectionStyled , TitleStyled, TitleContainer, CardContainer};