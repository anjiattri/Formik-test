import { ErrorMessage, Field } from "formik";
import React from "react";
import TextErrorMessage from "./TextErrorMessage";
export default function RadioButton(props) {
  const { name, options, label, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}> {label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextErrorMessage} />
    </div>
  );
}
