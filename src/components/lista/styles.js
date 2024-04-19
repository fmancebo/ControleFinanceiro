import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  width: 100vw;
  height: auto;
`;

const Wrapper = styled.div`
  display: grid;
  padding: 10px 20px;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  column-gap: 10px;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f2f2f2;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-weight: bold;

  @media screen and (max-width: 902px) {
    width: 90%;
  }
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
`;

export { Container, Wrapper, Span };
