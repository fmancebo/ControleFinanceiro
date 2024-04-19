import React from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { Container, Wrapper, Span } from "./styles";

function ListItem({ descricao, valor, tipo, handleDelete }) {
  return (
    <div>
      <Container>
        <Wrapper>
          <div>
            <span>{descricao}</span>
          </div>
          <div>
            <span>{valor}</span>
          </div>
          <div>
            {tipo && (
              <Span>
                {tipo === "entrada" ? (
                  <FaArrowCircleUp color='green' />
                ) : (
                  <FaArrowCircleDown color='red' />
                )}
              </Span>
            )}
          </div>
          <div>
            {descricao && valor && tipo && (
              <Span>
                <MdDelete onClick={handleDelete} size={20} />
              </Span>
            )}
          </div>
        </Wrapper>
      </Container>
    </div>
  );
}
ListItem.defaultProps = {
  handleDelete: () => {},
};

ListItem.propTypes = {
  descricao: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
};

export default ListItem;
