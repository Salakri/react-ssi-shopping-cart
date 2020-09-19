import React, { Component } from "react";
import { Modal, Nav } from "react-bootstrap";
import {
  FaCashRegister,
  FaCreditCard,
  FaPaypal,
  FaUniversity,
} from "react-icons/fa";

import FormChoice from "../components/formchoice";

class Form extends Component {
  state = { choice: "pills-credit-card" };

  showItemsInCart = () => {
    console.log(this.props.items);
  };

  handleSelection = (key) => {
    this.setState({ choice: key });
  };

  render() {
    return (
      <Modal
        show={this.props.modalShow}
        onHide={() => this.props.onHide()}
        size="lg"
        id="checkOutBox"
        tabIndex="-1"
        aria-hidden="true"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="checkOutLabel">
              <FaCashRegister />
              Come on! Let's check out
            </h5>
            <button
              className="close"
              type="button"
              onClick={() => this.props.onHide()}
              aria-label="Close"
            >
              <span>
                <i className="pg-close_line"></i>
              </span>
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav
            onSelect={(key) => this.handleSelection(key)}
            className="mb-3 text-center no-gutters"
            variant="pills"
            id="pills-tab"
            role="tablist"
          >
            <Nav.Item className=" bg-light col-6">
              <Nav.Link
                eventKey="pills-credit-card"
                id="pills-credit-card-tab"
                role="tab"
                aria-controls="pills-credit-card"
                aria-selected="true"
              >
                <span className="badge">
                  <FaCreditCard />
                  Creidt Card
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="bg-light col-6">
              <Nav.Link
                eventKey="pills-paypal"
                id="pills-paypal-tab"
                role="tab"
                aria-controls="pills-paypal"
                aria-selected="false"
              >
                <span className="badge">
                  <FaPaypal />
                  PayPal
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="bg-light col-12">
              <Nav.Link
                eventKey="pills-bank"
                className="nav-link"
                id="pills-bank-tab"
                role="tab"
                aria-controls="pills-bank"
                aria-selected="false"
              >
                <span className="badge">
                  <FaUniversity />
                  Bank Transfer
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <FormChoice choice={this.state.choice} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
}

export default Form;
