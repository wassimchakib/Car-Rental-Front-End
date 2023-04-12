import React, { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MdLocationPin } from 'react-icons/md';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { enqueueSnackbar } from 'notistack';
import Field from '../ui/Field';
import useOnClickOutside from '../../hooks/useOutSideClick';
import addMonths from '../../utils/utils';
import { addReservation, resetErrors } from '../../redux/reservation/reservationSlice';
import { getCars } from '../../redux/car/carSlice';

const ReservationForm = ({ carId }) => {
  const [form, setForm] = useState({
    car_id: carId || 'default',
    city: '',
    starting_date: null,
    ending_date: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const { list, isLoading: carsLoading } = useSelector((state) => state.car);
  const { response } = useSelector((state) => state.reservation);

  useEffect(() => {
    if (response?.reservation_id) {
      enqueueSnackbar('Reservation added successfully', {
        variant: 'success',
        TransitionProps: { direction: 'down' },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }

    return () => dispatch(resetErrors());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const today = new Date();

  const [isPickUpCalendarOpen, setIsPickUpCalendarOpen] = useState(false);
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  const pickUpCalendarRef = useRef(null);
  const returnCalendarRef = useRef(null);
  const formRef = useRef(null);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    if (form.car_id === 'default') {
      enqueueSnackbar('Please choose a car', {
        variant: 'errorMessage',
        TransitionProps: { direction: 'down' },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      return;
    }

    if (form.city.trim().length === 0) {
      enqueueSnackbar('Please enter a city', {
        variant: 'errorMessage',
        TransitionProps: { direction: 'down' },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      return;
    }

    if (!form.starting_date) {
      enqueueSnackbar('Please select a pick up date', {
        variant: 'errorMessage',
        TransitionProps: { direction: 'down' },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      return;
    }

    if (!form.ending_date) {
      enqueueSnackbar('Please select a return date', {
        variant: 'errorMessage',
        TransitionProps: { direction: 'down' },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      return;
    }

    if (form.ending_date < form.starting_date) {
      enqueueSnackbar('Return date must come after the pick date', {
        variant: 'errorMessage',
        TransitionProps: { direction: 'down' },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
      return;
    }

    dispatch(resetErrors());
    dispatch(addReservation(form));
    setForm({
      car_id: 'default',
      city: '',
      starting_date: null,
      ending_date: null,
    });
  };

  const setSelectedDay = (day, key) => setForm({
    ...form,
    [key]: day,
  });

  const handleInput = (ev) => setForm({
    ...form,
    [ev.target.name]: ev.target.value,
  });

  useOnClickOutside(pickUpCalendarRef, () => setIsPickUpCalendarOpen(false));
  useOnClickOutside(returnCalendarRef, () => setIsReturnCalendarOpen(false));

  useEffect(() => {
    if (window.innerWidth < 1024 && isReturnCalendarOpen) {
      formRef.current.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: returnCalendarRef.current.offsetTop + 130,
      });
    }
    if (window.innerWidth < 1024 && isPickUpCalendarOpen) {
      formRef.current.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: pickUpCalendarRef.current.offsetTop,
      });
    }
  }, [isPickUpCalendarOpen, isReturnCalendarOpen]);

  return (
    <form data-testid="form" ref={formRef} onSubmit={handleFormSubmit} className="h-[620px] overflow-x-hidden overflow-y-auto md:overflow-visible md:h-fit rounded-lg p-3 shadow-lg flex md:flex-row justify-between border border-gray-100 flex-col md:max-w-[90%] w-full max-w-[400px] bg-gray-100 md:bg-[#ffffff5e]">
      <label htmlFor="car_id" className="py-4 px-2 flex flex-col gap-4 relative md:w-[20%] w-full">
        <span className="text-xl font-semibold text-gray-600">Select a car</span>
        <select value={form.car_id} disabled={carId || false} onChange={handleInput} name="car_id" id="car_id" className="w-full p-3 bg-white text-gray-800 border border-gray-200 rounded-md text-sm font-semibold focus-within:outline-none focus:ring-green-500 focus:border-green-500">
          <option disabled value="default">{ carsLoading ? 'Loading...' : 'Select a car' }</option>
          { list && list.map((car) => (<option key={car.id} value={car.id}>{car.name}</option>)) }
        </select>
      </label>
      <Field
        className="md:w-[20%] px-2 w-full"
        type="text"
        placeholder="Enter your city"
        label="City"
        id="city"
        name="city"
        icon={<MdLocationPin size={24} fill="#798497" />}
        onChange={handleInput}
        value={form.city}
      />
      <Field
        className="md:w-[20%] px-2 w-full"
        type="text"
        placeholder="11/12/2021"
        label="Pick up date"
        id="starting-date"
        name="starting_date"
        icon={<BsFillCalendarDateFill size={22} fill="#798497" />}
        value={form.starting_date?.toLocaleDateString() || ''}
        onClick={() => setIsPickUpCalendarOpen(true)}
        readOnly
      >
        <div ref={pickUpCalendarRef} className={`${isPickUpCalendarOpen ? 'block' : 'hidden'}`}>
          <DayPicker
            showOutsideDays
            fromDate={today}
            toDate={addMonths(today, 1)}
            selected={form.starting_date}
            fixedWeeks
            onDayClick={(day) => {
              setSelectedDay(day, 'starting_date');
              setIsPickUpCalendarOpen(false);

              if (form.ending_date && form.ending_date < day) {
                setForm((prevForm) => ({ ...prevForm, ending_date: null }));
              }
            }}
          />
        </div>
      </Field>
      <Field
        className="md:w-[20%] px-2 w-full"
        readOnly
        type="text"
        placeholder="01/06/2022"
        label="Return date"
        id="ending-date"
        name="ending_date"
        icon={<BsFillCalendarDateFill size={22} fill="#798497" />}
        value={form.ending_date?.toLocaleDateString() || ''}
        onClick={() => setIsReturnCalendarOpen(true)}
      >
        <div ref={returnCalendarRef} className={`${isReturnCalendarOpen ? 'block' : 'hidden'}`}>
          <DayPicker
            showOutsideDays
            fromDate={form.starting_date ?? today}
            toDate={addMonths(form.starting_date, 1) ?? today}
            selected={form.ending_date}
            fixedWeeks
            onDayClick={(day) => {
              setSelectedDay(day, 'ending_date');
              setIsReturnCalendarOpen(false);
            }}
          />
        </div>
      </Field>
      <div className="py-4 px-2 flex flex-col justify-end relative md:w-[14%] w-[200px] max-w-[60%] md:mx-0 mx-auto">
        <button type="submit" className="p-3 bg-green-500 text-white rounded-md font-semibold duration-200 ease-in active:bg-[#1da64e]">SUBMIT</button>
      </div>
    </form>
  );
};

ReservationForm.propTypes = {
  carId: PropTypes.string,
};

ReservationForm.defaultProps = {
  carId: null,
};

export default ReservationForm;
