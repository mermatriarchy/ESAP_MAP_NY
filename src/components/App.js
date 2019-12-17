import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import GoogleMap from "./GoogleMap";
import About from "./About";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={GoogleMap} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}
