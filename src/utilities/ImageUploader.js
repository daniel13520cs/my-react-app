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
  const [quantity, setQuantity] = useState(1);
  const [inputNumber, setInputNumber] = useState('');

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

  const handleInputNumberChange = (e) => {
    setInputNumber(e);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('description', description);
      formData.append('quantity', quantity);
      formData.append('inputNumber', inputNumber);

      fetch(apiURL + '/products/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('File uploaded successfully:', data);
          // Perform any additional actions with the server response
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
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
        renderTitle={() => {
          return <Button appearance="default">Quantity: {quantity}</Button>;
        }}
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
      <label>Input Number:</label>
      <Input
        type="number"
        value={inputNumber}
        onChange={handleInputNumberChange}
        placeholder="Enter a number..."
        min={0}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;
