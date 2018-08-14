import React, { Component } from "react";
import CardPayment from "../cardPayment/CardPayment";
import MpesaPayment from "../mpesaPayment/MpesaPayment";
import AccountDetails from "../accountDetails/AccountDetails";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "default" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  nextStep = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  prevStep = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  renderComponents() {
    switch (this.state.value) {
      case "mpesa":
        return <MpesaPayment />;
      case "card":
        return <CardPayment />;
      case "default":
        return null;
      default:
        return null;
    }
  }

  render() {
    return (
      <div
        class="container"
        style={{
          paddingTop: "60px",
          paddingBottom: "40px"
        }}
      >
        <div class="row">
          <div class="col-10 align-items-center">
            <div class="container" style={{ paddingTop: "10px" }}>
              <h1>Confirmation</h1>
              <br />
              <h2>Account Details</h2>
              <AccountDetails />
              <select
                class="custom-select"
                onChange={this.handleChange}
                value={this.state.value}
              >
                <option selected value="default">
                  Select payment option
                </option>
                <option value="mpesa">Mpesa</option>
                <option value="card">Card</option>
              </select>
              {this.renderComponents()}
              <div style={{ paddingTop: "20px" }}>
                <button
                  type="button"
                  class="btn btn-secondary btn-lg float-right"
                  onClick={this.nextStep}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  class="btn btn-secondary btn-lg"
                  onClick={this.prevStep}
                >
                  Previous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
