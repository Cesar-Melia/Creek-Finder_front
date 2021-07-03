import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import './LoginForm'

const BASE_URL = 'http://localhost:3500';
const LoginForm = () => {
  const history = useHistory();
  const submitForm = async (ev) => {
    ev.preventDefault()
    const { email, password } = ev.target
    const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.value, password: password.value }) }
    const us = await fetch(`${BASE_URL}/auth/login`, requestOptions)
    const usData = await us.json()
    console.log('respuesta fetch', usData)
    history.push('/')
  }
  return (
    <div className="form-container">
      <h2>Creek Finder</h2>
      <form onSubmit={submitForm}>
        <label >
          <p>Email</p>
          <input type="email" name="email" />
        </label>
        <label >
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>

  )
}

export default LoginForm