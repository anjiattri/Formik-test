import { ErrorMessage, Field } from "formik";
import React from "react";
import TextErrorMessage from "./TextErrorMessage";

function Select(props) {
  const { name, options, label, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}> {label}</label>
      <Field name={name} id={name} {...rest} as="select">
        {options.map((option, index) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextErrorMessage} />
    </div>
  );
}

export default Select;
