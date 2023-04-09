import './CarsList.css';

const CarCard = ({ currentItems }) =>(
  <>
    <div className='cardGrid'>
      {
        currentItems && currentItems.map((item) => (
          <div className='cardCol'>
            <img className='carImg' src={item.image} alt={item.name}/>
            <div className='carText'>
              <h3 className='carTitle'>{item.name}</h3>
              <p className='carIntro'>{
                  item.description.length > 50 ? `${item.description.slice(0, 55)}...` : item.description
              }</p>
            </div>
          </div>
        ))
      }
    </div>
  </> 
);

export default CarCard;