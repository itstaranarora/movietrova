import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/About/About";
import Movie from "./pages/Movie/Movie";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
