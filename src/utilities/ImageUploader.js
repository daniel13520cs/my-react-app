import React, { useState } from 'react';
import { apiURL } from '../constants';
import { Divider, Dropdown, Button, Input } from 'rsuite';

function generateNumberArray(max) {
  const numberArray = Array.from({ length: max }, (_, index) => index + 1);
  return numberArray;
}

const quantityArray = generateNumberArray(100);

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

    setSelectedFile(file);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handlePriceChange = (e) => {
    setPrice(e);
  };

  const handleNameChange = (e) => {
    setName(e);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('description', description);
    formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('currency', currency);

    try {
      const response = await fetch(apiURL + '/products/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('File uploaded successfully:', data);
      } else {
        alert('Failed to upload file:', response.statusText);
      }
    } catch (error) {
      alert('An error occurred during the file upload:', error);
    }
  };


  return (
    <div>
      <h1>Upload Product</h1>
      <label>Product Image:</label>
      <input type="file" onChange={handleFileChange} />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
      )}
      <Divider />
      <label>Quantity:</label>
      <Dropdown
        title={`${quantity}`}
      >
        {quantityArray.map((value) => (
          <Dropdown.Item key={value} onSelect={() => handleQuantityChange(value)}>
            {value}
          </Dropdown.Item>
        ))}
      </Dropdown>
      <Divider />
      <label>Description:</label>
      <Input
        value={description}
        onChange={handleDescriptionChange}
        componentClass="textarea"
        rows={3}
        placeholder="Enter a description..."
      />
      <Divider />
      <label>Price:</label>
      <Input
        type="number"
        value={price}
        onChange={handlePriceChange}
        placeholder="Enter a number..."
        min={0}
      />
      <Divider />
      <label>Name:</label>
      <Input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter the name..."
      />
      <Divider />
      <label>Currency:</label>
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="NTD">NTD</option>
        {/* Add more options as needed */}
      </select>
      <Divider />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;
