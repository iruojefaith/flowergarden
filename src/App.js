

import { BrowserRouter as Switch, Router, Route} from 'react-router-dom';

import Navbar from "./Navbar";
import ProductList from './features/ProductList';
import ProductDetails from './features/ProductDetails';





function App() {
  return <main>
  <Navbar />
 <ProductList />
 <Router>
   <Switch>

        <Route  path="/products/:id" component={ProductDetails} />

    </Switch>
    </Router>

  </main>;
}
export default App;
