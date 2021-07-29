import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.scss';

const Login = ({ showFooter }) => {
  showFooter(true);
  return (
    <main class="container-login">
      {/* <div className='wrapper'>
        <div className='wave'></div>
        
      </div> */}
      <LoginForm />
    </main>
  );
};

export default Login;
