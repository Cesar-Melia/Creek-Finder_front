import React, { useContext } from 'react';
import { UserContext } from '../../App';

import './UserProfile.scss';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  // useEffect(() => {
  //   getUser();
  // }, [])

  // const getUser = () => {
  //   const user = useContext(UserContext);
  // }

  return (
    <div class='profile-container'>
      {user && (
        <div class='profile-container__box'>
          <img src={user.img} alt={user.userName} class='profile-container__img' />
          <h3>{user.userName}</h3>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
