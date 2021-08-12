import React from "react";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Frontpage from "./components/Frontpage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppDataContext from "./components/reducers/AppDataContext";
import Notification from "./components/Notification";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ProductDetailView from "./components/productDetails/ProductDetailView";
import AdminPage from "./components/admin/AdminPage";
import { Container } from "@material-ui/core";
import HealthCheck from "./components/admin/HealthCheck";
import AboutUs from "./components/hamazonInfo/AboutUs";
import Registry from "./components/hamazonInfo/Registry";

const App = () => {
  const stylings = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "wheat",
    paddingTop: "1%",
    paddingBottom: "2%",
  };

  return (
    <AppDataContext>
      <Router>
        <Navbar />
        <Container style={stylings} maxWidth="md">
          <Notification />
          <Switch>
            <Route exact path="/">
              <Frontpage />
            </Route>
            <Route exact path="/health">
              <HealthCheck />
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
            <Route exact path="/about_us">
              <AboutUs />
            </Route>
            <Route exact path="/registry">
              <Registry/>
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </AppDataContext>
  );
};

export default App;
