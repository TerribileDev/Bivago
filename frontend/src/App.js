import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Bootstrap CSS
import '../src/Css/Style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
//Importar complementos aqui
import Rotas from "./Routes";

//Importar componentes aqui
import Navegacao from "./Components/Navegacao";

const App = () => {
  return (
    <>
      <Container>
        <Router>
          <Navegacao />
          <Rotas />
        </Router>
      </Container>
    </>
  );
};

export default App;
