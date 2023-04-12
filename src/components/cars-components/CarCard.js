import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CarsList.css';

const CarCard = ({ currentItems }) => {
  // handle navigation click event on car card
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <>
      <div className="cardGrid">
        {
          currentItems && currentItems.map((item) => (
            <div
              className="cardCol"
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => handleNavigate(item.id)}
            >
              <img className="carImg" src={item.image[0]} alt={item.name} />
              <div className="carText">
                <h3 className="carTitle">{item.name}</h3>
                <p className="carIntro">
                  {
                    item.description.length > 50
                      ? `${item.description.slice(0, 55)}...`
                      : item.description
                  }
                </p>
              </div>
            </div>
          ))
        }
      </div>

    </>
  );
};

CarCard.propTypes = {
  currentItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CarCard;
