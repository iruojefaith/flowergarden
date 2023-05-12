import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import { fetchProducts, selectAllProducts } from './ProductSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

const handleAddToCart = (product) => {
  dispatch(addToCart(product));
}

  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-green-600 font-bold">£{product.price}</p>

            <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Products;
