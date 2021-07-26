import React from 'react';
import { useHistory } from 'react-router-dom';

import './RegisterForm.scss';

const BASE_URL = 'http://localhost:3500';

const RegisterForm = () => {
  const history = useHistory();

  const submitForm = async (ev) => {
    ev.preventDefault();

    const { userName, email, password } = ev.target;

    // if (!userName.value || !email.value || !password.value) {
    //   return console.log('Faltan campos');
    // }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName: userName.value, email: email.value, password: password.value }),
      credentials: 'include',
    };

    try {
      const us = await fetch(`${BASE_URL}/auth/register`, requestOptions);
      const usData = await us.json();

      console.log('respuesta fetch REGISTRO', usData);

      if (!usData.status || usData !== {}) {
        history.push('/login');
      }
    } catch (error) {
      console.log('Error en el fetch', error.message);
    }
  };

  return (
    <div className='register-container'>
      <div className='register-container__main'>
        <h2>Creek Finder</h2>
        <form onSubmit={submitForm} className='register-container__form'>
          <label>
            <p>Nombre de usuario</p>
            <input type='text' name='userName' />
          </label>
          <label>
            <p>Email</p>
            <input type='email' name='email' />
          </label>
          <label>
            <p>Contraseña</p>
            <input type='password' name='password' />
          </label>
          <button className='btn btn-outline-primary'>Registrate!</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
