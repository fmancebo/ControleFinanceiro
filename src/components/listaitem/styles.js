import styled, { keyframes } from "styled-components";
import { MdDelete } from "react-icons/md";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  background-color: #f2f2f2;
  font-weight: 500;

  @media screen and (max-width: 902px) {
    width: 90%;
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
`;

const IconDelete = styled(MdDelete)`
  &:active,
  :hover {
    animation: ${rotate} 0.5s ease-in-out;
    color: red;
    cursor: pointer;
  }
`;

export { Container, Wrapper, Span, IconDelete };
