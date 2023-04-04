import { FaPlus, FaTrash } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import './index.css';

const AddCar = () => {
  const MAX_LENGTH_DESC = 1000;
  const YEARS = (start = 2015, stop = new Date().getFullYear()) => Array.from(
    { length: (stop - start + 1) }, (_, i) => start + i,
  );
  const TYPES = ['Sport', 'Pickup', 'Super', 'Coupe', 'Limousine', 'Convertible', 'Micro'];
  const [formInfo, setFormInfo] = useState({
    name: '',
    description: '',
    color: '',
    year: '2015',
    price: '',
    type: 'Sport',
    images: [],
  });
  // Form Validation
  const [formValid, setformValid] = useState({
    nameValid: null,
    descriptionValid: null,
    colorValid: null,
    yearValid: null,
    priceValid: null,
    typeValid: null,
    imageValid: null,
    formValid: null,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInfo(
      {
        name: '',
        description: '',
        color: '',
        year: '',
        price: '',
        type: '',
        images: [],
      },
    );
  };

  const addImage = () => {
    const newImages = [...formInfo.images, ''];
    setFormInfo({ ...formInfo, images: newImages });
  };

  const deleteImage = (i) => {
    const newImages = [...formInfo.images];
    newImages.splice(i, 1);
    setFormInfo({ ...formInfo, images: newImages });
  };

  const handleImage = (e, index) => {
    const newImages = [...formInfo.images];
    newImages[index] = e.target.value;
    setFormInfo({ ...formInfo, images: newImages });
  };

  return (
    <section id="add_car">
      <div className="form__container">
        <h2>Add A Car</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:
            <input type="text" required onChange={(e) => handleInput(e)} id="name" name="name" value={formInfo.name} />
          </label>
          <label htmlFor="description">
            Description:
            <textarea onChange={(e) => handleInput(e)} value={formInfo.description} id="description" name="description" maxLength={MAX_LENGTH_DESC} />
          </label>
          <label htmlFor="color">
            Color
            <input type="text" onChange={(e) => handleInput(e)} value={formInfo.color} id="color" name="color" />
          </label>
          <label htmlFor="year">
            Year
            <select id="year" name="year" onChange={(e) => handleInput(e)} value={formInfo.year}>
              {YEARS().map((year) => (<option key={year} value={year}>{year}</option>))}
            </select>
          </label>
          <label htmlFor="price">
            Price
            <input type="number" required onChange={(e) => handleInput(e)} value={formInfo.price} id="price" name="price" />
          </label>
          <label htmlFor="type">
            Type:
            <select id="type" onChange={(e) => handleInput(e)} value={formInfo.type} name="type">
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
            formInfo.images.map((data, i) => (
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
