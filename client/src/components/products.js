import React, { Component } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = "http://localhost:8080/api/product";

class Products extends Component {
  state = {
    data: [],
    modalInsert: false,
    form: {
      id: "",
      name: "",
      Sku: "",
      unit_measurement: "",
      unidad_quantity: "",
      refrigerated: "",
      suppliers_ID: "",
    },
  };

  getPetition = () => {
    axios.get(url).then((response) => {
      // console.log(response.data)
      this.setState({
        data: response.data,
      });
    });
  };

  modalInsert = () => {
    this.setState({ modalInsert: !this.state.modalInsert });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      // Heredar atributos que el usuario escriba
      ...this.state.form,
      [e.target.name]: e.target.value,
    });
    console.log(this.state.form);
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
                        <button
                          className="btn btn-success"
                          onClick={() => this.modalInsert()}
                        >
                          Create
                        </button>
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

                <Modal isOpen={this.state.modalInsert}>
                  <ModalHeader style={{ display: "block" }}>
                    <span
                      style={{ float: "right" }}
                      onClick={() => this.modalInsert()}
                    >
                      x
                    </span>
                  </ModalHeader>
                  <ModalBody>
                    <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input
                        className="form-control"
                        type="text"
                        name="id"
                        id="id"
                        readOnly
                        onChange={this.handleChange}
                        //value={form ? form.id : this.state.data.length + 1}
                      />
                      <br />
                      <label htmlFor="name">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="nombre"
                        id="nombre"
                        onChange={this.handleChange}
                        //value={form ? form.nombre : ""}
                      />
                      <br />
                      <label htmlFor="description">Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="description"
                        id="description"
                        onChange={this.handleChange}
                        //value={form ? form.pais : ""}
                      />
                      <br />
                      <label htmlFor="sku">Sku</label>
                      <input
                        className="form-control"
                        type="text"
                        name="sku"
                        id="sku"
                        onChange={this.handleChange}
                        //value={form ? form.capital_bursatil : ""}
                      />
                      <br />
                      <label htmlFor="unit_measurement">Unit Measurement</label>
                      <input
                        className="form-control"
                        type="text"
                        name="unit_measurement"
                        id="unit_measurement"
                        onChange={this.handleChange}
                        //value={form ? form.nombre : ""}
                      />
                      <br />
                      <label htmlFor="unidad_quantity">Unidad Quantity</label>
                      <input
                        className="form-control"
                        type="text"
                        name="unidad_quantity"
                        id="unidad_quantity"
                        onChange={this.handleChange}
                        //value={form ? form.nombre : ""}
                      />
                      <br />
                      <label htmlFor="refrigerated">Refrigerated</label>
                      <input
                        className="form-control"
                        type="text"
                        name="refrigerated"
                        id="refrigerated"
                        onChange={this.handleChange}
                        //value={form ? form.nombre : ""}
                      />
                      <br />
                      <label htmlFor="suppliers_ID">Suppliers</label>
                      <input
                        className="form-control"
                        type="text"
                        name="suppliers_ID"
                        id="suppliers_ID"
                        onChange={this.handleChange}
                        //value={form ? form.nombre : ""}
                      />
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    {this.state.tipoModal === "insertar" ? (
                      <button
                        className="btn btn-success"
                        onClick={() => this.peticionPost()}
                      >
                        Insertar
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => this.peticionPut()}
                      >
                        Actualizar
                      </button>
                    )}
                    <button
                      className="btn btn-danger"
                      onClick={() => this.modalInsertar()}
                    >
                      Cancelar
                    </button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
