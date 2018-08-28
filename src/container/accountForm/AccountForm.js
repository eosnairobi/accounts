import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../../components/common/Modal";
import AccountDetails from "../../components/accountDetails/AccountDetails";
import KeyGenerator from "../../components/keyGenerator/KeyGenerator";
import actions from "../../store/actions";

const MapStateToProps = state => {
  return {
    accountName: state.accountName,
    ownerPublicKey: state.ownerPublicKey,
    activePublicKey: state.activePublicKey,
    showModal: state.showModal,
    showKeyGen: state.showKeyGen
  };
};

const MapDispatchToProps = dispatch => {
  return {
    onHandleInputChange: function(value) {
      dispatch(actions.handleInputChange());
    },
    onShowModal: function() {
      dispatch(actions.showModal());
    },
    onShowKeygen: function() {
      dispatch(actions.showKeyGen());
    }
  };
};

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: "",
      ownerPublicKey: "",
      activePublicKey: "",
      showModal: false,
      showKeyGen: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }
  showModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  nextStep = event => {
    event.preventDefault();
    this.showModal();
    this.props.nextStep();
  };
  prevStep = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  handleShow() {
    this.setState({ showKeyGen: "show" });
  }
  handleHide() {
    this.setState({ showKeyGen: "hide" });
  }
  renderKeyGenerator() {
    if (this.state.showKeyGen === "hide") {
      return null;
    } else {
      return <KeyGenerator />;
    }
  }
  renderLink() {
    if (this.state.showKeyGen === "hide") {
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
        <Modal showModal={this.state.showModal}>
          Confirm that you have saved your public and private keys
        </Modal>
        <h1>Account Details</h1>
        <br />
        <AccountDetails
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
        <button
          type="button"
          className="btn btn-link"
          onClick={this.props.onShowKeygen}
          style={{ paddingLeft: "0px" }}
        >
          Don't have a owner public key or active public key?
        </button>
        <KeyGenerator />
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
            onClick={this.props.onShowModal}
            floated="right"
            type="button"
            className="btn btn-secondary btn-sm float-right"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Next
          </button>
          <button
            onClick={this.showModal}
            floated="right"
            type="button"
            className="btn btn-secondary btn-sm float-right"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Show
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AccountForm);
