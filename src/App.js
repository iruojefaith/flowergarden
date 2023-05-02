import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import ProductList from './features/ProductList';
import ProductDetails from './features/ProductDetails';





function App() {
  return <main>
  <Navbar />

   <Router basename={process.env.PUBLIC_URL}>
   <ProductList />
      <Routes>
        <Route exact path="/products/:id" component={ProductDetails} />
      </Routes>
    </Router>

  </main>;
}
export default App;
