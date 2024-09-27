import React from "react";
import { Field, ErrorMessage } from "formik";
import TextErrorMessage from "./TextErrorMessage";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={label}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextErrorMessage} />
    </div>
  );
}

export default Input;
