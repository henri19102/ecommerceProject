import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import {
  Container
} from "@material-ui/core";

const App = () => {
  return (
    <Container>
      <Header />
      <Navbar />
    </Container>
  );
};

export default App;
