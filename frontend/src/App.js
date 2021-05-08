import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import Products from "./components/products/Products";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Frontpage from "./components/Frontpage";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppDataContext from "./components/reducers/AppDataContext";
import Notification from './components/Notification'
import ShoppingCart from './components/products/ShoppingCart'
import ProductDetailView from './components/products/ProductDetailView'
import Admin from './components/admin/Admin'

const App = () => {



  return (
    <AppDataContext>
      <Router>
        <Container maxWidth="md" className="container1">
          <Header />
          <Navbar />
          <Notification/>
          <Switch>
            <Route exact path="/">
              <Frontpage />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/products/:id">
              <ProductDetailView />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/shoppingcart">
              <ShoppingCart />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
          </Switch>
        </Container>
      </Router>
    </AppDataContext>
  );
};

export default App;
