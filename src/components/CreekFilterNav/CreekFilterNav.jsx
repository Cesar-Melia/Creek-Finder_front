import './CreekFilterNav.scss';

const CreekFiltrerNav = ({ creeks, setNewSelection }) => {
  const provinces = [
    '',
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
  const types = ['', 'arena', 'rocas', 'cantos rodados'];

  const filter = { name: '', province: '', type: '' };

  const handleChange = ev => {
    ev.preventDefault();

    filter.name = ev.target.form.name.value;
    filter.province = ev.target.form.province.value;
    filter.type = ev.target.form.type.value;

    if (creeks) {
      let newSelection = creeks;

      newSelection = newSelection.filter(creek => {
        return (
          creek.name.toLowerCase().includes(filter.name.toLowerCase()) &&
          creek.province.toLowerCase().includes(filter.province.toLowerCase()) &&
          creek.type.toLowerCase().includes(filter.type.toLowerCase())
        );
      });

      console.log('Calas: ', newSelection);
      setNewSelection(newSelection);
    }
    console.log('Filter: ', filter);
  };

  return (
    <nav className='filter-nav'>
      <form onChange={handleChange}>
        <input
          type='text'
          placeholder='Buscar Cala'
          className='filter-nav__input'
          name='name'
          // onChange={ev => submitForm(ev, 'name')}
        />

        <select
          className='filter-nav__select'
          defaultValue=''
          name='province'
          // onChange={ev => submitForm(ev, 'province')}
        >
          {provinces.map(prov => {
            return (
              <option value={prov} key={JSON.stringify(prov)}>
                {prov}
              </option>
            );
          })}
        </select>

        <select
          className='filter-nav__select'
          defaultValue=''
          name='type'
          // onChange={ev => submitForm(ev, 'province')}
        >
          {types.map(type => {
            return (
              <option value={type} key={JSON.stringify(type)}>
                {type}
              </option>
            );
          })}
        </select>
      </form>

      {/* <ul>
        <li className='filter-nav__item' onClick={ev => submitForm(ev, 'type', 'arena')}>
          Playa de arena
        </li>
        <li className='filter-nav__item' onClick={ev => submitForm(ev, 'type', 'rocas')}>
          Playa de rocas
        </li>
        <li className='filter-nav__item' onClick={ev => submitForm(ev, 'type', 'cantos')}>
          Playa de cantos
        </li>
      </ul> */}
    </nav>
  );
};

export default CreekFiltrerNav;
