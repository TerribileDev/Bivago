import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const ProductCard = ({ product, onBuy, anyPurchased, infoOpen }) => {
  return (
    <Card
      className={`my-3 text-start ${anyPurchased ? 'w-50' : 'w-100'}`}
      style={{ maxWidth: anyPurchased ? '50%' : '70%' }}
    >
      <Row className="g-0">
        <Col md={4}>
          <Card.Img src={product.image} alt={product.name} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={onBuy} disabled={product.purchased}>
              {product.purchased ? 'Comprado' : 'Comprar'}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
