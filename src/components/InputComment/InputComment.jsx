import React from 'react'

import './InputComment.scss'
const BASE_URL = 'http://localhost:3500';
const InputComment = ({ creekId, setSwitcherComent }) => {

  const submitForm = async (ev) => {
    ev.preventDefault();
    const { comment } = ev.target;

    if (!comment) {
      console.log('primero escribe un comentario')
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: comment.value }),
      credentials: 'include',
    };

    try {
      const newComment = await fetch(`${BASE_URL}/comments/create/${creekId}`, requestOptions)
      const commentData = await newComment.json()

      console.log('respuesta fetch comments', commentData)
      comment.value = '';
    } catch (error) {
      console.log(error)
    }
    setSwitcherComent();

  }

  return (
    <div className="input-comment-box">
      <form onSubmit={submitForm} className="input-comment-box__form">
        <label className="input-comment-box__label">
          <input type="text" name="comment" placeholder="Añade un comentario" className="input-comment-box__input" />
        </label>
        <button type="submit" className='btn btn-outline-primary' >COMENTAR</button>
      </form>
    </div>
  )
}

export default InputComment