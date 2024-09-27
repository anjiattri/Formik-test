import { ErrorMessage, Field } from "formik";
import React from "react";
import TextErrorMessage from "./TextErrorMessage";

function TextArea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={label}>{label}</label>
      <Field id={name} name={name} {...rest} as="textarea" />
      <ErrorMessage name={name} component={TextErrorMessage} />
    </div>
  );
}

export default TextArea;
