import React, { useState } from 'react';
import './index.css';

const AddCar = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  return (
    <>
      <h2>Add A Car</h2>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" required onChange={setName} id="name" />
        </label>
        <label htmlFor="description">
          Description:
          <textarea onChange={setDescription} id="description" />
        </label>
        <label htmlFor="color">
          Color
          <input type="text" onChange={setColor} id="color" />
        </label>
        <label htmlFor="year">
          Year
          <input type="text" required onChange={setYear} id="year" />
        </label>
        <label htmlFor="price">
          Price
          <input type="text" required onChange={setPrice} id="price" />
        </label>
        <label htmlFor="type">
          Type:
          <select id="type" onChange={setType}>
            <option value="Sport">Sport</option>
            <option value="Pickup">Pickup</option>
            <option value="Super">Super</option>
            <option value="Coupe">Coupe</option>
            <option value="Limousine">Limousine</option>
            <option value="Convertible">Convertible</option>
            <option value="Micro">Micro</option>
          </select>
        </label>
      </form>
      <p>{name.toString}</p>
    </>
  );
};

export default AddCar;
