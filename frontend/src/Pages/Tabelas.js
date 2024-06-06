//Lista de Usuarios
import React from "react";
import TabelaPagamentos from "../Components/TabelaPagamentos";
import { Container } from "react-bootstrap";

const ListaUsuarios = () => {
  return (
    <>
      <div>
        <Container>
          <h2>Tabela de Pagamentos</h2>
          <TabelaPagamentos />
          <h2></h2>
          <h2></h2>
        </Container>
      </div>
    </>
  );
};

export default ListaUsuarios;
