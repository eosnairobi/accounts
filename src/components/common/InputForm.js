import React from "react";

const InputForm = ({
  label,
  placeholder,
  smallText,
  value,
  onChange,
  name
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <small className="form-text text-muted">{smallText}</small>
    </div>
  );
};

export default InputForm;
