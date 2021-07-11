import React from "react";
import Navigation from "./Navigation";
import Blog from "./Blog";
import About from "./About";
import Topics from "./Topics.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Recent from "./Recent";
import Footer from "./components/Footer";

import "./App.css";
import Video from "./Video";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/topics" exact component={Topics} />
          <Route path="/videos" exact component={Video} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Recent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
