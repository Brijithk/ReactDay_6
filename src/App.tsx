import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductsItem from './components/Products';
import { products } from './components/ProductData';
import Filter from './components/filter';
import { ProductContext } from './components/context';
import { Product } from './components/ProductData';

function App() {
  const [filterChoices, setFilterChoices] = useState<string[]>([]);
  const [showFilterChoices, setShowFilterChoices] = useState(false);
  const [productItems, setProductItems] = useState<Product[]>(products);

  const handleFilterClick = () => {
    setShowFilterChoices(!showFilterChoices);
  };

  const handleFilterChange = (values: string[]) => {
    setFilterChoices(values);
  };

  return (
    <>
      <ProductContext.Provider value={{ productItems, setProductItems }}>
        <Header title="Product List" onFilterClick={handleFilterClick} />
        <ProductsItem ProductItems={productItems} filterChoices={filterChoices} />
        {showFilterChoices && <Filter onFilterChange={handleFilterChange} />}
      </ProductContext.Provider>
    </>
  );
}

export default App;
