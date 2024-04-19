import React from "react";
import PropTypes from "prop-types";
import { MdAttachMoney } from "react-icons/md";
import { TotalBox, Title, Valor } from "./styles";

function Total({ total, entrada }) {
  const porcentagem = (total / entrada) * 100;
  let cor;

  if (porcentagem <= 10) {
    cor = "rgb(255, 0, 0)";
  } else if (porcentagem < 50) {
    cor = "rgb(255, 240, 0)";
  } else {
    cor = "black"; // Cor padrão
  }

  return (
    <div>
      <TotalBox>
        <Title>
          Total <MdAttachMoney />
        </Title>
        <Valor $cor={cor}>
          R$:<span>{total}</span>
        </Valor>
      </TotalBox>
    </div>
  );
}

Total.propTypes = {
  total: PropTypes.number.isRequired,
  entrada: PropTypes.number.isRequired,
};

export default Total;
