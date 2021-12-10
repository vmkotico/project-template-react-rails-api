import React, { useState } from "react";
import "./index.css";

function CreatedCharacter({ name, age, bio, image }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div class="card" >
      <div>{name}</div>
      <br></br>
      <div>{age}</div>
      <br></br>
      <div>{bio}</div>
      <br></br>
      <img src={image} 
     />
    


  <div>
  <div className="options">
  <div onClick={toggling}>Minions</div>
  {isOpen && (
    <div>
      <select>
        <option value="Emiley"> Emiley </option>
        <option value="Mame Sword"> Mame </option>
        <option value="Gaelikitten"> Gaelikitten </option>
        <option value="Behemoth Heir"> Behemoth Heir </option>
        <option value="Puff of Darkness"> Puff of Darkness </option>
        <option value="Heavy Hatchling "> Heavy Hatchling  </option>
        <option value="Garlic Jester"> Garlic Jester </option>
        <option value="Minute Mindflayer "> Minute Mindflayer  </option>
        <option value="Yukinko Snowflake"> Yukinko Snowflake </option>
        <option value="Bacon Bits"> Bacon Bits </option>
      </select>
    </div>
  )}
</div>
</div>


<div>
          <button className="submit">Add Minion</button>
        </div>

</div> 



  );
}
export default CreatedCharacter;
