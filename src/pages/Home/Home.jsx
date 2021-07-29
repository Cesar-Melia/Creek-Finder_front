import { CarouselComp, HomeInfo } from '../../components';
import './Home.scss';

const Home = ({ creeks, showFooter }) => {
  showFooter(true);
  return (
    <main class="home-container">
      <CarouselComp creeks={creeks} />
      <HomeInfo creeks={creeks} />
    </main >
  );
};

export default Home;
