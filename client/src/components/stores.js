import React, { Component } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = "http://localhost:8080/api/product";

class Stores extends Component {
  state = {
    data: [],
    modalInsert: false,
    deleteModal: false,
    form: {
      id: "",
      name: "",
      address: "",
      manager: "",
      number_of_refrigerators: "",
      number_of_corridors: "",
      number_of_box: "",
      number_of_floors: "",
      square_meters: "",
      //extra_services: "",
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

  postPetition = async (stores) => {
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

  selecProduct = (stores) => {
    this.setState({
      modaltype: "refresh",
      form: {
        id: stores.id,
        name: stores.name,
        address: stores.address,
        manager: stores.manager,
        number_of_refrigerators: stores.number_of_refrigerators,
        number_of_corridors: stores.number_of_corridors,
        number_of_box: stores.number_of_box,
        number_of_floors: stores.number_of_floors,
        square_meters: stores.square_meters,
        //extra_services: stores.extra_services,
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
                <h2>View Stores</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Manager</th>
                      <th>Number of Refrigerators</th>
                      <th>Number of Corridors</th>
                      <th>Number of Box</th>
                      <th>Number of Floors</th>
                      <th>Square Meters</th>
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
                    {this.state.data.map((stores) => {
                      return (
                        <tr>
                          <td>{stores.name}</td>
                          <td>{stores.address}</td>
                          <td>{stores.manager}</td>
                          <td>{stores.number_of_refrigerators}</td>
                          <td>{stores.number_of_corridors}</td>
                          <td>{stores.number_of_box}</td>
                          <td>{stores.number_of_floors}</td>
                          <td>{stores.square_meters}</td>
                          <td>
                            <button
                              className="btn btn-info"
                              onClick={() => {
                                this.selecProduct(stores);
                                this.modalInsert();
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.selecProduct(stores);
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

                      <label htmlFor="address">Address</label>
                      <input
                        className="form-control"
                        type="text"
                        name="address"
                        id="address"
                        onChange={this.handleChange}
                        value={form ? form.address : ""}
                      />

                      <label htmlFor="manager">Manager</label>
                      <input
                        className="form-control"
                        type="text"
                        name="manager"
                        id="manager"
                        onChange={this.handleChange}
                        value={form ? form.manager : ""}
                      />
                      <label htmlFor="number_of_refrigerators">
                        Number of Refrigerators
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="number_of_refrigerators"
                        id="number_of_refrigerators"
                        onChange={this.handleChange}
                        value={form ? form.number_of_refrigerators : ""}
                      />
                      <label htmlFor="number_of_corridors">
                        Number of Corridors
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="number_of_corridors"
                        id="number_of_corridors"
                        onChange={this.handleChange}
                        value={form ? form.number_of_corridors : ""}
                      />
                      <label htmlFor="number_of_box">Number of Box</label>
                      <input
                        className="form-control"
                        type="text"
                        name="number_of_box"
                        id="number_of_box"
                        onChange={this.handleChange}
                        value={form ? form.number_of_box : ""}
                      />
                      <label htmlFor="number_of_floors">Number of Floors</label>
                      <input
                        className="form-control"
                        type="text"
                        name="number_of_floors"
                        id="number_of_floors"
                        onChange={this.handleChange}
                        value={form ? form.number_of_floors : ""}
                      />
                      <label htmlFor="square_meters">Square Meters</label>
                      <input
                        className="form-control"
                        type="text"
                        name="square_meters"
                        id="square_meters"
                        onChange={this.handleChange}
                        value={form ? form.square_meters : ""}
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

export default Stores;
