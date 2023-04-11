import { useNavigate, useParams } from 'react-router-dom';
import items from './cars';
import './CarsList.css';

const CarDetails = () => {
  const { id } = useParams();

  const car = items.find((item) => item.id === Number(id));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reserve');
  };

  return (
    <>
      <div className="carDetails">
        <div className="carDetailsImage">
          <img src={car.image} alt={car.name} />
        </div>
        <div className="carDetailsInfo">
          <h2 className="carTitle">
            Name:
            <span>{car.name}</span>
          </h2>
          <p className="title">
            Price:
            <span>{car.price}</span>
          </p>
          <p className="title">
            Color:
            <span>{car.color}</span>
          </p>
          <p className="title">
            Year:
            <span>{car.year}</span>
          </p>
          <p className="carDescription">
            {car.description}
          </p>

          <button
            type="button"
            className="reserveBtn"
            onClick={() => handleClick(12)}
          >
            Reserve Car
          </button>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
