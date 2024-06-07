import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <Container fluid className="py-5 bg-light">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Buy Fresh And Organic Grocery Food</h1>
          <p>Discount up to 20%</p>
          <Button variant="success">Shop Now</Button>
        </Col>
        <Col md={6}>
          <img src="path-to-image"  className="img-fluid rounded-circle" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
