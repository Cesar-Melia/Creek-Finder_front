import React from 'react'

import './RegisterForm.scss'

const RegisterForm = () => {
  return (
    <div className="register-container">
      <div className="register-container__main">
        <h2>Creek Finder</h2>
        <form className="register-container__form">
          <label>
            <p>Nombre de usuario</p>
            <input type="text" name="userName" />
          </label>
          <label>
            <p>Email</p>
            <input type="email" name="email" />
          </label>
          <label>
            <p>Contraseña</p>
            <input type="password" name="password" />
          </label>
          <button className="btn btn-outline-primary">Registrate!</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm