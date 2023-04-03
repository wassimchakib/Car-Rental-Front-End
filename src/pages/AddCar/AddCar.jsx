import { FaPlus, FaTrash } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import './index.css';

const AddCar = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [formInfo, setFormInfo] = useState({});
  const [images, setImages] = useState([]);

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

  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);

  const addImage = () => {
    const newImages = [...images, ''];
    setImages(newImages);
  };

  const handleImage = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.value;
    setImages(newImages);
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
              <button type="button">
                <FaTrash />
              </button>
            </div>
          ))
        }
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCar;
