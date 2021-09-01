import React from "react";
import "./Electronic.css"
import { useParams } from "react-router";
export default function Electronic(props) {
  const {id} = useParams()

  const { electronics } = props;
  return (
    <div>
      <h2> List of all Electronics</h2>
      {electronics.map((electronic) => (
        <div key={electronic?.id}>
          <p className="e-text" key={electronic?.id}>{electronic?.name}</p>
          <a href={`/electronics/${id}`}>
            <img src={electronic?.image_url} alt="images" className="e-image"></img>
          </a>
          <p className="e-description">{electronic?.description}</p>
        </div>
      ))}
    </div>
  );
}
