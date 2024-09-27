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
  const genderOptions = [
    { key: "Female", value: "female" },
    { key: "Male", value: "male" },
    { key: "Others", value: "others" },
  ];
  const mealOptions = [
    { key: "Pizza", value: "pizza" },
    { key: "Burger", value: "burger" },
    { key: "Coke", value: "coke" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    gender: "",
    meal: [],
    date: new Date(),
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    meal: Yup.array()
      .min(1, "At least one meal must be selected")
      .required("Required"),
    date: Yup.date().required("Required"),
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

          <FormikControl
            control="radio"
            label="Select gender"
            name="gender"
            options={genderOptions}
          />

          <FormikControl
            control="checkbox"
            label="Select Meal"
            name="meal"
            options={mealOptions}
          />

          <FormikControl control="date" label="Select Date" name="date" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
