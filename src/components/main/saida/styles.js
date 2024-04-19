import styled from "styled-components";

const SaidaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 20px 40px;
  background-color: #f2f2f2;
  border-radius: 5px;

  @media screen and (max-width: 902px) {
    height: 80px;
    padding: 10px 20px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  width: 100%;
`;
const Valor = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export { SaidaBox, Title, Valor };
