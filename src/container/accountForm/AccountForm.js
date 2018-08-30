import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
  state = { showModal: false, keyGen: false };

  toggleShowKeyGen = () => {
    const showKeyGen = this.state.showKeyGen;
    this.setState({ showKeyGen: !showKeyGen });
    const showModal = this.state.showModal;
    this.setState({ showModal: !showModal });
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
        <Modal showModal={this.state.showModal}>
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
          <Link to="/general-info">
            <button
              onClick={this.props.prevStep}
              floated="left"
              type="button"
              className="btn btn-secondary btn-sm"
            >
              Previous
            </button>
          </Link>
          <Link to="/checkout">
            <button
              // onClick={this.goNext}
              floated="right"
              type="button"
              className="btn btn-secondary btn-sm float-right"
              // data-toggle="modal"
              // data-target="#exampleModalLong"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AccountForm);
