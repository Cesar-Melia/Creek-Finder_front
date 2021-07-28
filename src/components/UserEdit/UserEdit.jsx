import React, { useState } from 'react';

const UserEdit = () => {
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
    // const form = {
    //   userName: event.target.userName.value,
    //   img: event.target.img.value,
    // };

    const form = new FormData();
    form.append('userName', event.target.userName.value);
    form.append('img', event.target.img.files[0]);

    sendUserToApi(form);
    console.log(event);
  };

  return (
    <form onSubmit={submitForm} style={{ marginTop: '200px' }} encType='multipart/form-data'>
      <input type='text' name='userName' />
      <input type='file' name='img' onChange={setPreview} />
      <input type='submit' value='Enviar' />

      {imgPreview && <img src={imgPreview} alt='preview' />}
    </form>
  );
};

export default UserEdit;
