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
      setFormData({ image_url: repair.image_url , title: repair.title, steps:repair.steps})
    }
    if (guides.length) {
      prefillFormData()
    }
  }, [guides, id])

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
          type='image'  src='image_url' alt="images"
          name='image_url'
          value={formData.image_url} 
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input 
          type='text' 
          name='title' 
          value={formData.title} 
          onChange={handleChange}
        />
      </label>
      <label>
        Steps:
        <input 
          type='textarea' 
          name='steps' 
          value={formData.steps} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
