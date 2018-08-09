import React, { Component } from "react";
import ecc from "eosjs-ecc";
import ReactJson from "react-json-view";

class KeyGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { keys: [] };
    this.generateNewKeys = this.generateNewKeys.bind(this);
  }
  generateNewKeys() {
    const keys = this.state.keys.slice(0);
    ecc.randomKey().then(privateKey => {
      let publicKey = ecc.privateToPublic(privateKey);
      keys.push([publicKey, privateKey]);
      this.setState({
        keys
      });

      console.log(this.state.publicKey);
    });
  }
  render() {
    const { keys } = this.state;

    return (
      <div style={{ marginBottom: "13px" }}>
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
            style={{ marginTop: "10px" }}
          >
            {this.props.button2}
          </button>
        </div>
        <div>
          <ReactJson
            displayDataTypes={false}
            displayObjectSize={false}
            iconStyle="square"
            name="keys"
            src={keys}
            style={{ padding: "1em", marginTop: "13px" }}
            theme="harmonic"
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
  segment: "Have you ever seen anything so full of spleandor?"
};

export default KeyGenerator;
