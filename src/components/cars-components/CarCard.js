import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarsList.css';

const CarCard = ({ currentItems }) => {
  console.log('currentItems: ', currentItems);
  const [selectedCarId, setSelectedCarId] = useState(null);
  
  // handle click event on car card
  const handleCarClick = (id) => {
    console.log('you click me', id)
    // setSelectedCarId(id);
    // console.log('selectedCarId: ', selectedCarId);
  };

  return (
    <>
      <div className='cardGrid'>
        {
          currentItems && currentItems.map((item) => (
            <div 
              className='cardCol' 
              key={item.id} 
              onClick={() => handleCarClick(item.id)}
            >
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
  )
};

export default CarCard;
