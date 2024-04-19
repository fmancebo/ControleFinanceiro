import styled from "styled-components";

const Header = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: auto;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background-color: teal;
    z-index: -1;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding-top: 20px;
  color: #fff;

  @media (max-width: 472px) {
    font-size: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 80%;
  margin: 20px auto;

  @media screen and (max-width: 902px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

export { Header, Title, GridContainer };
