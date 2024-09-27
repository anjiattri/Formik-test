import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { Field, ErrorMessage } from "formik";
import TextErrorMessage from "./TextErrorMessage";
function DatePicker(props) {
  const { label, name, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...rest}
              {...field}
              selected={value}
              onChange={(val) => {
                setFieldValue(name, val);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextErrorMessage} />
    </div>
  );
}

export default DatePicker;
