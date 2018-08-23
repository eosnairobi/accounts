import React, { Component } from "react";
import ecc from "eosjs-ecc";
import ReactJson from "react-json-view";

class KeyGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { PrivateKey: "", PublicKey: "" };
    this.generateNewKeys = this.generateNewKeys.bind(this);
    this.saveToPdf = this.saveToPdf.bind(this);
  }
  generateNewKeys = event => {
    ecc.randomKey().then(privateKey => {
      let publicKey = ecc.privateToPublic(privateKey);
      this.setState({ PrivateKey: privateKey, PublicKey: publicKey });
    });
  };
  saveToPdf = event => {
    let jsPDF = require("jspdf");
    let doc = new jsPDF("potrait");
    let publicKeys = JSON.stringify(this.state.PublicKey);
    let privateKeys = JSON.stringify(this.state.PrivateKey);
    doc.text(20, 20, "Public Key");
    doc.text(20, 30, publicKeys);
    doc.text(20, 50, "Private Key");
    doc.text(20, 60, privateKeys);
    doc.save("a4.pdf");
  };

  render() {
    return (
      <div>
        <div className="btn-toolbar">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={this.generateNewKeys}
            style={{ marginRight: "13px", marginTop: "5px" }}
          >
            Generate New Keys
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ marginTop: "8px" }}
            onClick={this.saveToPdf}
          >
            Save to Pdf
          </button>
        </div>
        <br />
        <ReactJson
          displayDataTypes={false}
          displayObjectSize={false}
          iconStyle="square"
          name={null}
          src={this.state}
          style={{
            padding: "1em",
            overflow: "hidden",
            marginBottom: "10px"
          }}
          theme="rjv-default"
        />
      </div>
    );
  }
}

export default KeyGenerator;
