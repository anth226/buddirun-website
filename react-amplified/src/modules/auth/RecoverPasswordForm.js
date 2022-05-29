import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const ForgotPasswordFormValidateSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please provide an email address."),
});

export default function RecoverPasswordForm() {
  const [recoverSuccess, setRecoverSuccess] = useState(false);
  const formHandlers = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordFormValidateSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setRecoverSuccess(true);
    },
  });

  return (
    // TODO: Remove as it blocks the display of LoginForm
    // <div className="authentication-box d-md-block d-lg-none">
    <div className="authentication-box d-md-block">
      {recoverSuccess ? (
        <>
          <h4>Recover password</h4>
          <form
            id="forgot-password-form"
            noValidate
            onSubmit={formHandlers.handleSubmit}
          >
            <div className="form-group">
              <input
                type="email"
                name="email"
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
            <div>
              <button type="submit" className="primary-btn">
                Recover
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center success-box">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 25.0001C45 30.3044 42.8929 35.3915 39.1421 39.1423C35.3914 42.893 30.3043 45.0001 25 45.0001C19.6957 45.0001 14.6086 42.893 10.8579 39.1423C7.10714 35.3915 5 30.3044 5 25.0001C5 19.6958 7.10714 14.6087 10.8579 10.858C14.6086 7.10725 19.6957 5.00011 25 5.00011C26.9 5.00011 28.75 5.27511 30.5 5.77511L34.425 1.85011C31.4357 0.619026 28.2328 -0.00966617 25 0.000112338C21.717 0.000112338 18.4661 0.646757 15.4329 1.90312C12.3998 3.15949 9.6438 5.00098 7.32233 7.32244C2.63392 12.0109 0 18.3697 0 25.0001C0 31.6305 2.63392 37.9894 7.32233 42.6778C9.6438 44.9992 12.3998 46.8407 15.4329 48.0971C18.4661 49.3535 21.717 50.0001 25 50.0001C31.6304 50.0001 37.9893 47.3662 42.6777 42.6778C47.3661 37.9894 50 31.6305 50 25.0001H45ZM14.775 20.2001L11.25 23.7501L22.5 35.0001L47.5 10.0001L43.975 6.45011L22.5 27.9251L14.775 20.2001Z"
              fill="white"
            />
          </svg>
          <p className="fw-bold mt-4">Confirmation Email was sent</p>
        </div>
      )}
    </div>
  );
}
