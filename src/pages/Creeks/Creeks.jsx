import { useState, useContext, useEffect } from 'react';
import { CreekList, CreekFilterNav } from '../../components';
import { UserContext } from '../../App';

import './Creeks.scss';

const Creeks = ({ showFooter }) => {
  const { creeks } = useContext(UserContext);
  const [creeksSelection, setCreeksSelection] = useState([]);

  showFooter(true);

  const setNewSelection = selectedCreeks => {
    setCreeksSelection(selectedCreeks);
  };

  useEffect(() => {
    if (creeks) {
      setCreeksSelection(creeks);
    }
  }, []);

  return (
    <main>
      <div className='creeks'>
        <CreekList creeks={creeksSelection} title={'Lista de Calas'} />
        <CreekFilterNav creeks={creeks} setNewSelection={setNewSelection} />
      </div>
    </main>
  );
};

export default Creeks;
