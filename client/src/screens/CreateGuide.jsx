import React, { useState } from 'react'

export default function CreateGuide(props) {
  
  const [formData, setFormData] = useState({
  name: ''

  });
  const { image_url, title, steps } = formData;
  const { handleCreate } = props;

  const { handleChange } = (e) => {
    const {name , value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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
        <input type='text'  src='image_url' name='image_url'  value={image_url} onChange={handleChange} />
      </label>
      <br />
      <label>
        Title:
        <input type='text'  name="title" value={title} onChange={handleChange} />
      </label>
      <label>
        Steps:
        <input type='text' name='steps' value={steps} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
