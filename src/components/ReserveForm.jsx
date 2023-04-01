import React, { useRef, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Field from './ui/Field';
import cn from '../utils/classnames';
import useOnClickOutside from '../hooks/useOutSideClick';
import addMonths from '../utils/utils';

const ReserveForm = () => {
  const [form, setForm] = useState({
    city: '',
    startingDate: null,
    endingDate: null,
  });

  const today = new Date();

  const [isPickUpCalendarOpen, setIsPickUpCalendarOpen] = useState(false);
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  const pickUpCalendarRef = useRef(null);
  const returnCalendarRef = useRef(null);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    // TODO
    // make sure that the form is valid
    // dispatch redux action to save the reservation on the server
  };

  const setSelectedDay = (day, key) => setForm({ ...form, [key]: day });
  const handleInput = (ev) => setForm({ ...form, [ev.target.name]: ev.target.value });

  useOnClickOutside(pickUpCalendarRef, () => setIsPickUpCalendarOpen(false));
  useOnClickOutside(returnCalendarRef, () => setIsReturnCalendarOpen(false));

  return (
    <form onSubmit={handleFormSubmit} className="rounded-lg p-3 shadow-lg flex justify-between w-full border border-gray-100">
      <label htmlFor="car" className="p-4 flex flex-col gap-4 relative w-[20%]">
        <span className="text-xl font-semibold text-gray-600">Select a car</span>
        <select id="car" className="w-full p-3 bg-white text-gray-800 border border-gray-200 rounded-md text-sm font-semibold focus-within:outline-none focus:ring-green-500 focus:border-green-500">
          <option disabled value="">Select a car</option>
          <option value="1">Kia</option>
          <option value="2">Mercedes</option>
        </select>
      </label>
      <Field
        className="w-[22%]"
        type="text"
        placeholder="Enter your city or address"
        label="Where to pick up"
        name="city"
        icon={<MdLocationPin size={24} fill="#798497" />}
        onChange={handleInput}
        value={form.city}
      />
      <Field
        className="w-[20%]"
        type="text"
        placeholder="11/12/2021"
        label="Pick up date"
        name="startingDate"
        icon={<BsFillCalendarDateFill size={22} fill="#798497" />}
        value={form.startingDate?.toLocaleDateString() || ''}
        onClick={() => setIsPickUpCalendarOpen(true)}
        readOnly
      >
        <div ref={pickUpCalendarRef} className={cn(`${isPickUpCalendarOpen ? 'block' : 'hidden'}`)}>
          <DayPicker
            showOutsideDays
            fromDate={today}
            toMonth={today}
            selected={form.startingDate}
            fixedWeeks
            onDayClick={(day) => {
              setSelectedDay(day, 'startingDate');
              setIsPickUpCalendarOpen(false);

              if (form.endingDate && form.endingDate < day) {
                setForm((prevForm) => ({ ...prevForm, endingDate: null }));
              }
            }}
          />
        </div>
      </Field>
      <Field
        className="w-[20%]"
        readOnly
        type="text"
        placeholder="01/06/2022"
        label="Return date"
        name="endingDate"
        icon={<BsFillCalendarDateFill size={22} fill="#798497" />}
        value={form.endingDate?.toLocaleDateString() || ''}
        onClick={() => setIsReturnCalendarOpen(true)}
      >
        <div ref={returnCalendarRef} className={cn(`${isReturnCalendarOpen ? 'block' : 'hidden'}`)}>
          <DayPicker
            showOutsideDays
            fromDate={form.startingDate ?? today}
            toDate={addMonths(form.startingDate, 1) ?? today}
            selected={form.endingDate}
            fixedWeeks
            onDayClick={(day) => {
              setSelectedDay(day, 'endingDate');
              setIsReturnCalendarOpen(false);
            }}
          />
        </div>
      </Field>
      <div className="p-4 flex flex-col justify-end relative w-[14%]">
        <button type="submit" className="p-3 bg-green-500 text-white rounded-md font-semibold">SUBMIT</button>
      </div>
    </form>
  );
};

export default ReserveForm;
