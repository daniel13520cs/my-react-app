// ImageUploader.js
import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const filePath = `images/products/${selectedFile.name}`;

      // You can use filePath for displaying images or other purposes
      console.log('File path:', filePath);

      // Perform any other actions needed with the selected file or file path
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
      )}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;
