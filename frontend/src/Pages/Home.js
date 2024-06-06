// Home
import React from "react";
import CadastroForm from "../Components/CadastroForm";
import { Card, Col, Row, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div>
        <h2>Home</h2>
        <Card className="my-3" style={{ maxWidth: '800px', margin: 'auto' }}>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src="https://via.placeholder.com/160" alt="Product Image" />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>Nome do Produto</Card.Title>
                <Card.Text>
                  Descrição breve do produto que explica seus principais benefícios e características.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Home;

<CadastroForm />