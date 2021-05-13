import React from "react";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Frontpage from "./components/Frontpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppDataContext from "./components/reducers/AppDataContext";
import Notification from "./components/Notification";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ProductDetailView from "./components/productDetails/ProductDetailView";
import AdminPage from "./components/admin/AdminPage";
import { useStyles } from "./styles/styles";
import { Container } from "@material-ui/core";

const App = () => {
  const classes = useStyles();


  return (
    <AppDataContext>
      <Router>
        <Navbar />
        <Container className={classes.container} maxWidth="md">
        <Notification />


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
              <AdminPage />
            </Route>

          </Switch>
        </Container>

      </Router>
    </AppDataContext>
  );
};

export default App;
