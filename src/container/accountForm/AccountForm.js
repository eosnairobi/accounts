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
    activePublicKey: state.activePublicKey
  };
};

const MapDispatchToProps = dispatch => {
  return {
    onHandleInputChange: function(event) {
      dispatch(actions.handleInputChange(event));
    }
  };
};

class AccountForm extends Component {
  state = { showModal: false, showKeyGen: false };

  toggleShowKeyGen = () => {
    const showKeyGen = this.state.showKeyGen;
    this.setState({ showKeyGen: !showKeyGen });
  };

  render() {
    let keyGenComponent = null;
    if (this.state.showKeyGen) {
      keyGenComponent = <KeyGenerator />;
    }
    return (
      <div
        className="container"
        style={{
          paddingTop: "60px"
        }}
      >
        <Modal showModal={this.showModal}>
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
          onClick={this.toggleShowKeyGen}
          style={{ paddingLeft: "0px" }}
        >
          Don't have a owner public key or active public key?
        </button>
        {keyGenComponent}
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
