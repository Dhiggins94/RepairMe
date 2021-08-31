import React from "react";
export default function ElectronicDetail(props) {
  const { Electronic } = props;
  return (
    <div>
      <h3> {Electronic?.title}</h3>
      <p> {Electronic?.image_url}</p>
      <p>{Electronic?.description}</p>
    </div>
  );
}
