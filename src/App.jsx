import { useState } from 'react';
import './Styles.css';
import ProductItem from './components/ProductItem'; // Ensure the correct file name
import ProductList from './components/ProductList'; // Ensure the correct file name

const App = () => {
  // State variables
  const [showProductList,setShowProductList] = useState(true);
  const [showProductItem, setShowProductItem] = useState(true);

  // Static arrays for products
  const productList = ['Tablets', 'Laptops', 'Desktops'];
  const productItems = ['IPAD: $700', 'MacBook: $1000', 'Desktop: $1500'];

  return (
    <div className="product-board">
      <h1>New Owner</h1>
      {/* Toggle Buttons */}
      <button onClick={() => setShowProductList(!showProductList)}>
        {showProductList ? 'Hide' : 'Show'} Product List
      </button>
      <button onClick={() => setShowProductItem(!showProductItem)}>
        {showProductItem ? 'Hide' : 'Show'} Product Items
      </button>

      {/* Conditionally render components */}
      {showProductList && <ProductList items={productList} />}
      {showProductItem && <ProductItem items={productItems} />}
    </div>
  );
};

export default App;

