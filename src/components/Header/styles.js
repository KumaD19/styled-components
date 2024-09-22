import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  height: 40px;
  justify-content: space-between;
  background-color: #0a0a0a;
  align-items: center;
`;
const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 50px;
`;

const Links = styled.a`
  font-size: 1rem;
  color: #f0f0f0;
  cursor: pointer;
`;

const SpanTitle = styled.span`
  color: #cbc5c5;
  margin-left: 50px;
`;

export { Navigation, LinkContainer, Links, SpanTitle };
