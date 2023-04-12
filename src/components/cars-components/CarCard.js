import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./CarsList.css";

const CarCard = ({ currentItems }) => {
  // handle navigation click event on car card
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <>
      <div className="card-container">
        {currentItems &&
          currentItems.map((item) => (
            <div
              className="reservation-card"
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => handleNavigate(item.id)}
            >
              <div className="image-container">
                <img
                  className="car_img"
                  src={item.images.length > 0 && item.images[0].url}
                  alt={item.name}
                />
                <span className="label">Available</span>
              </div>
              <h2 className="car-name">{item.name}</h2>
              <p className="description">
                {item.description.length > 50
                  ? `${item.description.slice(0, 55)}...`
                  : item.description}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

CarCard.propTypes = {
  currentItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        })
      ).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

CarCard.defaultProps = {
  currentItems: [],
};

export default CarCard;
