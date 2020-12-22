import React from "react";
import Products from "../components/products";
import Stores from "../components/stores";
import Suppliers from "../components/suppliers";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

export function DashRoutes() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/suppliers" component={Suppliers} />

          <Redirect to="/products" />
        </Switch>
      </div>
    </>
  );
}

export default DashRoutes;
