import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import CategoryPage from "./components/CategoryPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/category/:category" component={CategoryPage} />
      </Switch>
    </Router>
  );
}

export default App;
