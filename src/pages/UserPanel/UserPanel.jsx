import React, { useState } from 'react';
import UserEdit from '../../components/UserEdit/UserEdit';
import UserProfile from '../../components/UserProfile/UserProfile';

import './UserPanel.scss';

const UserPanel = () => {
  const [edit, setEdit] = useState(false)
  const showEdit = () => {
    setEdit(!edit)
  }
  return (
    <div>
      {!edit && (
        <UserProfile />
      )}

      {edit && (
        <UserEdit />
      )}
      <button onClick={showEdit}>{edit ? 'Cancelar' : 'Editar'}</button>
    </div>
  );
};

export default UserPanel;
