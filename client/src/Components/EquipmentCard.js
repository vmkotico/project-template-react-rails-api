import React from "react";
import "./index.css";
function EquipmentCard({
  equipment: { name, image, description, bonus, style, id },
}) {
  return (
    <div class="card">
      <div>{name}</div>
      <br></br>
      <img src={image} />
      <br></br>
      <div>{bonus}</div>
      <br></br>
      <div>{style}</div>
      <br></br>
      <div>{description}</div>
    </div>
  );
}

export default EquipmentCard;
