import { CarouselComp, HomeInfo } from '../../components';
import './Home.scss';

const Home = ({ creeks, showFooter }) => {
  showFooter(true);
  return (
    <>
      <CarouselComp creeks={creeks} />
      <HomeInfo creeks={creeks} />
    </>
  );
};

export default Home;
