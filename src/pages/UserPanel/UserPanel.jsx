import React, { useState } from 'react';
import { UserEdit, UserProfile } from '../../components';

import './UserPanel.scss';

const UserPanel = ({ showFooter }) => {
  const [edit, setEdit] = useState(false);
  const showEdit = () => {
    setEdit(!edit);
  };
  showFooter(true)
  return (
    <div class='background-container'>
      {!edit && <UserProfile />}
      {edit && <UserEdit />}
      <div class='button-container'>
        <button onClick={showEdit} className='button'>
          {edit ? 'Cancelar' : 'Editar'}
        </button>
      </div>
    </div>
  );
};

export default UserPanel;
