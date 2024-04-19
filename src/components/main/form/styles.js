import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f2f2f2;
  padding: 10px auto;
  border-radius: 5px;

  @media screen and (max-width: 902px) {
    width: 90%;
  }
`;

const ControlForm = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
`;
const ControlInputs = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    width: 25%;
    flex-direction: column;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding-left: 5px;
  line-height: 1.5rem;
  border: none;
  outline: none;
`;

const Btn = styled.button`
  height: 45%;
  background-color: teal;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    filter: brightness(120%);
  }
`;

export { Container, Form, ControlForm, ControlInputs, Label, Input, Btn };
