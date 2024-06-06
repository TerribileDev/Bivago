import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Container } from 'react-bootstrap';
import '../Css/Style.css';
import foto from '../img/bivago.png'
import { TbHomeFilled } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Container className='borda'>
            <Row>
              <Col md={1}>
                <Button className='botao'>
                  <Link to="/"><TbHomeFilled />Home</Link>
                </Button>
              </Col>
              <Col md={1}>
                <Button className='botao'>
                  <Link to="/contato"><BsFillTelephoneFill />Contato</Link>
                </Button>
              </Col>
              <Col md={7}>
                <Button className='botao'>
                  <Link to="/listaUsuarios"><FaListAlt /><br/>Lista de Usuários</Link>
                </Button>
              </Col>
              <Col md={2}>
                <img src={foto} alt="" width={110} className='logo' />
              </Col>
            </Row>
          </Container>
        </ul>
      </nav >
    </header >
  );
};

export default Header;
