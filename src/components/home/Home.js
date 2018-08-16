import React, { Component } from "react";
import AccountForm from "../accountForm/AccountForm";
import CheckoutForm from "../checkoutForm/CheckoutForm";
import StartPage from "../startPage/StartPage";
import GeneralPage from "../generalPage/GeneralPage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.skipStep = this.skipStep.bind(this);
  }
  nextStep() {
    console.log("Peter");
    this.setState({ step: this.state.step + 1 });
  }
  prevStep() {
    this.setState({ step: this.state.step - 1 });
  }
  skipStep() {
    // var stepp =
    this.setState({ step: this.state.step + 2 });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <StartPage nextStep={this.nextStep} skipStep={this.skipStep} />;
      case 2:
        return (
          <GeneralPage nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      case 3:
        return (
          <AccountForm nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      case 4:
        return <CheckoutForm nextStep={this.nextStep} />;
      default:
        break;
    }
  }
}

export default Home;
