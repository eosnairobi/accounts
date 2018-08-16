import React, { Component } from "react";

class StartPage extends Component {
  nextStep = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  skipStep = event => {
    event.preventDefault();
    this.props.skipStep();
  };
  render() {
    return (
      <header
        class="center-block d-flex text-center"
        style={{
          paddingTop: "300px"
        }}
      >
        <div class="container ">
          <h1 class="mb-1">Eos Accounts</h1>
          <h3 class="mb-5">
            <em>Create your own eos account</em>
          </h3>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ marginRight: "20px" }}
            onClick={this.props.nextStep}
          >
            Get Started
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.skipStep}
          >
            Skip to Accout Creation
          </button>
        </div>
        <div class="overlay" />
      </header>
    );
  }
}

export default StartPage;
