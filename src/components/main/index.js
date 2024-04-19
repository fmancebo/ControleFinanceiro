import { React, useState, useEffect } from "react";
import Entrada from "./entrada";
import Saida from "./saida";
import Total from "./total";
import { GridContainer, Header, Title } from "./styles";
import Formulario from "./form";

function Financas() {
  const [totalEntrada, setTotalEntrada] = useState(
    () => JSON.parse(localStorage.getItem("totalEntrada")) || 0,
  );
  const [totalSaida, setTotalSaida] = useState(
    () => JSON.parse(localStorage.getItem("totalSaida")) || 0,
  );
  const [resultado, setResultado] = useState(
    () => JSON.parse(localStorage.getItem("resultado")) || 0,
  );

  // useEffect para definir valores no localStorage
  useEffect(() => {
    localStorage.setItem("totalEntrada", JSON.stringify(totalEntrada));
    localStorage.setItem("totalSaida", JSON.stringify(totalSaida));
    localStorage.setItem("resultado", JSON.stringify(resultado));
  }, [totalEntrada, totalSaida, resultado]);
  return (
    <>
      <Header>
        <Title>Controle de Finanças</Title>
        <GridContainer>
          <Entrada total={totalEntrada} />
          <Saida total={totalSaida} />
          <Total total={resultado} entrada={totalEntrada} />
        </GridContainer>
      </Header>
      <Formulario
        setTotalEntrada={setTotalEntrada}
        setTotalSaida={setTotalSaida}
        setResultado={setResultado}
      />
    </>
  );
}

export default Financas;
