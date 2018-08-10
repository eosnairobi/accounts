import React, { Component } from "react";
import KeyGenerator from "../keyGenerator/KeyGenerator";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: "hide" };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  nextStep = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  handleShow() {
    this.setState({ mode: "show" });
  }

  handleHide() {
    this.setState({ mode: "hide" });
  }
  renderKeyGenerator() {
    if (this.state.mode === "hide") {
      return null;
    } else {
      return <KeyGenerator />;
    }
  }
  renderLink() {
    if (this.state.mode === "hide") {
      return (
        <a onClick={this.handleShow} href="#" role="button">
          {this.props.linkLabel}
        </a>
      );
    } else {
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
        <form>
          <div class="form-group">
            <h1>Create Account</h1>
            <label for="account-name">{this.props.labelOne}</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={this.props.placeholderOne}
            />
            <small id="account-name" class="form-text text-muted">
              a-z,1-5 are allowed only. Length 12
            </small>
          </div>
          <div class="form-group">
            <label for="owner-public-key">{this.props.labelTwo}</label>
            <input
              type="password"
              class="form-control"
              id="owner-public-key"
              placeholder={this.props.placeholderTwo}
            />
          </div>
          <div class="form-group">
            <label for="active-public-key">{this.props.labelThree}</label>
            <input
              type="password"
              class="form-control"
              id="active-public-key"
              placeholder={this.props.placeholderThree}
            />
          </div>

          {this.renderLink()}
          {this.renderKeyGenerator()}
          <div>
            <button
              type="button"
              onClick={this.nextStep}
              class="btn btn-secondary btn-lg"
              style={{ marginTop: "10px" }}
            >
              {this.props.buttonLabel}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AccountForm.defaultProps = {
  header: "Create Account",
  labelOne: "Account Name",
  labelTwo: "Owner Public Key",
  labelThree: "Active Public Key",
  placeholderOne: "eosnairobike",
  placeholderTwo: "EOS5wGBC13yRmxwgYUkRotn46a1B45BSnJFgNeqKhXS4jnPGqtNhZ",
  placeholderThree: "EOS6LPGe3dv2HZnAD5d22rnFYwn1RZFYgyjKtgZyHWXVhEep82nDV",
  buttonLabel: "Next",
  linkLabel: "Don't have an owner key and public key?"
};

export default AccountForm;
