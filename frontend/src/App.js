import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductView from './components/ProductView'
import Products from './components/Products'
import SignUp from './components/SignUp'
import Frontpage from './components/Frontpage'
import {
  Container
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Container >
      <Header />
      <Navbar />
        <Switch>
          <Route exact path='/' >
            <Frontpage/>
          </Route>
          <Route path='/products' >
            <Products />
          </Route>
          <Route path='/signup' >
            <SignUp />
          </Route>
        </Switch>
    
      
      
    </Container>
    </Router>
  );
};

export default App;
