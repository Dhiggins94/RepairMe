import { Link, useParams } from 'react-router-dom';

export default function RepairGuides(props) {
  const { guides, handleDelete, currentUser } = props;
  const {id} = useParams()
  console.log(props)
  return (
    <div>
      <h3> Repair Guides</h3>
      {guides?.map((repair_guide) => (
        <div key={repair_guide?.id}>
          <Link to={`/electronics/${id}`}>
          </Link>
          <h3>{repair_guide?.title}</h3>
          <p> {repair_guide?.steps}</p>
          <img src={repair_guide?.image_url} alt="images"></img>
          {currentUser?.id === repair_guide?.user_id && (
            <div>
              <Link to={`/repair_guides/${repair_guide.id}/edit`}>
                <button>Edit</button>
              </Link>
              <br />
              <button onClick={() => handleDelete(repair_guide.id)}>Delete</button>
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
