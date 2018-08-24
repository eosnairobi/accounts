import React, { Component } from "react";
import Modal from "../../components/common/Modal";
import AccountDetails from "../../components/accountDetails/AccountDetails";
import KeyGenerator from "../../components/keyGenerator/KeyGenerator";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: "",
      ownerPublicKey: "",
      activePublicKey: "",
      modalMode: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }
  showModal = () => {
    this.setState({ modalMode: true });
  };
  hideModal = () => {
    this.setState({ modalMode: false });
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  nextStep = event => {
    console.log("my name e jeff");
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
          className="btn btn-link"
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
          className="btn btn-link"
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
        className="container"
        style={{
          paddingTop: "60px"
        }}
      >
        <Modal show={this.state.modalMode} handleClose={this.hideModal} />
        <h1>Account Details</h1>
        <br />
        <AccountDetails
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
        {this.renderLink()}
        {this.renderKeyGenerator()}
        <div>
          <button
            onClick={this.props.prevStep}
            floated="left"
            type="button"
            className="btn btn-secondary btn-sm"
          >
            Previous
          </button>
          <button
            onClick={this.nextStep}
            floated="right"
            type="button"
            className="btn btn-secondary btn-sm float-right"
          >
            Next
          </button>
          <button
            onClick={this.showModal}
            floated="right"
            type="button"
            className="btn btn-secondary btn-sm float-right"
          >
            Show
          </button>
        </div>
      </div>
    );
  }
}

export default AccountForm;
