import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>

      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
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