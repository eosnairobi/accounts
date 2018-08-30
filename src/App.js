import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import StartPage from "./container/startPage/StartPage";
import GeneralInfoPage from "./container/generalPage/GeneralPage";
import AccountPage from "./container/accountForm/AccountForm";
import CheckoutPage from "./container/checkoutForm/CheckoutForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/general-info" component={GeneralInfoPage} />
          <Route path="/account-info" component={AccountPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
