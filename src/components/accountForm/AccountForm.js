import React, { Component } from "react";

import AccountDetails from "../accountDetails/AccountDetails";
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
  prevStep = event => {
    event.preventDefault();
    this.props.prevStep();
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
        <button
          type="button"
          class="btn btn-link"
          onClick={this.handleShow}
          style={{ paddingLeft: "0px" }}
        >
          Don't have a owner public key or active public key?
        </button>
      );
    } else {
      return (
        <button
          type="button"
          class="btn btn-link"
          style={{ paddingLeft: "0px" }}
          onClick={this.handleHide}
        >
          Hide
        </button>
      );
    }
  }
  render() {
    return (
      <div
        class="container"
        style={{
          paddingTop: "60px"
        }}
      >
        <h1>Account Details</h1>
        <br />
        <AccountDetails />
        {this.renderLink()}
        {this.renderKeyGenerator()}
        <div>
          <button
            onClick={this.props.prevStep}
            floated="left"
            type="button"
            class="btn btn-secondary btn-sm"
          >
            Previous
          </button>
          <button
            onClick={this.props.nextStep}
            floated="right"
            type="button"
            class="btn btn-secondary btn-sm float-right"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default AccountForm;
