import { useEffect } from 'react';
import { PuffLoader } from 'react-spinners';
import { BiLeftArrow } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageCarousel from './ImageCarousel';
import './CarsList.css';
import { getCar } from '../../redux/car/carSlice';

const CarDetails = () => {
  const { id } = useParams();
  const { car, isLoading } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCar(id));
  }, [dispatch, id]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/reserve/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <PuffLoader
            color="#98BF11"
            size={80}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <>
          <div role="presentation" onClick={() => window.history.back()} className="absolute top-4 xs:top-4 sm:top-8 md:top-auto md:bottom-12 left-0 px-5 py-4 bg-[#98BF11] rounded-r-full cursor-pointer hover:bg-lime-600 duration-150 ease-in">
            <BiLeftArrow fill="#fff" size={24} />
          </div>
          <div className="carDetails">
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              <div className="carDetailsImage">
                <ImageCarousel images={car?.images} altText={car?.name} />
              </div>
            </div>
            <div className="carDetailsInfo">
              <h2 className="carTitle">
                <span>{car?.name}</span>
              </h2>
              <div className="flex justify-between items-center bg-gray-100 p-3">
                <p className="title">Price:</p>
                <p className="text-base font-normal">{car?.price}</p>
              </div>
              <div className="flex justify-between items-center p-3">
                <p className="title">Color:</p>
                <p className="text-base font-normal">{car?.color}</p>
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-3">
                <p className="title">Year:</p>
                <p className="text-base font-normal">{car?.year}</p>
              </div>
              <p className="carDescription">{car?.description}</p>
              <button
                type="button"
                className="reserveBtn"
                onClick={() => handleClick(id)}
              >
                Reserve Car
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CarDetails;
