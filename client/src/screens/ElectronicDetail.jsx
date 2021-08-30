import { Link, useParams } from 'react-router-dom';

export default function electronicDetail(props) {
  const { electronic, handleDelete, currentUser } = props;
  const {id} = useParams()
  console.log(props)
  return (
    <div>
      <h3> Repair Guides</h3>
      {electronic?.map((electronic) => (
        <div key={electronic?.id}>
          <Link to={`/electronics/${id}`}>
          </Link>
          <h3>{electronic?.title}</h3>
          <p> {electronic?.steps}</p>
          <img src={electronic?.image_url} alt="images"></img>
          {currentUser?.id === electronic?.user_id && (
            <div>
              <Link to={`/electronic/${id}/edit`}>
                <button>Edit</button>
              </Link>
              <br />
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <Link to='/electronic/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}

