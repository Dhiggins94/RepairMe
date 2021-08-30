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


// i want to grab electronic seed data information
// this maps through the seed data api
// after map it displays the info from the seed
// the seed info is the nintendo switch.  @nintendo_switch = Electronic.create!( name:'nintendo switch' , description:'The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers.', image_url: 'https://i.imgur.com/7dpAuXC.jpg',)

// tldr: name, image and description of electronic seed data


