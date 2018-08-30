import React, { Component } from "react";
import { Link } from "react-router-dom";

class GeneralPage extends Component {
  nextStep = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  prevStep = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div
        class="container"
        style={{
          paddingTop: "60px"
        }}
      >
        <h1>General Information</h1>
        <br />
        <h2>Account</h2>
        <p>
          This blog post shows a few different types of content that's supported
          and styled with Bootstrap. Basic typography, images, and code are all
          supported.
        </p>
        <h2>Wallet</h2>
        <p>
          This blog post shows a few different types of content that's supported
          and styled with Bootstrap. Basic typography, images, and code are all
          supported.
        </p>
        <h2>keys</h2>
        <p>
          This blog post shows a few different types of content that's supported
          and styled with Bootstrap. Basic typography, images, and code are all
          supported.
        </p>
        <div>
          <Link to="/">
            <button
              onClick={this.props.prevStep}
              floated="left"
              type="button"
              class="btn btn-secondary "
            >
              Previous
            </button>
          </Link>
          <Link to="/account-info">
            <button
              onClick={this.props.nextStep}
              floated="right"
              type="button"
              class="btn btn-secondary float-right"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default GeneralPage;
