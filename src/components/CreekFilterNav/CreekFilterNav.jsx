import { useState } from 'react';
import './CreekFilterNav.scss';

const CreekFiltrerNav = ({ filterCreeks }) => {
  const [newFilter, setNewFilter] = useState(false);

  let param;
  let value;

  param && value && filterCreeks(param, value);

  const submitForm = (ev, param, value) => {
    ev.preventDefault();

    if (!value) {
      value = ev.target.value;
    }

    filterCreeks(param, value);
  };

  return (
    <nav className='filter-nav'>
      <input
        type='text'
        placeholder='Buscar Cala'
        className='filter-nav__input'
        onChange={(ev) => submitForm(ev, 'name')}
      />

      <ul className='filter-nav__'>
        <li onClick={(ev) => submitForm(ev, 'type', 'arena')}>Playa de arena</li>
        <li onClick={(ev) => submitForm(ev, 'type', 'rocas')}>Playa de rocas</li>
        <li onClick={(ev) => submitForm(ev, 'type', 'cantos')}>Playa de cantos</li>
      </ul>
    </nav>
  );
};

export default CreekFiltrerNav;
