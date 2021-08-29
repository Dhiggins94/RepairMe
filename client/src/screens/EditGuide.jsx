import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function EditGuide(props) {
  const [formData, setFormData] = useState({
    image_url: '',
    title: '',
    steps: ''

  });
  const { guides, handleUpdate } = props;
  const {id} = useParams();

  useEffect(()=> {
    const prefillFormData = () => {
      const repair = guides.find((guide)=> guide.id === Number(id));
      setFormData({ image: repair.image , title: repair.title, steps:repair.steps})
    }
    if (guides.length) {
      prefillFormData()
    }
  }, [guides, id])

  const handleChange = (e) => {
    const {image_url, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [image_url]: value
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
          type='image' 
          image_url='image_url' alt="images"
          value={formData.image_url} 
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input 
          type='text' 
          title='title' 
          value={formData.title} 
          onChange={handleChange}
        />
      </label>
      <label>
        Steps:
        <input 
          type='textarea' 
          steps='steps' 
          value={formData.steps} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
