import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

import '../../assets/styles/b-form.styles.scss';

const BASE_URL = 'http://localhost:3500';

const LoginForm = () => {
  const { saveUser } = useContext(UserContext);
  const history = useHistory();

  const submitForm = async ev => {
    ev.preventDefault();

    const { email, password } = ev.target;

    if (!email.value || !password.value) {
      return console.log('Faltan campos');
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
      credentials: 'include',
    };

    try {
      const us = await fetch(`${BASE_URL}/auth/login`, requestOptions);
      const usData = await us.json();

      console.log(us);
      console.log('respuesta fetch', usData);

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
        <h2 className='b-form__title'>Login</h2>
        <form onSubmit={submitForm} className='b-form__form'>
          <label>
            <p className='b-form__name'>Email</p>
            <input type='email' name='email' className='b-form__input' />
          </label>
          <label>
            <p className='b-form__name'>Contraseña</p>
            <input type='password' name='password' className='b-form__input' />
          </label>
          <button type='submit' className='b-form__button'>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
