import React from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Electronic(props) {
  const {electronics} = props
  const { id } = useParams()
  return (
    <div>
      <h3> Electronics</h3>
      {electronics.map((product) => (
        <div>
          <Link to={`/repair_guides/${id}`}> 
          <p key={product?.id}>
            
            {product?.name}
            </p>
            <img src={product?.image_url} alt="images"></img>
            </Link>
          <p> {product?.description}</p>
         
          </div>
      ))}
      
    </div>
  )
}





