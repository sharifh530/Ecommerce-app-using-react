import React from "react";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

import "./App.css";

import HomePage from "./pages/homepage/Homepage.jsx";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
