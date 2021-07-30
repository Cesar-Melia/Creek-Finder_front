import React, { useState, useContext } from 'react';
import { editUser } from '../../api/user.api';
import { UserContext } from '../../App';

import './UserEdit.scss';

const UserEdit = () => {
  const { user } = useContext(UserContext);

  const [imgPreview, setImgPreview] = useState(null);

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

    editUser(form);
    console.log(event);
  };

  return (
    <div class='form-container'>
      {user && (
        <form onSubmit={submitForm} encType='multipart/form-data' class='form-container__box'>
          {imgPreview ? (
            <img src={imgPreview} alt='preview' class='form-container__img' />
          ) : (
            <img src={user.img} alt='imagenUsuario' class='form-container__img' />
          )}

          <input
            type='text'
            name='userName'
            defaultValue={user.userName}
            maxlength='15'
            className='form-container__input'
          />
          <input
            type='password'
            name='password'
            placeholder='Nueva Contraseña'
            className='form-container__input'
            minlength='8'
            pattern='(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*'
            title='Tu contraseña tiene que tener 8 caracteres ( 1 mayuscula y  1 numero)'
          />
          <input type='email' name='email' defaultValue={user.email} className='form-container__input' />

          <label className='form-container__input-file'>
            <p className='form-container__name'>Seleccionar Imagen</p>
            <input type='file' name='img' onChange={setPreview} className='form-container__input' />
          </label>

          <input type='submit' value='Editar' class='button' className='form-container__button' />
        </form>
      )}
    </div>
  );
};

export default UserEdit;
