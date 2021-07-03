import './CreekListItem.scss';

const CreekListItem = ({ creek }) => {
  return (
    <div className='item'>
      <div className='item__text-block'>
        <h3 className='item__name'>{creek.name}</h3>
        <span>{creek.province}</span>
        <div className='item__info'>
          <span>Playa de {creek.type}</span>
        </div>
      </div>
      <div className='item__img-block'>
        {creek.img.map((img, index) => (
          <img src={img} alt={creek.name + index} className='item__photo' />
        ))}
      </div>
    </div>
  );
};

export default CreekListItem;
