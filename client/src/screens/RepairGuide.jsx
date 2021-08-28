import React from 'react'
export default function RepairGuide(props) {
  const {guides} = props


  return (
    <div>
      <h3> Repair Guides</h3>
      {guides.map((guide) => {
        <p key={guide.id}> {guide.name}</p>
      })}
    </div>
  )
}
