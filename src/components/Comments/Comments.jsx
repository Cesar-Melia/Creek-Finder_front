import React, { useEffect } from 'react'

import './Comments.scss'
const BASE_URL = 'http://localhost:3500';
const Comments = ({ creek }) => {

  const comments = creek.comments
  return (
    <div>
      {
        comments.map((comment) => {
          return (
            <div>{comment.text}</div>
          )
        })
      }
    </div>
  )
}

export default Comments