import React, { useState } from 'react';
import UserEdit from '../../components/UserEdit/UserEdit'
import UserProfile from '../../components/UserProfile/UserProfile'

import './UserPanel.scss'

const UserPanel = () => {
  return (
    <div>
      <UserEdit />
      <UserProfile />
    </div>
  );
};

export default UserPanel;
