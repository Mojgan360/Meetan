import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import CarsPage from "./pages/CarsPage";
import Car from "./pages/Car";
import Error from "./pages/Error";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header title="our cars" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/cars">
          <CarsPage />
        </Route>
        <Route path="/cars/:id" children={<Car></Car>}></Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
