import React from "react";
import "./index.css";

function OutfitCard({ outfit: { name, description, image, bonus, id } }) {
  return (
    <div class="card">
      <div>{name}</div>
      <br></br>
      <div>{description}</div>
      <br></br>
      <div>{bonus}</div>
      <br></br>
      <img src={image} />
    </div>
  );
}
export default OutfitCard;
