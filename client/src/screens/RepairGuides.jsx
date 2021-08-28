import React from 'react'

export default function RepairGuides() {
  const { RepairGuides, handleDelete, currentUser } = props;
  return (
    <div>
      <h3> RepairGuidess</h3>
      {RepairGuides.map((repair_guides) => (
        <div key={repair_guides.id}>
          <Link to={`/repair_guides/${repair_guides.id}`}>
            <p>{food.name}</p>
          </Link>
          {currentUser?.id === RepairGuides.user_id && (
            <div>
              <Link to={`/repair_guides/${repair_guides.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(food.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <Link to='/repair_guides/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
