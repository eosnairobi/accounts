import React from "react";

const InputForm = ({label, placeholder, smallText}) => {
  return (
    <div class="form-group">
      <label for="account-name">{label}</label>
      <input
        class="form-control"
        placeholder={placeholder}
      />
      <small class="form-text text-muted">
        {smallText}
      </small>
    </div>
  );
};

export default InputForm;
