import React, { Component } from "react";

class KeyGenerator extends Component {
  render() {
    return (
      <div style={{ marginBottom: "13px" }}>
        <div class="btn-toolbar">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
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
        <textarea
          class="form-control rounded-0"
          id="exampleFormControlTextarea1"
          rows="4"
          style={{ marginTop: "13px" }}
        />
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
