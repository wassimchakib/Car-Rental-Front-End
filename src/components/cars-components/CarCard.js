import { useNavigate } from 'react-router-dom';
import './CarsList.css';

const CarCard = ({ currentItems }) => {
  
  // handle navigation click event on car card
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    console.log('id: ', id);
    navigate(`/cars/${id}`);
  };

  return (
    <>
      <div className='cardGrid'>
        {
          currentItems && currentItems.map((item) => (
            <div 
              className='cardCol' 
              key={item.id} 
              onClick={() => handleNavigate(item.id)}
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
