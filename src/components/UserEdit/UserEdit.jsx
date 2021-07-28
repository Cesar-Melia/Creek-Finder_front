import React, { useState } from 'react';
import { useContext } from 'react'
import { UserContext } from '../../App';

import './UserEdit.scss'

const UserEdit = () => {
  const { user } = useContext(UserContext);
  const BASE_URL = 'http://localhost:3500';


  const [imgPreview, setImgPreview] = useState(null);

  const sendUserToApi = async form => {
    const requestOptions = {
      method: 'PUT',
      headers: {},
      body: form,
      credentials: 'include',
    };

    return await fetch(`${BASE_URL}/users/edit/logged`, requestOptions);
  };

  const setPreview = event => {
    const img = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImgPreview(reader.result);
    };

    reader.readAsDataURL(img);
  };

  const submitForm = event => {

    const form = new FormData();
    form.append('userName', event.target.userName.value);
    form.append('password', event.target.password.value);
    form.append('email', event.target.email.value);
    form.append('img', event.target.img.files[0]);

    sendUserToApi(form);
    console.log(event);
  };

  return (
    <div class="form-container">
      {user && (
        <form
          onSubmit={submitForm}
          encType='multipart/form-data'
          class="form-container__box"
        >


          {imgPreview ? <img src={imgPreview} alt='preview' class="form-container__img" /> : <img src={user.img} alt='imagenUsuario' class="form-container__img" />}

          <input type='text' name='userName' defaultValue={user.userName} maxlength="15" />
          <input type='password' name='password' placeholder="Nueva Contraseña" minlength="8" pattern="(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*" title="Tu contraseña tiene que tener 8 caracteres ( 1 mayuscula y  1 numero)" />
          <input type='email' name='email' defaultValue={user.email} />
          <input type='file' name='img' onChange={setPreview} />
          <input type='submit' value='Editar' class="button" />

        </form>
      )}
    </div>
  );
};

export default UserEdit;
