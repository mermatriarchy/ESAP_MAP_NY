import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import GoogleMap from "./GoogleMap";
import PageNotFound from "./PageNotFound";
import About from "./common/About";
import Footer from "./common/Footer";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={GoogleMap} />
        <Route exact path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
