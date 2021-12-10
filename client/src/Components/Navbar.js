import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div class="navbar">
      <NavLink to="/HomePage">HomePage</NavLink>
      <br></br>
      <NavLink to="/Login">Login</NavLink>
      <br></br>
      <NavLink to="/CreateAccount">Create Account</NavLink>
      <br></br>
      <NavLink to="/CreatedCharacter">CreatedCharacter</NavLink>
      <br></br>
      <NavLink to="/Character">Character</NavLink>
      <br></br>
      <NavLink to="/NewCharacterForm">New Character</NavLink>
      <br></br>
      <NavLink to="/Equipment">Equipment</NavLink>
      <br></br>
      <NavLink to="/Minions">Minions</NavLink>
      <br></br>
      <NavLink to="/Outfits">Outfits</NavLink>
      <br></br>
      <NavLink to="/Spells">Spells</NavLink>
      <br></br>
    </div>
  );
}

export default NavBar;
