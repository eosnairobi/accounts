import React, { Component } from "react";

class PaymentForm extends Component {
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
        return (
          <div class="mb-3">
            <label>Phone number</label>
            <input class="form-control" />
          </div>
        );
      case "mastercard":
        return (
          <div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label>Name on Card</label>
                <input class="form-control" />
              </div>
              <div class="mb-3 col-md-6">
                <label>Credit card number</label>
                <input class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input class="form-control" />
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-ccv">CCV</label>
                <input class="form-control" />
              </div>
            </div>
          </div>
        );
      case "Visa":
        return (
          <div>
            <div class="row">
              `
              <div class="mb-3 col-md-6">
                <label>Name on Card</label>
                <input class="form-control" />
              </div>
              <div class="mb-3 col-md-6">
                <label>Credit card number</label>
                <input class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input class="form-control" />
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-ccv">CCV</label>
                <input class="form-control" />
              </div>
            </div>
          </div>
        );
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
            <form>
              <div class="mb-3">
                <h1>Create Account</h1>
                <select
                  class="custom-select"
                  onChange={this.handleChange}
                  value={this.state.value}
                >
                  <option selected value="default">
                    Select payment option
                  </option>
                  <option value="mpesa">Mpesa</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="Visa">Visa</option>
                </select>
              </div>
              {this.renderComponents()}

              <div>
                <button
                  type="button"
                  class="btn btn-secondary btn-lg float-right"
                >
                  Next
                </button>
                <button type="button" class="btn btn-secondary btn-lg">
                  Previous
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentForm;
