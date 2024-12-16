
import { array } from 'prop-types';

const ProductList = ({ items }) => {
  return (
    <div>
      <h3>Products</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

ProductList.defaultProps = {
  items: ['Tablets', 'Laptops', 'Desktops']
};

ProductList.propTypes = {
  items: array.isRequired
};

export default ProductList;
