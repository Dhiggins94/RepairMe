import React from 'react'
import { Link } from 'react-router-dom';
export default function RepairGuides(props) {
  const { RepairGuides, handleDelete, currentUser } = props;
  console.log(props)
  return (
    <div>
      <h3> RepairGuides</h3>
      {RepairGuides?.map((repair_guides) => (
        <div key={repair_guides.id}>
          <Link to={`/repair_guides/${repair_guides?.id}`}>
            <p>{repair_guides?.name}</p>
          </Link>
          {currentUser?.id === RepairGuides?.user_id && (
            <div>
              <Link to={`/repair_guides/${repair_guides?.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(repair_guides?.id)}>Delete</button>
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
