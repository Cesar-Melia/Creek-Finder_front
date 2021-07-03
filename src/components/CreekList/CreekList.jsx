import { CreekListItem, MapButton } from '../../components';
import './CreekList.scss';

const CreekList = ({ creeks }) => {
  return (
    <section className='list'>
      <div className='list__title-block'>
        <h2 className='list__title'>Lista de Calas</h2>
        <MapButton />
      </div>
      <div>
        {creeks.map((creek) => (
          <CreekListItem key={JSON.stringify(creek)} creek={creek} />
        ))}
      </div>
    </section>
  );
};

export default CreekList;
