import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm'

const Register = ({ showFooter }) => {
  showFooter(true);
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Register;
