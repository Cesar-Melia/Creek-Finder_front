import React, { useState } from 'react';
import { UserEdit, UserProfile } from '../../components';

import './UserPanel.scss';

const UserPanel = () => {
  const [edit, setEdit] = useState(false);
  const showEdit = () => {
    setEdit(!edit);
  };
  return (
    <div class='background-container'>
      {!edit && <UserProfile />}

      {edit && <UserEdit />}
      <div class='button-container'>
        <button onClick={showEdit}>{edit ? 'Cancelar' : 'Editar'}</button>
      </div>
    </div>
  );
};

export default UserPanel;
