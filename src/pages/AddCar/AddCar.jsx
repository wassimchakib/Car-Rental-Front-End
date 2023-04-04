import { FaPlus, FaTrash } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import './index.css';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';

const AddCar = () => {
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
  // const [formValid, setformValid] = useState({
  //   nameValid: null,
  //   descriptionValid: null,
  //   colorValid: null,
  //   yearValid: null,
  //   priceValid: null,
  //   typeValid: null,
  //   imageValid: null,
  //   formValid: null,
  // });

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(formInfo);
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
          <Input name="name" type="text" onInput={handleInput} value={formInfo.name} />
          <Input name="description" type="textarea" onInput={handleInput} value={formInfo.description} />
          <Input name="color" type="text" onInput={handleInput} value={formInfo.color} />
          <Dropdown name="year" options={YEARS()} onDrop={handleInput} value={formInfo.year} />
          <Input name="price" type="number" onInput={handleInput} value={formInfo.price} />
          <Dropdown name="type" options={TYPES} onDrop={handleInput} value={formInfo.type} />
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
