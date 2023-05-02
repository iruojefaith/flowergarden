
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './ProductSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  let content;
  if (status === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (status === 'succeeded') {
    content = products.map((product) => (
       <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-44 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h5 className="text-gray-800 font-semibold">{product.title.slice(0, 30)}...</h5>
        </Link>
        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
        <Link to={`/products/${product.id}`}>
          <button className="bg-black hover:bg-transparent text-white hover:text-black  font-bold py-2 px-4 rounded mt-4">
            View Product
          </button>
        </Link>
      </div>
    </div>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <main>
    <h1>Products</h1>
      <div className="product-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4 md:mx-12 lg:mx-40 md:mt-14  align-middle justify-center ">
      {content}
    </div>
    </main>

  );
};

export default ProductList;
