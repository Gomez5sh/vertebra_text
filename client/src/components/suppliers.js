import React from "react";
import UserTable from "./global/UserTable";

export function Suppliers() {
  return (
    <div>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>View suppliers</h2>
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suppliers;