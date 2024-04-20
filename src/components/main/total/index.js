import React from "react";
import PropTypes from "prop-types";
import { MdAttachMoney } from "react-icons/md";
import { TotalBox, Title, Valor } from "./styles";

function Total({ total, entrada }) {
  const porcentagem = (total / entrada) * 100;
  let cor;

  if (porcentagem <= 10) {
    cor = "rgba(255, 0, 0, 0.8)";
  } else if (porcentagem <= 50) {
    cor = "rgba(255, 240, 0, 0.8)";
  } else {
    cor = "transparent";
  }

  return (
    <div>
      <TotalBox $cor={cor}>
        <Title>
          Total <MdAttachMoney />
        </Title>
        <Valor>
          R$:<span>{total.toFixed(2)}</span>
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
