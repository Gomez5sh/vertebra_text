import React, { Component } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = "http://localhost:8080/api/product";

class Suppliers extends Component {
  state = {
    data: [],
    modalInsert: false,
    deleteModal: false,
    form: {
      id: "",
      name: "",
      nit: "",
      legal_representative: "",
      address: "",
      // suppliers_ID: "",
      modaltype: "",
    },
  };

  // Petitions

  getPetition = () => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data)
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  postPetition = async (suppliers) => {
    delete this.state.form.id;
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsert();
        this.getPetition();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  putPetition = () => {
    axios
      .put(url + "/" + this.state.form.id, this.state.form)
      .then((response) => {
        this.modalInsert();
        this.getPetition();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletePetition = () => {
    axios
      .delete(url + "/" + this.state.form.id)
      .then((response) => {
        this.setState({ deleteModal: false });
        this.getList();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // Others

  modalInsert = () => {
    this.setState({ modalInsert: !this.state.modalInsert });
  };

  selecProduct = (suppliers) => {
    this.setState({
      modaltype: "refresh",
      form: {
        id: suppliers.id,
        name: suppliers.name,
        nit: suppliers.nit,
        legal_representative: suppliers.legal_representative,
        adresse: suppliers.adresse,
      },
    });
  };

  handleChange = async (e) => {
    e.persist();
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.getPetition();
  }

  render() {
    const { form } = this.state;

    return (
      <>
        <div>
          <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
              <div className="flex-large">
                <h2>View Suppliers</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Nit</th>
                      <th>Legal Representative</th>
                      <th>address</th>
                      <th>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            this.setState({ form: null, modaltype: "Insert" });
                            this.modalInsert();
                          }}
                        >
                          Create
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((suppliers) => {
                      return (
                        <tr>
                          <td>{suppliers.name}</td>
                          <td>{suppliers.nit}</td>
                          <td>{suppliers.legal_representative}</td>
                          <td>{suppliers.address}</td>
                          <td>
                            <button
                              className="btn btn-info"
                              onClick={() => {
                                this.selecProduct(suppliers);
                                this.modalInsert();
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.selecProduct(suppliers);
                                this.setState({ deleteModal: true });
                              }}
                            >
                              Delete
                            </button>
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
                        value={form ? form.id : this.state.data.length + 1}
                      />
                      <br />
                      <label htmlFor="name">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.handleChange}
                        value={form ? form.name : ""}
                      />

                      <label htmlFor="nit">Nit</label>
                      <input
                        className="form-control"
                        type="text"
                        name="nit"
                        id="nit"
                        onChange={this.handleChange}
                        value={form ? form.nit : ""}
                      />

                      <label htmlFor="legal_representative">
                        Legal Representative
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="legal_representative"
                        id="legal_representative"
                        onChange={this.handleChange}
                        value={form ? form.legal_representative : ""}
                      />
                      <label htmlFor="address">Address</label>
                      <input
                        className="form-control"
                        type="text"
                        name="addresst"
                        id="address"
                        onChange={this.handleChange}
                        value={form ? form.address : ""}
                      />
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    {this.state.modaltype === "Insert" ? (
                      <button
                        className="btn btn-success"
                        onClick={() => this.postPetition()}
                      >
                        Insert
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary  "
                        onClick={() => this.putPetition()}
                      >
                        Refresh
                      </button>
                    )}

                    <button
                      className="btn btn-danger"
                      onClick={() => this.modalInsert()}
                    >
                      Exit
                    </button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.deleteModal}>
                  <ModalBody>
                    Are you sure you want to eliminate the company{" "}
                    {form && form.name}
                  </ModalBody>
                  <ModalFooter>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deletePetition()}
                    >
                      Yes
                    </button>
                    <button
                      className="btn btn-secundary"
                      onClick={() => this.setState({ deleteModal: false })}
                    >
                      No
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

export default Suppliers;
