import { useContext } from 'react';
import { UserContext } from '../../App';

const FavoriteCreeks = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>pagina funciona</p>
    </div>
  );
};

export default FavoriteCreeks;
