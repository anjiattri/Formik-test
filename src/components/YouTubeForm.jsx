import React, { useState } from "react";
import {
  Form,
  Formik,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextErrorMessage from "./TextErrorMessage";

const initialValues = {
  name: "Anjali",
  email: "anjali@gmail.com",
  channel: "test",
  comments: "comment",
  address: "",
  social: {
    facebook: "",
    instagram: "",
  },
  phoneNumber: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "Nidhi",
  email: "nidhi@gmail.com",
  channel: "test",
  comments: "comment",
  address: "address test",
  social: {
    facebook: "attri",
    instagram: "insta.attri",
  },
  phoneNumber: ["32323", "3232"],
  phNumbers: ["827382382"],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("Form Values", values, onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  channel: Yup.string().required("Required"),
  // comments: Yup.string().required("Required"),
  // address: Yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function YouTubeForm() {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount //validate on page load n populate the error so that isvalid return right value on inital render
      // validateOnChange={false} //wont populate error on change or on blur ,just on submit
      // validateOnBlur={false}
      enableReinitialize //load saved data
    >
      {(formik) => {
        console.log("formik", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextErrorMessage} />
            </div>

            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="channel"
              />
              <ErrorMessage name="channel" />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                type="text"
                id="comments"
                name="comments"
                placeholder="comments"
                as="textarea" //can also use component
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextErrorMessage} />
            </div>

            <div className="form-control">
              <label htmlFor="address">address</label>
              <FastField name="address">
                {(props) => {
                  // console.log("field", props);
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input id="address" {...field} type="text" />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="instagram">Instagram</label>
              <Field type="text" id="instagram" name="social.instagram" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone Number</label>
              <Field type="text" id="primaryPh" name="phoneNumber[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary Phone Number</label>
              <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
            </div>

            <div className="form-control">
              <label>List of phone number</label>
              <FieldArray name="phNumbers">
                {(props) => {
                  const { push, remove, form } = props;
                  const { values } = form;
                  const { phNumbers } = values;
                  // console.log("errors-->", form.errors);
                  return (
                    <div>
                      {phNumbers.map((ele, index) => {
                        return (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} type="text" />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}

                            <button
                              type="button"
                              onClick={() => {
                                push("");
                              }}
                            >
                              +
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              validate all
            </button>

            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              visit all
            </button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>

            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load saved data
            </button>
            {/* to initial value */}
            <button type="reset">Reset form data</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YouTubeForm;
