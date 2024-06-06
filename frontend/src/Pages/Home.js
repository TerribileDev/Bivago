import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from "../Components/HomeCard"; // Certifique-se de que o caminho está correto

const Home = () => {
  const [products, setProducts] = useState([
    {
      name: "Produto 1",
      description: "Descrição breve do produto 1 que explica seus principais benefícios e características.",
      image: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/b7/46/058b1dd6096c212dea56ec005ff2503c4fd1568359b42f7ff72460661fcb.jpeg",
      purchased: false
    },
    {
      name: "Produto 2",
      description: "Descrição breve do produto 2 que explica seus principais benefícios e características.",
      image: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/c0/ef/77ce972574f3d2108f2320c6394bcab95020fc50b19ffcb464586f0d10bb.jpeg",
      purchased: false
    },
    {
      name: "Produto 3",
      description: "Descrição breve do produto 3 que explica seus principais benefícios e características.",
      image: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/2b/70/f4e2d0b075d030adec7df69d1a509dfa86e293cab13b5841e2e220d04dbe.jpeg",
      purchased: false
    }
  ]);

  const [anyPurchased, setAnyPurchased] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const handleBuy = (index) => {
    const newProducts = products.map((product, i) => {
      if (i === index) {
        return { ...product, purchased: true };
      }
      return product;
    });
    setProducts(newProducts);
    setAnyPurchased(true);
  };

  const handleCloseInfo = () => {
    setInfoOpen(false);
    setAnyPurchased(false);
  };

  return (
    <Container className="my-5">
      <h2>Home</h2>
      <Row>
        <Col md={anyPurchased ? 6 : 12}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onBuy={() => handleBuy(index)}
              anyPurchased={anyPurchased}
              infoOpen={infoOpen}
            />
          ))}
        </Col>
        {anyPurchased && (
          <Col md={6}>
            <div className="p-3 border bg-light">
              <h3>Informações adicionais</h3>
              <div className="d-flex align-items-center">
                <img
                  src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/b7/46/058b1dd6096c212dea56ec005ff2503c4fd1568359b42f7ff72460661fcb.jpeg"
                  alt="Imagem do Hotel"
                  className="mr-3"
                  style={{ width: '180px', height: 'auto' }}
                />
                <div>
                  <img
                    src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/33/82/d5f7c741b98572e36ca29d16169b2c8d953c7fcaba63ab022dc0f0a61747.jpeg"
                    alt="Imagem do Hotel"
                    className="mr-3"
                    style={{ width: '120px', height: 'auto' }}
                  /><br />
                  <img
                    src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/12/8f/67e4dd2e8b8c485dfb31026904d68e4b9b0f0acbf639f4f4e814314e5b47.jpeg"
                    alt="Imagem do Hotel"
                    className="mr-3"
                    style={{ width: '120px', height: 'auto' }}
                  />
                </div>
                <div>
                  <p>
                    Obrigado por sua compra! Aqui estão algumas informações adicionais sobre nossos produtos e serviços.
                  </p>
                </div>
              </div>
              <p>
                Se você tiver alguma dúvida ou precisar de suporte, entre em contato com nosso serviço de atendimento ao cliente.
              </p>
              <Button variant="secondary" onClick={handleCloseInfo}>Fechar</Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Home;
