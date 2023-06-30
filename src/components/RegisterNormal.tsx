import { useFormik } from "formik";
import React from "react";
import "./RegisterNormal.css";

const RegisterNormal = () => {
  const formik = useFormik({
    initialValues: { Firstname: "", Lastname: "", Email: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors: any = {};
      if (!values.Firstname) {
        errors.Firstname = "Required";
      }
      if (!values.Lastname) {
        errors.Lastname = "Required";
      }
      if (!values.Email) {
        errors.Email = "Required";
      } else if (
        !values.Email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
      ) {
        errors.Email = "Enter a Valid Email";
      }
      return errors;
    },
  });
  return (
    <form className="form--element" onSubmit={formik.handleSubmit}>
      <label className="heading">React Formik</label>
      <div className="div--wrapper">
        <label>Firstname</label>
        <input
          type="text"
          value={formik.values.Firstname}
          name="Firstname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Firstname && <span>{formik.errors.Firstname}</span>}
      </div>
      <div className="div--wrapper">
        <label>Lastname</label>
        <input
          type="text"
          value={formik.values.Lastname}
          name="Lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Lastname && <span>{formik.errors.Lastname}</span>}
      </div>
      <div className="div--wrapper">
        <label>Email</label>
        <input
          type="text"
          value={formik.values.Email}
          name="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Email && <span>{formik.errors.Email}</span>}
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegisterNormal;
