import React from "react";
import { Authenticator } from '@aws-amplify/ui-react';

const formFields = {
  signUp: {
    given_name: {
      order: 1,
      label: 'First name', // TODO: implement i18n
      placeholder: 'First name', // TODO: implement i18n
      labelHidden: false,
      isRequired: true,
    },
    family_name: {
      order: 2,
      label: 'Last name', // TODO: implement i18n
      placeholder: 'Last name', // TODO: implement i18n
      labelHidden: false,
      isRequired: true,
    },
    email: {
      order: 3,
      labelHidden: false,
      isRequired: true,
    },
    phone_number: {
      order: 3,
      labelHidden: false,
      isRequired: false,
    },
    password: {
      order: 4,
      labelHidden: false,
      isRequired: true,
    },
    confirm_password: {
      order: 5,
      labelHidden: false,
      isRequired: true,
    },
  }
};

export default function CognitoAuthForm({setFormType, formType}) {
  return (
  <div className="authentication-box d-md-block">
    <h4>Sign IN</h4>
    <Authenticator formFields={formFields} loginMechanisms={['email']} signUpAttributes={['family_name', 'given_name']}></Authenticator>
    <p>
      Don't have a account?{" "}
      <span
        to=""
        className="register-link"
        onClick={() => setFormType("signUp")}
      >
          Sign UP
        </span>
    </p>
  </div>
  );
}
