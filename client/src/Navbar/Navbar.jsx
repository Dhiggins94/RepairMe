import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div className="nav">
      <nav>
        <Link to="/">
        <h2>
          <p> Repair Me!</p>
          </h2>
        </Link>

      </nav>
    </div>
  )
}
