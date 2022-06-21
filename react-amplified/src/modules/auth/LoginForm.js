import { Link } from "react-router-dom";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginFormValidateSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please provide an email address."),
  password: Yup.string()
    .required("Please provide a password.")
    .min(6, "Your password must be at least 6 characters long."),
});

export default function LoginForm({ setFormType }) {
  const formHandlers = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormValidateSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    // TODO: Remove as it blocks the display of LoginForm
    // <div className="authentication-box d-md-block d-lg-none">
    <div className="authentication-box d-md-block">
      <h4>Sign IN</h4>
      <form id="login-form" noValidate onSubmit={formHandlers.handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="emailInput"
            placeholder="Email address"
            className="form-control"
            onChange={formHandlers.handleChange}
            onBlur={formHandlers.handleBlur}
            value={formHandlers.values.email}
          />
          {formHandlers.touched.email && formHandlers.errors.email ? (
            <label className="error">{formHandlers.errors.email}</label>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={formHandlers.handleChange}
            onBlur={formHandlers.handleBlur}
            value={formHandlers.values.password}
          />
          {formHandlers.touched.password && formHandlers.errors.password ? (
            <label className="error">{formHandlers.errors.password}</label>
          ) : null}
        </div>
        <span className="forgot-pwd" onClick={() => setFormType("recover")}>
          Forgot your password?
        </span>
        <div>
          <button type="submit" className="primary-btn">
            Submit
          </button>
        </div>
      </form>
      <p>
        Don't have a account?{" "}
        <span
          to=""
          className="register-link"
          onClick={() => setFormType("register")}
        >
          Sign UP
        </span>
      </p>
    </div>
  );
}
