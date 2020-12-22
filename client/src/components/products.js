import React from "react";
import UserTable from "./global/UserTable";

export function Products() {
  return (
    <div>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>View Products</h2>
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
