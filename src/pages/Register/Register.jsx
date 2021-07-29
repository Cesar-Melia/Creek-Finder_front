import React from 'react';
import { RegisterForm } from '../../components';

import './Register.scss'

const Register = ({ showFooter }) => {
  showFooter(true);
  return (
    <div class="register-top-container">
      <RegisterForm />
    </div>
  );
};

export default Register;
