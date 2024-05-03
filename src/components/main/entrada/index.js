import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import PropTypes from "prop-types";
import { EntradaBox, Title, Valor } from "./styles";
import currencyFormat from "../../../helper";

function Entrada({ total }) {
  return (
    <div>
      <EntradaBox>
        <Title>
          Entrada <FaArrowCircleUp />
        </Title>
        <Valor>
          <span>{currencyFormat(total)}</span>
        </Valor>
      </EntradaBox>
    </div>
  );
}

Entrada.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Entrada;
