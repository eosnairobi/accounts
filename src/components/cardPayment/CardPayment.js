import React, { Component } from "react";

class CardPayment extends Component {
  render() {
    return (
      <div style={{ paddingTop: "20px" }}>
        <div class="row">
          <div class="mb-3 col-md-6">
            <label>Credit card number</label>
            <input class="form-control" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input class="form-control" />
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-ccv">CCV</label>
            <input class="form-control" />
          </div>
        </div>
      </div>
    );
  }
}

export default CardPayment;
