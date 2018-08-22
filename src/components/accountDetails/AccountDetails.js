import React, { Component } from "react";
import InputForm from "../common/InputForm";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = { accountName: "", ownerPublicKey: "", activePublicKey: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <InputForm
          name="accountName"
          label="Account Name"
          placeholder="eosnairobike"
          smallText="a-z,1-5 are allowed only. Length 12"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <InputForm
          name="ownerPublicKey"
          label="Owner Public Key"
          placeholder="EOS5wGBC13yRmxwgYUkRotn46a1B45BSnJFgNeqKhXS4jnPGqtNhZ"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <InputForm
          name="activePublicKey"
          label="Active Public Key"
          placeholder="EOS6LPGe3dv2HZnAD5d22rnFYwn1RZFYgyjKtgZyHWXVhEep82nDV"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default AccountForm;
