import { Link } from 'react-router-dom';
import "./Layout.css"
export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      
      {currentUser ? (
        <div>
          <h2 className="username"> Welcome! {currentUser.username} </h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/electronics'>Electronics</Link>
          <br />
          <Link to='/repair_guides'>Repair Guides</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}