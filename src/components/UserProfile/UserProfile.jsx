import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  // useEffect(() => {
  //   getUser();
  // }, [])

  // const getUser = () => {
  //   const user = useContext(UserContext);
  // }

  return (
    <div>
      {user && (
        <div>
          <p>hola</p>
          <img src={user.img} alt={user.userName} />
          <h3>{user.userName}</h3>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <p>{user.favorites}</p>
        </div>
      )}
    </div>
  )
}

export default UserProfile