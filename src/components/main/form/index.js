import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import ListItem from "../../listaitem";
import List from "../../lista";
import { Container, Form, ControlForm, ControlInputs, Label, Input, Btn } from "./styles";

function Formulario({ setTotalEntrada, setTotalSaida, setResultado }) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")) || []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleSubmit(event) {
    event.preventDefault();

    // Pega os valores dos campos do formulário
    const descricao = event.target.elements.descricao.value;
    const valor = parseFloat(event.target.elements.valor.value.replace(",", ".")).toFixed(2);
    const valorNumerico = Number(valor);

    // Pega o input radio selecionado
    const tipoInput = event.target.elements.tipo;

    // Determina o tipo com base no id do input radio selecionado
    let tipo;
    for (let i = 0; i < tipoInput.length; i += 1) {
      if (tipoInput[i].checked) {
        tipo = tipoInput[i].id;
        break;
      }
    }

    // Cria um novo item com esses valores
    const newItem = { id: uuidv4(), descricao, valor: valorNumerico, tipo };

    // Adiciona o novo item à lista de itens
    setItems([...items, newItem]);

    // Se o tipo for 'entrada' ou 'saida' e o valor for um número, atualiza os dados
    if (tipo === "entrada" && !Number.isNaN(Number(valorNumerico))) {
      setTotalEntrada((prevTotal) => Number((prevTotal + Number(valorNumerico)).toFixed(2)));
      setResultado((prevResult) => Number((prevResult + Number(valorNumerico)).toFixed(2)));
    } else if (tipo === "saida" && !Number.isNaN(Number(valorNumerico))) {
      setTotalSaida((prevTotal) => Number((prevTotal + Number(valorNumerico)).toFixed(2)));
      setResultado((prevResult) => Number((prevResult - Number(valorNumerico)).toFixed(2)));
    }

    // Limpa os campos do formulário
    event.target.reset();
  }

  const handleDelete = (id) => {
    // Encontra o item que está sendo deletado
    const itemToDelete = items.find((item) => item.id === id);

    if (itemToDelete) {
      // Atualiza o total de entrada ou saída com base no tipo do item
      if (itemToDelete.tipo === "entrada") {
        setTotalEntrada((prevTotal) => prevTotal - Number(itemToDelete.valor));
        setResultado((prevResult) => prevResult - Number(itemToDelete.valor));
      } else if (itemToDelete.tipo === "saida") {
        setTotalSaida((prevTotal) => prevTotal - Number(itemToDelete.valor));
        setResultado((prevResult) => prevResult + Number(itemToDelete.valor));
      }
    }

    // Remove o item da lista de itens
    setItems(items.filter((item) => item.id !== id));
  };

  items.map((item) => (
    <ListItem key={item.id} descricao={item.descricao} valor={item.valor} tipo={item.tipo} />
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <Form>
            <ControlForm>
              <Label htmlFor='descricao'>
                Descrição
                <Input type='text' name='descricao' required />
              </Label>
            </ControlForm>
            <ControlForm>
              <Label htmlFor='valor'>
                Valor
                <Input type='text' name='valor' required />
              </Label>
            </ControlForm>
            <ControlInputs>
              <Label htmlFor='entrada'>
                <Input
                  id='entrada'
                  name='tipo'
                  type='radio'
                  required
                  style={{ width: "auto", marginRight: "5px" }}
                />
                Entrada
              </Label>

              <Label htmlFor='saida'>
                <Input
                  id='saida'
                  name='tipo'
                  type='radio'
                  required
                  style={{ width: "auto", marginRight: "5px" }}
                />
                Saida
              </Label>
            </ControlInputs>
            <Btn>Adicionar</Btn>
          </Form>
        </Container>
      </form>
      {items && <List items={items} handleDelete={handleDelete} />}
    </>
  );
}
Formulario.propTypes = {
  setTotalEntrada: PropTypes.func.isRequired,
  setTotalSaida: PropTypes.func.isRequired,
  setResultado: PropTypes.func.isRequired,
};

export default Formulario;
