import React, { Component } from "react";
import { Link } from "react-router-dom";

class StartPage extends Component {
  render() {
    return (
      <header
        className="center-block d-flex text-center"
        style={{
          paddingTop: "300px"
        }}
      >
        <div className="container ">
          <h1 className="mb-1">Eos Accounts</h1>
          <h3 className="mb-5">
            <em>Create your own eos account</em>
          </h3>
          <Link to="/general-info">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginRight: "20px" }}
              onClick={this.props.nextStep}
            >
              Get Started
            </button>
          </Link>

          <Link to="/account-info">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.skipStep}
            >
              Skip to Accout Creation
            </button>
          </Link>
        </div>
        <div className="overlay" />
      </header>
    );
  }
}

export default StartPage;
