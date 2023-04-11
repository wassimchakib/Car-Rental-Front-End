import { useParams } from 'react-router-dom';
import items from './cars';
import './CarsList.css';

const CarDetails = () => {
  const { id } = useParams();

  const car = items.find((item) => item.id === Number(id));

  return (
    <>
      <h1 className="carTitle">
        Car Details
        {car.name}
      </h1>

      <div className="carDetails">
        <div className="carDetailsImage">
          <img src={car.image} alt={car.name} />
        </div>
        <div className="carDetailsInfo">
          <h2>
            Name:
            {car.name}
          </h2>
          <p>
            Price:
            {car.price}
          </p>
          <p>
            Color:
            {car.color}
          </p>
          <p>
            Year:
            {car.year}
          </p>
          <p>
            {car.description}
          </p>

          <button type="button" className="btn btn-primary">Reserve Car</button>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
