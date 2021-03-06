import React from "react";
import Navbar from "../components/ui/Nabvar";
import DashRoutes from "./DashRoutes";
import Products from "../components/products";
import Stores from "../components/stores";
import Suppliers from "../components/suppliers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={DashRoutes} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/suppliers" component={Suppliers} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
