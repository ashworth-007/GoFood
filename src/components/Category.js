import React from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';

const categories = ["Seafood", "Chicken", "Vegetarian", "Dessert"];

const Category = ({ onSelectCategory }) => {
  return (
    <Container className="my-4">
      <ButtonGroup>
        {categories.map(category => (
          <Button
            key={category}
            variant="outline-secondary"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default Category;
