import React from "react";
import "./index.css";
function CharacterCard({ character: { name, age, image, bio, id } }) {
  return (
    <div class="card">
      <div className="name">{name}</div>
      <br></br>
      <div>{age}</div>
      <br></br>
      <div>{bio}</div>
      <br></br>
      <img src={image} />
    </div>
  );
}
export default CharacterCard;
