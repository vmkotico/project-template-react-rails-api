import React from "react";
import "./index.css";
function EquipmentCard({
  equipment: { name, image, description, bonus, style, id },
}) {
  return (
    <div class="card">
      <div>{name}</div>
      <br></br>
      <div>{description}</div>
      <br></br>
      <div>{bonus}</div>
      <br></br>
      <div>{style}</div>
      <br></br>
      <img src={image} />
    </div>
  );
}

export default EquipmentCard;
