import React, { Component } from "react";

class AccountForm extends Component {
  render() {
    return (
      <div>
        <div class="form-group">
          <label for="account-name">{this.props.labelOne}</label>
          <input
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
            class="form-control"
            id="owner-public-key"
            placeholder={this.props.placeholderTwo}
          />
        </div>
        <div class="form-group">
          <label for="active-public-key">{this.props.labelThree}</label>
          <input
            class="form-control"
            id="active-public-key"
            placeholder={this.props.placeholderThree}
          />
        </div>
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
  buttonLabel: "Next"
};

export default AccountForm;
