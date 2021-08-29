import React from 'react'
export default function Electronic(props) {
  const {guide} = props


  return (
    <div>
      <h3> Electronics</h3>
      {guide.map((electronics) => {
        <p key={electronics.id}> {electronics.name} {electronics.description} </p>
      })}
    </div>
  )
}
