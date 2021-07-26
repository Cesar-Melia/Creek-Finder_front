import React from 'react'

import './InputComment.scss'

const InputComment = () => {
  return (
    <div className="input-comment-box">
      <form className="input-comment-box__form">
        <label className="input-comment-box__label">
          <input type="text" name="comment" placeholder="Añade un comentario" className="input-comment-box__input" />
        </label>
        <button className='btn btn-outline-primary' >COMENTAR</button>
      </form>
    </div>
  )
}

export default InputComment