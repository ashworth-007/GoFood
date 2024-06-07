import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => setProducts(response.data.meals))
      .catch(error => console.error('Error fetching the products:', error));
  }, [category]);

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col md={4} className="mb-4" key={product.idMeal}>
            <Card>
              <Card.Img variant="top" src={product.strMealThumb} />
              <Card.Body>
                <Card.Title>{product.strMeal}</Card.Title>
                <Card.Text>$8.45</Card.Text>
                <Button variant="success">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
