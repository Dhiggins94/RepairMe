import { Link, useParams } from 'react-router-dom';

export default function RepairGuides(props) {
  const { RepairGuides, handleDelete, currentUser } = props;
  const {id} = useParams()
  console.log(props)
  return (
    <div>
      <h3> Repair Guides</h3>
      {RepairGuides?.map((repair_guides) => (
        <div key={repair_guides?.id}>
          <Link to={`/repair_guides/${id}`}>
            <h3>{repair_guides?.title}</h3>
          </Link>
          <p> {repair_guides?.steps}</p>
          <img src={repair_guides?.image_url} alt="images"></img>
          {currentUser?.id === RepairGuides?.user_id && (
            <div>
              <Link to={`/repair_guides/${id}/edit`}>
                <button>Edit</button>
              </Link>
              <br />
              <button onClick={() => handleDelete(id)}>Delete</button>
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
