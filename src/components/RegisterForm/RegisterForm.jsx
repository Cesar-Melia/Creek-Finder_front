import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

import '../../assets/styles/b-form.styles.scss';

const BASE_URL = 'http://localhost:3500';

const RegisterForm = () => {
  const { saveUser } = useContext(UserContext);
  const history = useHistory();

  const submitForm = async ev => {
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

      if (us.ok) {
        saveUser(usData);
        history.push('/');
      }
    } catch (error) {
      console.log('Error en el fetch', error.message);
    }
  };

  return (
    <div className='b-form'>
      <div className='b-form__main'>
        <h2 className='b-form__title'>Registro</h2>
        <form onSubmit={submitForm} className='b-form__form'>
          <label>
            <p className='b-form__name'>Nombre de usuario</p>
            <input type='text' name='userName' className='b-form__input' maxlength='15' minlength='2' required />
          </label>
          <label>
            <p className='b-form__name'>Email</p>
            <input type='email' name='email' className='b-form__input' required />
          </label>
          <label>
            <p className='b-form__name'>Contraseña</p>
            <input
              type='password'
              name='password'
              className='b-form__input'
              minlength='8'
              pattern='(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*'
              title='Tu contraseña tiene que tener 8 caracteres ( 1 mayuscula y  1 numero)'
            />
          </label>
          <button className='b-form__button'>Registrate!</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
