import React from "react";
import Navbar from "../components/ui/Nabvar";
import Products from "../components/products";
import Stores from "../components/stores ";
import Suppliers from "../components/suppliers";
import { BrowserRouter as Router, Switch } from "react-router-dom";

export function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Router path="/stores" exact component={Stores} />
          <Router path="/suppliers" exact component={Suppliers} />
          <Router path="/products" exact component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
