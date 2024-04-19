import React from "react";
import PropTypes from "prop-types";
import ListItem from "../listaitem";
import { Container, Wrapper, Span } from "./styles";

function List({ items = [], handleDelete }) {
  return (
    <div>
      {items.length > 0 && (
        <Container>
          <Wrapper>
            <div>Descrição</div>
            <div>Valor</div>
            <div>
              <Span>Tipo</Span>
            </div>
            <div />
          </Wrapper>
          {items.map((item) => (
            <ListItem
              key={item.id}
              descricao={item.descricao}
              valor={item.valor}
              tipo={item.tipo}
              handleDelete={() => handleDelete(item.id)}
            />
          ))}
        </Container>
      )}
    </div>
  );
}
List.defaultProps = {
  handleDelete: () => {},
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      descricao: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
      tipo: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func,
};

export default List;
