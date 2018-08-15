import React, { Component } from "react";
import ecc from "eosjs-ecc";
import ReactJson from "react-json-view";
import clipboard from "clipboard";

class KeyGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { keys: [] };
    this.generateNewKeys = this.generateNewKeys.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.saveToPdf = this.saveToPdf.bind(this);
  }
  generateNewKeys() {
    const keys = this.state.keys;
    ecc.randomKey().then(privateKey => {
      let publicKey = ecc.privateToPublic(privateKey);
      // keys.push({ private: publicKey, public: privateKey });
      keys.privateKeys = privateKey;
      keys.publicKeys = publicKey;
      this.setState({
        keys
      });
      console.log("Private " + keys.privateKeys);
      console.log("Public " + keys.publicKeys);
    });
  }
  saveToPdf() {
    var keys = this.state.keys.slice(0);
    var keysObj = {};
    let copyPrivateKey = document.getElementById("privateKey").value;
    let copyPublicKey = document.getElementById("publicKey").value;
    keys.PrivateKey = copyPrivateKey;
    keys.PublickKey = copyPublicKey;
    var jsPDF = require("jspdf");
    console.log(copyPrivateKey);
    console.log(copyPublicKey);
    var doc = new jsPDF();
    keysObj.privateKey = copyPrivateKey;
    keysObj.publicKey = copyPublicKey;
    var finalKeys = JSON.stringify(keysObj);
    // keys = JSON.stringify(keys);
    console.log("Keys " + finalKeys);
    doc.text(finalKeys, 10, 10);
    doc.save("a4.pdf");
  }
  copyToClipboard() {
    const keys = this.state.keys.slice(0);

    let copyPrivateKey = document.getElementById("privateKey").value;
    let copyPublicKey = document.getElementById("publicKey").value;
    keys.PrivateKey = copyPrivateKey;
    keys.PublickKey = copyPublicKey;

    // keys.push([copyPrivateKey]);

    console.log(keys);

    // var copyText = {};
    // let copyPrivateKey = document.querySelector("#privateKey");
    // // console.log(copyPrivateKey);

    // let copyPublicKey = document.querySelector("#publicKey");

    // //set the private key to the private of copyText object
    // copyText.priivate = copyPrivateKey.value;

    // // Let's go to the public key now

    // copyText.public = copyPublicKey.value;

    // console.log(copyPrivateKey.value);
    // console.log(copyText);

    // // Convert obj to string
    // var text = JSON.stringify(copyText);

    // var textArea = document.createElement("textarea");

    // textArea.value = text;

    // document.body.appendChild(textArea);
    // textArea.focus();
    // textArea.select();

    // try {
    //   var successful = document.execCommand("copy");
    //   var msg = successful ? "successful" : "unsuccessful";
    //   console.log("Copying text command was " + msg);
    // } catch (err) {
    //   console.log("Oops, unable to copy");
    // }

    // document.body.removeChild(textArea);
  }

  render() {
    const { keys } = this.state;
    const publicKey = this.state.keys.publicKeys;
    const privateKey = this.state.keys.privateKeys;

    return (
      <div>
        <div class="btn-toolbar">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            onClick={this.generateNewKeys}
            style={{ marginRight: "13px", marginTop: "10px" }}
          >
            {this.props.button1}
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            style={{ marginTop: "10px", marginRight: "13px" }}
            onClick={this.copyToClipboard}
          >
            {this.props.button2}
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            style={{ marginTop: "10px" }}
            onClick={this.saveToPdf}
          >
            {this.props.button3}
          </button>
        </div>
        <br />
        <div class="form-group">
          <label for="public-key">Public Key</label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={publicKey}
          />
        </div>
        <div class="form-group">
          <label for="private-key">Private Key</label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={this.props.placeholderOne}
            value={privateKey}
          />
        </div>
      </div>
    );
  }
}

KeyGenerator.defaultProps = {
  header: "Key pair Generator",
  button1: "Generate Keys",
  button2: "Copy to Clipboard",
  button3: "Save to pdf",
  segment: "Have you ever seen anything so full of spleandor?"
};

export default KeyGenerator;
