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
    onHandleInputChange: function(event) {
      dispatch(actions.handleInputChange(event));
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
  render() {
    return (
      <div
        className="container"
        style={{
          paddingTop: "60px"
        }}
      >
        <Modal showModal={this.props.showModal}>
          Confirm that you have saved your public and private keys
        </Modal>
        <h1>Account Details</h1>
        <br />
        <AccountDetails
          value={this.props}
          handleInputChange={this.props.onHandleInputChange}
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
