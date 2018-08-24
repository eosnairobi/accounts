import React from "react";
import InputForm from "../common/InputForm";

const AccountDetails = ({ handleInputChange, value }) => {
  return (
    <div>
      <InputForm
        name="accountName"
        label="Account Name"
        placeholder="eosnairobike"
        smallText="a-z,1-5 are allowed only. Length 12"
        value={value}
        onChange={handleInputChange}
      />
      <InputForm
        name="ownerPublicKey"
        label="Owner Public Key"
        placeholder="EOS5wGBC13yRmxwgYUkRotn46a1B45BSnJFgNeqKhXS4jnPGqtNhZ"
        value={value}
        onChange={handleInputChange}
      />
      <InputForm
        name="activePublicKey"
        label="Active Public Key"
        placeholder="EOS6LPGe3dv2HZnAD5d22rnFYwn1RZFYgyjKtgZyHWXVhEep82nDV"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AccountDetails;
