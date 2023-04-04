import { FaPlus, FaTrash } from 'react-icons/fa';
import React, { useState } from 'react';
import './index.css';

const AddCar = () => {
  const MAX_LENGTH_DESC = 1000;
  const YEARS = (start = 2015, stop = new Date().getFullYear()) => Array.from(
    { length: (stop - start + 1) }, (_, i) => start + i,
  );
  const TYPES = ['Sport', 'Pickup', 'Super', 'Coupe', 'Limousine', 'Convertible', 'Micro'];
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [formInfo, setFormInfo] = useState({});
  const [images, setImages] = useState([]);
  // Form Validation
  const [formValid, setformValid] = useState({
    nameValid: false,
    descriptionValid: false,
    colorValid: false,
    yearValid: false,
    priceValid: false,
    typeValid: false,
    imageValid: false,
    formValid: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInfo(
      {
        ...formInfo,
        name,
        description,
        color,
        year,
        price,
        type,
        images,
      },
    );
    setName('');
    setDescription('');
    setColor('');
    setYear('');
    setPrice('');
    setType('');
    setImages([]);
  };

  const addImage = () => {
    const newImages = [...images, ''];
    setImages(newImages);
  };

  const deleteImage = (i) => {
    const newImages = [...images];
    newImages.splice(i, 1);
    setImages(newImages);
  };

  const handleImage = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.value;
    setImages(newImages);
  };

  return (
    <section id="add_car">
      <div className="form__container">
        <h2>Add A Car</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:
            <input type="text" required onChange={(e) => setName(e.target.value)} id="name" value={name} />
          </label>
          <label htmlFor="description">
            Description:
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} id="description" maxLength={MAX_LENGTH_DESC} />
          </label>
          <label htmlFor="color">
            Color
            <input type="text" onChange={(e) => setColor(e.target.value)} value={color} id="color" />
          </label>
          <label htmlFor="year">
            Year
            <select id="year" onChange={(e) => setYear(e.target.value)} value={year}>
              {YEARS().map((year) => (<option key={year} value={year}>{year}</option>))}
            </select>
          </label>
          <label htmlFor="price">
            Price
            <input type="number" required onChange={(e) => setPrice(e.target.value)} value={price} id="price" />
          </label>
          <label htmlFor="type">
            Type:
            <select id="type" onChange={(e) => setType(e.target.value)} value={type}>
              {TYPES.map((type) => (<option key={type} value={type}>{type}</option>))}
            </select>
          </label>
          <br />
          <h2 id="images">
            Images:
            <button id="addimage" type="button" onClick={() => addImage()}>
              <FaPlus />
            </button>
          </h2>
          {
            images.map((data, i) => (
              <div className="image__input" key={`image ${i + 1} `}>
                <input type="text" onChange={(e) => handleImage(e, i)} value={data} placeholder={`image_url_${i + 1}`} />
                <button type="button" onClick={() => deleteImage(i)}>
                  <FaTrash />
                </button>
              </div>
            ))
          }
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default AddCar;
