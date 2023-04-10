import { useParams } from 'react-router-dom';
import { items } from './cars';
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
    </>
  );
}

export default CarDetails;
