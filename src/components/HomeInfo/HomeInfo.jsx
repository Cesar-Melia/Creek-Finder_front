import './HomeInfo.scss';

const HomeInfo = ({ creeks, showFooter }) => {
  return (
    <section className='container'>
      <div className='container__block'>
        <h2>LoremIpsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis et ex eu egestas. Donec vitae justo
          aliquam, ultrices lectus.
        </p>
      </div>
      <div className='container__block'>
        <h2>LoremIpsum</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis et ex eu egestas. Donec vitae justo
          aliquam, ultrices lectus.
        </p>
      </div>
      <div className='container__block'>
        <h2>LoremIpsum</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis et ex eu egestas. Donec vitae justo
          aliquam, ultrices lectus.
        </p>
      </div>
    </section>
  );
};

export default HomeInfo;
