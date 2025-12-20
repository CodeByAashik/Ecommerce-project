import './ProductContainer.css'
import { ProductCard } from './ProductCard';

export function ProductContainer({ products }) {

  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })
      }
    </div>
  );
}