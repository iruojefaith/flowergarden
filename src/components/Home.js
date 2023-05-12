import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/apiProductSlice";
import { addToCart } from "../features/cartSlice";
import { Link } from 'react-router-dom';

const Home =  () => {

    const { data, error, isLoading } = useGetAllProductsQuery()
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (<main>
        { isLoading ? (<p>Loading</p>
        ) : error ? (<p> An error occured..</p>
        ) : (
        <>
         <div className="container mx-auto product">
      <h1>OtherProducts</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {data?.map((product) => (
      <li key={product.id} className="bg-white rounded-lg shadow-md p-4">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        </Link>
     <p className="text-green-600 font-bold">£{product.price}</p>
       <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
       </li>
    ))}
      </ul>
    </div>

        </>
        )}
       </main>
       )

}
export default Home