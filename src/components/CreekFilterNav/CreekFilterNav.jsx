import './CreekFilterNav.scss';

const CreekFiltrerNav = ({ filterCreeks }) => {
  const provinces = [
    'Alicante',
    'Almería',
    'Asturias',
    'Barcelona',
    'Cádiz',
    'Cantabria',
    'Castellón',
    'La Coruña',
    'Gerona',
    'Granada',
    'Guipúzcoa',
    'Huelva',
    'Islas Baleares',
    'Lugo',
    'Málaga',
    'Murcia',
    'Las Palmas',
    'Pontevedra',
    'Tarragona',
    'Santa Cruz de Tenerife',
    'Valencia',
    'Vizcaya',
  ];

  let param;
  let value;

  param && value && filterCreeks(param, value);

  const submitForm = (ev, param, value = ev.target.value) => {
    ev.preventDefault();

    console.log('Value', value);

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

      <select
        className='filter-nav__select'
        defaultValue='Islas Baleares'
        onChange={(ev) => submitForm(ev, 'province')}
      >
        {provinces.map((prov) => {
          return (
            <option value={prov} key={JSON.stringify(prov)}>
              {prov}
            </option>
          );
        })}
      </select>

      <ul>
        <li className='filter-nav__item' onClick={(ev) => submitForm(ev, 'type', 'arena')}>
          Playa de arena
        </li>
        <li className='filter-nav__item' onClick={(ev) => submitForm(ev, 'type', 'rocas')}>
          Playa de rocas
        </li>
        <li className='filter-nav__item' onClick={(ev) => submitForm(ev, 'type', 'cantos')}>
          Playa de cantos
        </li>
      </ul>
    </nav>
  );
};

export default CreekFiltrerNav;
