import { Link, useParams } from "react-router-dom";
import "./RepairGuides.css"
export default function RepairGuides(props) {
  const { guides, handleDelete, currentUser } = props;
  const { id } = useParams();
  console.log(props);
  return (
    <div>
      <h2> Here is a list of Devices avaliable with guides</h2>
      {guides?.map((repair_guide) => (
        <div key={repair_guide?.id}>
          <Link to={`/electronics/${id}`}></Link>
          <h3>{repair_guide?.title}</h3>
          <p className="steps">  {repair_guide?.steps}</p>
          <img src={repair_guide?.image_url} alt="images" className="guide-image"></img>
          {currentUser?.id === repair_guide?.user_id && (
            <div>
              <Link to={`/repair_guides/${repair_guide.id}/edit`}>
                <button className="btn-edit">Edit Guide</button>
              </Link>
              <br />
              <button onClick={() => handleDelete(repair_guide.id)} className="btn-delete">
                Delete Guide
              </button>
            </div>
          )}
        </div>
      ))}
      <Link to="/repair_guides/new">
        <button className='btn-create'>Create Guide</button>
      </Link>
    </div>
  );
}
