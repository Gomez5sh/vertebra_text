import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:8080/api/product";

class Products extends Component {
  state = {
    data: [],
  };

  getPetition = () => {
    axios.get(url).then((response) => {
      // console.log(response.data)
      this.setState({
        data: response.data,
      });
    });
  };

  componentDidMount() {
    this.getPetition();
  }

  render() {
    return (
      <>
        <div>
          <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
              <div className="flex-large">
                <h2>View Products</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Sku</th>
                      <th>Unit Measurement</th>
                      <th>Unidad Quantity</th>
                      <th>Refrigerated</th>
                      <th>Suppliers</th>
                      <th>
                        <button className="btn btn-success">Create</button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((product) => {
                      return (
                        <tr>
                          <td>{product.name}</td>
                          <td>{product.description}</td>
                          <td>{product.sku}</td>
                          <td>{product.unit_measurement}</td>
                          <td>{product.unidad_quantity}</td>
                          <td>{product.refrigerated}</td>
                          <td>{product.suppliers_ID}</td>
                          <td>
                            <button className="btn btn-info">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
