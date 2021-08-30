import React from 'react'
import { useParams } from 'react-router-dom'
export default function Electronic(props) {
  const { electronics } = props
  const {id} = useParams()
  return (
    <div>
      <h3> Electronics</h3>
      {electronics.map((electronic) => (
        <div>
          <p key={electronic?.id}>
            {electronic?.name}
          </p>
          <a href="/electronics/${id}">
            <img src={electronic?.image_url} alt="images"></img>
          </a>
          </div>
      ))}
            
    </div>
  )
}





