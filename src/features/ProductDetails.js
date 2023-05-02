import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector(state => state.products.products.find(p => p.id === parseInt(productId)));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <p className="mb-4">{product.description}</p>
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-l-lg" disabled={product.quantity === 1}>
          -
        </button>
        <span className="mx-2">{product.quantity}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg" disabled={product.quantity === 10}>
          +
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
