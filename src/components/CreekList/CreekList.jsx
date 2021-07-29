import { CreekListItem, MapButton } from '../../components';

import './CreekList.scss';

const CreekList = ({ creeks, title }) => {
  // console.log('creeks antes', creeks)
  return (
    <section className='list'>
      <div className='list__title-block'>
        <h2 className='list__title'>{title}</h2>
        <MapButton />
      </div>
      <div>
        {creeks.map(creek => {
          console.log('creek.map funciona', creek)
          return <CreekListItem key={JSON.stringify(creek)} creek={creek} />
        })}
      </div>
    </section>
  );
};

export default CreekList;
