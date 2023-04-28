import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from './ProductSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-4 md:mx-12 lg:mx-40 md:mt-14  align-middle justify-center' >
      {products.map(product => (
        <div className='max-w-xs rounded overflow-hidden shadow-lg text-center' key={product.id}>
        <img src={product.img} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>

        </div>
      ))}
    </div>
  );
};

export default Products;