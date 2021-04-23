import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Frontpage from "./components/Frontpage";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppDataContext from "./components/AppDataContext";

const App = () => {
  return (
    <AppDataContext>
      <Router>
        <Container maxWidth="md" className="container1">
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Frontpage />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
          </Switch>
        </Container>
      </Router>
    </AppDataContext>
  );
};

export default App;
