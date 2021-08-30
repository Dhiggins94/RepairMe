import React from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Electronic(props) {
  const {electronics} = props
  const { id } = useParams()
  return (
    <div>
      <h3> Electronics</h3>
      {electronics.map((electronic) => (
        <div>
          <Link to={`/electronics/${id}`}> 
          <p key={electronic?.id}>
            
            {electronic?.name}
            </p>
            <img src={electronic?.image_url} alt="images"></img>
            </Link>
          <p> {electronic?.description}</p>
         
          </div>
      ))}
      
    </div>
  )
}





