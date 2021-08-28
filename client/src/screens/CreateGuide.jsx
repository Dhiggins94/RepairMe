import React, { useState } from 'react'

export default function CreateGuide(props) {
  
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    steps: ''

  });
  const { image, title, steps } = formData;
  const { handleCreate } = props;

  const { handleChange } = (e) => {
    const { image, title, steps, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [image, title, steps]: value,
    }));
  };  


  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Repair Guide</h3>
      <label>
        Image:
        <input type='image' image='image'  value={image} onChange={handleChange} />
      </label>
      <br />
      <label>
        Title:
        <input type='text' title='title' value={title} onChange={handleChange} />
      </label>
      <label>
        Steps:
        <input type='textarea' steps='steps' value={steps} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
