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
import Notification from "./components/Notification";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ProductDetailView from "./components/productDetails/ProductDetailView";
import AdminPage from "./components/admin/AdminPage";

const App = () => {
  return (
    <AppDataContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <Container maxWidth="md" className="container1">
              <Header />
              <Navbar />
              <Notification />
              <Frontpage />
            </Container>
          </Route>
          <Route exact path="/products">
            <Container maxWidth="md" className="container1">
              <Header />
              <Navbar />
              <Notification />
              <Products />
            </Container>
          </Route>
          <Route exact path="/products/:id">
            <Container maxWidth="md" className="container1">
              <Header />
              <Navbar />
              <Notification />
              <ProductDetailView />
            </Container>
          </Route>
          <Route exact path="/signup">
            <Container maxWidth="md" className="container1">
              <Header />
              <Navbar />
              <Notification />
              <SignUp />
            </Container>
          </Route>
          <Route exact path="/login">
            <Container maxWidth="md" className="container1">
              <Header />
              <Navbar />
              <Notification />
              <LogIn />
            </Container>
          </Route>
          <Route exact path="/shoppingcart">
            <Container maxWidth="md" className="container1">
              <Header />
              <Navbar />
              <Notification />
              <ShoppingCart />
            </Container>
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </Router>
    </AppDataContext>
  );
};

export default App;
