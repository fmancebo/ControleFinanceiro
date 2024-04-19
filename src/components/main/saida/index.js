import React from "react";
import PropTypes from "prop-types";
import { FaArrowCircleDown } from "react-icons/fa";
import { SaidaBox, Title, Valor } from "./styles";

function Saida({ total }) {
  return (
    <div>
      <SaidaBox>
        <Title>
          Saida <FaArrowCircleDown />
        </Title>
        <Valor>
          R$:<span>{total}</span>
        </Valor>
      </SaidaBox>
    </div>
  );
}

Saida.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Saida;
