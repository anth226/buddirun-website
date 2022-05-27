import { Link } from "react-router-dom";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const RegisterFormValidateSchema = Yup.object({
  username: Yup.string().required("Please provide a username."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please provide an email address."),
  password: Yup.string()
    .required("Please provide a password.")
    .min(6, "Your password must be at least 6 characters long."),
  confirmPassword: Yup.string()
    .required("Please provide a confirm password.")
    .oneOf([Yup.ref("password")], "Confrim Password must match with Password."),
});

export default function RegisterForm() {
  const [accept, setAccept] = useState(false);

  const formHandlers = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterFormValidateSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleCheck = (e) => {
    setAccept(e.target.checked);
  };

  return (
    <div className="authentication-box d-md-block d-lg-none">
      <h4>Sign UP</h4>
      <form id="register-form" noValidate onSubmit={formHandlers.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="username"
                itemRef="username"
                placeholder="Username"
                className="form-control"
                onChange={formHandlers.handleChange}
                onBlur={formHandlers.handleBlur}
                value={formHandlers.values.username}
              />
              {formHandlers.touched.username && formHandlers.errors.username ? (
                <label className="error">{formHandlers.errors.username}</label>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="form-control"
                onChange={formHandlers.handleChange}
                onBlur={formHandlers.handleBlur}
                value={formHandlers.values.email}
              />
              {formHandlers.touched.email && formHandlers.errors.email ? (
                <label className="error">{formHandlers.errors.email}</label>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
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
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                className="form-control"
                onChange={formHandlers.handleChange}
                onBlur={formHandlers.handleBlur}
                value={formHandlers.values.confirmPassword}
              />
              {formHandlers.touched.confirmPassword &&
              formHandlers.errors.confirmPassword ? (
                <label className="error">
                  {formHandlers.errors.confirmPassword}
                </label>
              ) : null}
            </div>
          </div>
        </div>
        <div className="terms-and-conditions d-flex flex-row align-items-center mt-2">
          <input type="checkbox" onChange={(e) => handleCheck(e)} />
          <p>
            Accept Buddi Run{" "}
            <Link to="" className="terms-link">
              Terms and Conditions
            </Link>
          </p>
        </div>
        <div>
          <button type="submit" className="primary-btn">
            Submit
          </button>
        </div>
      </form>
      {!accept && (
        <p>
          An email has been sent to the provided email address, click on the
          enclosed link to verify yourself.
        </p>
      )}
    </div>
  );
}
