import React from 'react';
import axios from 'axios';

function UploadTry() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', e.target.elements.image.files[0]);

    try {
      const response = await axios.post('/admin/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      console.log(response);
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while uploading the image.');
    }
  };

  return (
    <>
      <h1>Upload Image</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="image" />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default UploadTry;
