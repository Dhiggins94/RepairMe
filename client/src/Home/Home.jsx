import React from 'react'
import Logo from "../assets/Logo.gif"

import "./Home.css"
export default function Home() {
  return (
    <div className="home-container">
      <h1> Welcome to repair me</h1>
      <h2> this is a website where you can find repair guides</h2>
      <h2> for electronics.</h2>
      <h3>Pressing Electronics shows all electronics avaliable</h3>
      <h3>Pressing Repair Guides shows all Repair Guides avaliable</h3>
      <img src={Logo} className="image" alt="images"></img>
    </div>
  )
}
