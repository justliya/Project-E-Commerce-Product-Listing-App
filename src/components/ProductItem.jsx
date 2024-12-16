
import { array } from 'prop-types';

const ProductItem = ({ items }) => {
  return (
    <div>
      <h3>Items</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

ProductItem.defaultProps = {
  items: ['IPAD: $700', 'MacBook: $1000', 'Desktop: $1500']
};

ProductItem.propTypes = {
  items: array.isRequired
};

export default ProductItem;