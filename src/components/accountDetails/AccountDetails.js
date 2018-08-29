import React from "react";
import InputForm from "../common/InputForm";

const AccountDetails = props => {
  return (
    <div>
      <InputForm
        name="accountName"
        label="Account Name"
        placeholder="eosnairobike"
        smallText="a-z,1-5 are allowed only. Length 12"
        value={props.value.accountName}
        onChange={props.handleInputChange}
      />
      <InputForm
        name="ownerPublicKey"
        label="Owner Public Key"
        placeholder="EOS5wGBC13yRmxwgYUkRotn46a1B45BSnJFgNeqKhXS4jnPGqtNhZ"
        value={props.value.ownerPublicKey}
        onChange={props.handleInputChange}
      />
      <InputForm
        name="activePublicKey"
        label="Active Public Key"
        placeholder="EOS6LPGe3dv2HZnAD5d22rnFYwn1RZFYgyjKtgZyHWXVhEep82nDV"
        value={props.value.activePublicKey}
        onChange={props.handleInputChange}
      />
    </div>
  );
};

export default AccountDetails;
