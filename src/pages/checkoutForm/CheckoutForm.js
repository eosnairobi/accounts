import React, { Component } from "react";
import CardPayment from "../../components/accountDetails/AccountDetails";
import MpesaPayment from "../../components/mpesaPayment/MpesaPayment";
import AccountDetails from "../../components/accountDetails/AccountDetails";

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
        className="container"
        style={{
          paddingTop: "60px",
          paddingBottom: "40px"
        }}
      >
        <div className="container" style={{ paddingTop: "10px" }}>
          <h1>Confirmation</h1>
          <br />
          <h2>Account Details</h2>
          <AccountDetails />
          <select
            className="custom-select"
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
              className="btn btn-secondary btn-lg float-right"
              onClick={this.props.nextStep}
            >
              Confirm
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={this.props.prevStep}
            >
              Previous
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
