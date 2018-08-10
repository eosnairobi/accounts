import React, { Component } from "react";
import AccountForm from "../accountForm/AccountForm";
import PaymentForm from "../paymentForm/PaymentForm";
// import CheckoutForm from "../checkoutForm/CheckoutForm";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }
  nextStep() {
    console.log("Peter");
    this.setState({ step: this.state.step + 1 });
  }
  prevStep() {
    this.setState({ step: this.state.step - 1 });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <AccountForm nextStep={this.nextStep} />;
      case 2:
        return (
          <PaymentForm nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      //   case 3:
      //     return <CheckoutForm prevStep={this.prevStep} />;
      default:
        break;
    }
  }
}

export default Home;
