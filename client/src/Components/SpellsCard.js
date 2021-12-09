import React from "react";
import "./index.css";

function SpellCard({ spell: { name, image, style, effect, range, id } }) {
  return (
    <div class="card">
      <div>{name}</div>
      <br></br>
      <div>{style}</div>
      <br></br>
      <div>{effect}</div>
      <br></br>
      <div>{range}</div>
      <br></br>
      <img src={image} />
    </div>
  );
}
export default SpellCard;
