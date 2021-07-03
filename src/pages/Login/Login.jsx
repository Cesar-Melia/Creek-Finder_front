import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.scss';

const Login = () => {
  return (
    <main>
      <div className='wrapper'>
        <div className='wave'></div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
