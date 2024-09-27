import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropDownOptions = [
    { key: "Select", value: "" },
    { key: "Maths", value: "maths" },
    { key: "English", value: "english" },
    { key: "Hindi", value: "hindi" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log("on submit", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            label="Email"
            name="email"
            type="email"
          />

          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />

          <FormikControl
            control="select"
            label="Select a Topic"
            name="selectOption"
            options={dropDownOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
