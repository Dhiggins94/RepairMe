import { Link } from 'react-router-dom';
import "./Layout.css"
export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      
      {currentUser ? (
        <div>
          <h2 className="username"> Welcome! {currentUser.username} </h2>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link className="login-register"to='/login'>Login/Register</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          <Link className="electronics"to='/electronics'>Electronics</Link>
          <br />
          <Link className="repair-guides"to='/repair_guides'>Repair Guides</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}