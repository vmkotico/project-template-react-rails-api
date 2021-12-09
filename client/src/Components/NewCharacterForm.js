import React, { useState } from "react";
import "./index.css";

function NewCharacterForm({ setNewCharacter }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const initialvalue = {
    name: "",
    age: "",
    bio: "",
    imgUrl: "",
    user_id: "",
  };
  const [NewCharacter, setNewCharacterForm] = useState(initialvalue);
  function handleChange(e) {
    setNewCharacterForm((currentNewCharacterForm) => {
      return {
        ...currentNewCharacterForm,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/Characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewCharacterForm),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNewCharacter((currentNewCharacter) => [
          ...currentNewCharacter,
          data,
        ]);
        setNewCharacter(initialvalue);
      });
  }

  return (
    <main className="NewCharacterForm">
      <h2>New Character</h2>
      <form className="apple" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          name="name"
          placeholder="NewCharacter Name"
          value={NewCharacter.name}
          onChange={handleChange}
        />
        <input
          className="age"
          type="text"
          name="age"
          placeholder="Age"
          value={NewCharacter.price}
          onChange={handleChange}
        />

        <input
          className="bio"
          type="text"
          name="bio"
          placeholder="Bio"
          value={NewCharacter.bio}
          onChange={handleChange}
        />
        <input
          className="imgUrl"
          type="text"
          name="imgUrl"
          placeholder="Hero Image"
          value={NewCharacter.imgUrl}
          onChange={handleChange}
        />
       

        <div>
     
          <div className="NewCharacterForm">
            <div onClick={toggling}>Equipment</div>
            {isOpen && (
              <div>
                <select>
                <option value = "Scythe"> Scythe </option>
                <option value = "Blood Sword"> Blood Sword </option>
                <option value = "Artemis Bow"> Artemis Bow </option>
                <option value = "Man-Eater"> Man-Eater </option>
                <option value = "Koga Blade"> Koga Blade </option>
                <option value = "Poison Axe"> Poison Axe </option>
                <option value = "Samehada"> Samehada </option>
                <option value = "Giant Fan"> Giant Fan </option>
                <option value = "Kubikiribocho"> Kubikiribocho </option>
                <option value = "Kabutowari"> Kabutowari </option>
                </select>
              </div>
            )}
          </div>
        </div>
        <div>
          
          <div className="NewCharacterForm">
            <div onClick={toggling}>Outfits...</div>
            {isOpen && (
              <div>
                <select>
                <option value = "Eastern Lady Attire"> Eastern Lady Attire </option>
                <option value = "Sharlayan Prodigy Suit"> Sharlayan Prodigy Suit </option>
                <option value = "Peacock Attire"> Peacock Attire </option>
                <option value = "Emerald Carbuncle Attire"> Emerald Carbuncle Attire </option>
                <option value = "Loyal Butler Uniform"> Loyal Butler Uniform </option>
                <option value = "Angelic Attire"> Angelic Attire </option>
                <option value = "Resshi Attire"> Resshi Attire </option>
                <option value = "Alphinaud Attire "> Alphinaud Attire  </option>
                <option value = "Eastern Journey Attire"> Eastern Journey Attire </option>
                <option value = "Topaz Carbuncle Attire"> Topaz Carbuncle Attire</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <br></br>
        <br></br>
        <button className="submit" type="submit">
          Create New Character
        </button>
      </form>
    </main>
  );
}
export default NewCharacterForm;

// const Main = styled("div")`
//   font-family: sans-serif;
//   background: #f0f0f0;
//   height: 100vh;
// `;

// const DropDownContainer = styled("div")`
//   width: 10.5em;
//   margin: 0 auto;
// `;

// const DropDownHeader = styled("div")`
//   margin-bottom: 0.8em;
//   padding: 0.4em 2em 0.4em 1em;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
//   font-weight: 500;
//   font-size: 1.3rem;
//   color: #3faffa;
//   background: #ffffff;
// `;

// const DropDownListContainer = styled("div")``;

// const DropDownList = styled("ul")`
//   padding: 0;
//   margin: 0;
//   padding-left: 1em;
//   background: #ffffff;
//   border: 2px solid #e5e5e5;
//   box-sizing: border-box;
//   color: #3faffa;
//   font-size: 1.3rem;
//   font-weight: 500;
//   &:first-child {
//     padding-top: 0.8em;
//   }
// `;

// const ListItem = styled("li")`
//   list-style: none;
//   margin-bottom: 0.8em;
// `;
