import React from 'react'
// import Logo from "../assets/Logo.gif"
import "./Home.css"
export default function Home() {
  return (
    <div className="home-container">
      <h1> Welcome to repair me</h1>
      <p> this is a website where you can find repair guides</p>
      <p> for electronics.</p>
      <h4>Pressing Electronics shows all electronics avaliable</h4>
      <h4>Pressing Repair Guides shows all Repair Guides avaliable</h4>
      {/* <img src={Logo} className="image" alt="images"></img> */}
    </div>
  )
}
