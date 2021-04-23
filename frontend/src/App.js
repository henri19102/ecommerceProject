import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import ProductView from "./components/ProductView";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Frontpage from "./components/Frontpage";
import { Container, Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import productsServ from './services/products'
import { boxShadows } from '@material-ui/system';

const App = () => {
const [products, setProducts] = React.useState([])

React.useEffect(()=>{
  productsServ.getAll().then(x=>setProducts(x))
}, [])
 

  console.log(products)
  return (
    <Router>
      <Container   maxWidth="md" className="container1">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Frontpage />
          </Route>
          <Route exact path="/products">
            <Products products={products} />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
        </Switch>
      </Container >
    </Router>
  );
};

export default App;
