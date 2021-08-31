import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="nav">
      <nav>
        <Link className="link" to="/">
          <h2>
            <p className="text"> Repair Me!</p>
          </h2>
        </Link>
      </nav>
    </div>
  );
}
