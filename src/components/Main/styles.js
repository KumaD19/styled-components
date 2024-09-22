import styled from "styled-components";
import img from "../../assets/img/image.jpg";

const MainStyle = styled.main`
  height: 100%;
  width: 100%;
  background-image: url(${img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 30px;
  position: relative;

`;

export { MainStyle };