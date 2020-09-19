import React, { Component } from "react";
import {
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";

class FormChoice extends Component {
  state = {};

  render() {
    const CHOICES = ["pills-credit-card", "pills-paypal", "pills-bank"];

    switch (this.props.choice) {
      case CHOICES[0]:
        return (
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-credit-card"
              role="tabpanel"
              aria-labelledby="pills-credit-card-tab"
            >
              <form className="needs-validation" noValidate>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    className="form-control"
                    id="fullName"
                    type="input"
                    placeholder="Enter FullName"
                    required
                  ></input>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Full Name!</div>
                </div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      id="cardNumber"
                      type="tel"
                      pattern="[0-9]{13,16}"
                      placeholder="Enter Card Number"
                      required
                    ></input>
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FaCcVisa />
                        <FaCcMastercard className="ml-1 mr-1" />
                        <FaCcDiscover />
                      </span>
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">xxxx xxxx xxxx xxxx</div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="row">
                      <div className="col-8">
                        <label htmlFor="expiration">Expiration</label>
                        <div className="input-group">
                          <div className="input-group-prepend d-block">
                            <input
                              className="form-control date-valid"
                              id="expiration"
                              type="number"
                              placeholder="MM"
                              min="1"
                              max="12"
                              required
                            ></input>
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">1~12</div>
                          </div>
                          <div className="input-group-prepend d-block">
                            <input
                              className="form-control date-valid"
                              id="expiration"
                              type="number"
                              placeholder="YY"
                              min="2020"
                              max="2900"
                              required
                            ></input>
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">2020~2900</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <label htmlFor="ccv">
                          CCV<i className="fas fa-question-circle"></i>
                        </label>
                        <input
                          className="form-control text-uppercase"
                          id="ccv"
                          type="tel"
                          pattern="^[0-9]{3, 4}$"
                          placeholder="CCV"
                          required
                        ></input>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">xxx or xxxx</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group form-check">
                  <input
                    className="form-check-input"
                    id="chk"
                    type="checkbox"
                    required
                  ></input>
                  <label className="form-check-label" htmlFor="chk">
                    <b className="h6">Agreed to terms and conditions </b>
                  </label>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <button className="btn btn-primary btn-block" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );

      case CHOICES[1]:
        return (
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-paypal"
              role="tabpanel"
              aria-labelledby="pills-paypal-tab"
            >
              <p>PayPal is the easliest way to pay online</p>
              <p>
                <button className="btn btn-primary" type="submit">
                  <span className="badge">
                    <FaPaypal className="mr-1" />
                    Login my PayPal
                  </span>
                </button>
              </p>
              <p>
                <b>Note:</b>Here are some notes.
              </p>
            </div>
          </div>
        );
      case CHOICES[2]:
        return (
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-bank"
              role="tabpanel"
              aria-labelledby="pills-bank-tab"
            >
              <p>Bank account details</p>
              <p>
                <b>Bank:</b>
              </p>
              <p>The World Bank</p>
              <p>
                <b>Account Number:</b>
              </p>
              <p>123123123</p>
              <p>
                <b>IBAN:</b>
              </p>
              <p>132132132</p>
              <p>
                <b>Note:</b>
              </p>
              <p>Here are some notes.</p>
            </div>
          </div>
        );
    }

    return <div></div>;
  }
}

export default FormChoice;
