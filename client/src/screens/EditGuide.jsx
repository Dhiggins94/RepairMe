import React from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom';

export default function EditGuide(props) {
  const [formData, setFormData] = useState({
    image_url: '',
    title: '',
    steps: ''

  });
  const { handleUpdate } = props;
  const {id} = useParams();



  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
    onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}
      >
      <label>
        Image:
        <input 
          type='text'  src='image_url' 
          name='image_url'
          value={formData.image_url} 
          onChange={handleChange}
          placeholder="give it an image"
        />
      </label>
      <label>
        Title:
        <input 
          type='text' 
          name='title' 
          value={formData.title} 
          onChange={handleChange}
          placeholder="name your repair guide"
        />
      </label>
      <label>
        Steps:
        <input 
          type='textarea' 
          name='steps' 
          value={formData.steps} 
          onChange={handleChange}
          placeholder="list your steps here"
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
