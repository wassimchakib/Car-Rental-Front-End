import React, { useState } from 'react';
import './index.css';

const AddCar = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [formInfo, setFormInfo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInfo(
      {
        name,
        description,
        color,
        year,
        price,
        type,
      },
    );
    console.log(formInfo);
    setName('');
    setDescription('');
    setColor('');
    setYear('');
    setPrice('');
    setType('');
  };

  return (
    <div className="form__container">
      <h2>Add A Car</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" required onChange={(e) => setName(e.target.value)} id="name" value={name} />
        </label>
        <label htmlFor="description">
          Description:
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} id="description" />
        </label>
        <label htmlFor="color">
          Color
          <input type="text" onChange={(e) => setColor(e.target.value)} value={color} id="color" />
        </label>
        <label htmlFor="year">
          Year
          <input type="text" required onChange={(e) => setYear(e.target.value)} value={year} id="year" />
        </label>
        <label htmlFor="price">
          Price
          <input type="text" required onChange={(e) => setPrice(e.target.value)} value={price} id="price" />
        </label>
        <label htmlFor="type">
          Type:
          <select id="type" onChange={(e) => setType(e.target.value)} value={type}>
            <option value="Sport">Sport</option>
            <option value="Pickup">Pickup</option>
            <option value="Super">Super</option>
            <option value="Coupe">Coupe</option>
            <option value="Limousine">Limousine</option>
            <option value="Convertible">Convertible</option>
            <option value="Micro">Micro</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCar;
