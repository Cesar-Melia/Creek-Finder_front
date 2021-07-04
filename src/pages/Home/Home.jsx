import { CarouselComp } from '../../components';
import './Home.scss';

const Home = ({ creeks, showFooter }) => {
  showFooter(true);
  return <CarouselComp creeks={creeks} />;
};

export default Home;
