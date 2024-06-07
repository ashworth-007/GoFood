import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Category from './components/Category';
import ProductList from './components/ProductList';

const App = () => {
  const [category, setCategory] = useState('Seafood'); // Default category

  const handleCategorySelect = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <Banner />
      <Category onSelectCategory={handleCategorySelect} />
      <ProductList category={category} />
    </div>
  );
};

export default App;
