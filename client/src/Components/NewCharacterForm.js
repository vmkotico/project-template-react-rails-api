import React, { useState } from "react";
import "./index.css";

function NewCharacterForm({ setCharacterList }) {
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
    fetch("/Characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewCharacterForm),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCharacterList((currentNewCharacter) => [
          ...currentNewCharacter,
          data,
        ]);
        setNewCharacterForm(initialvalue);
      });
  }

  return (
    <main>
      <form className="wholeform" onSubmit={handleSubmit}>
        <label>New Character Name</label>
        <br></br>
        <input
          className="text"
          type="text"
          name="name"
          value={NewCharacter.name}
          onChange={handleChange}
        />
        <br></br>
        <label>Age</label>
        <br></br>
        <input
          className="text"
          type="text"
          name="age"
          value={NewCharacter.price}
          onChange={handleChange}
        />
        <br></br>
        <label>Bio</label>
        <br></br>
        <input
          className="text"
          type="text"
          name="bio"
          value={NewCharacter.bio}
          onChange={handleChange}
        />
        <br></br>
        <label>Img</label>
        <br></br>
        <input
          className="imgUrl"
          type="text"
          name="imgUrl"
          value={NewCharacter.imgUrl}
          onChange={handleChange}
        />

        <div>
          <div className="options">
            <div onClick={toggling}>Spells</div>
            {isOpen && (
              <div>
                <select>
                  <option value="Flamethrower"> Flamethrower </option>
                  <option value="Water Cannon"> Water Cannon </option>
                  <option value="Ice Spikes"> Ice Spikes </option>
                  <option value="Thunder"> Thunder </option>
                  <option value="Sonic Boom"> Sonic Boom </option>
                  <option value="Bug Bite"> Bug Bite </option>
                  <option value="Bedrock Coffin"> Bedrock Coffin </option>
                  <option value="Sand Bullet"> Sand Bullet </option>
                  <option value="Shadow Sword"> Shadow Sword </option>
                  <option value="Solar Beam"> Solar Beam </option>
                </select>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="options">
            <div onClick={toggling}>Equipment</div>
            {isOpen && (
              <div>
                <select>
                  <option value="Scythe"> Scythe </option>
                  <option value="Blood Sword"> Blood Sword </option>
                  <option value="Artemis Bow"> Artemis Bow </option>
                  <option value="Man-Eater"> Man-Eater </option>
                  <option value="Koga Blade"> Koga Blade </option>
                  <option value="Poison Axe"> Poison Axe </option>
                  <option value="Samehada"> Samehada </option>
                  <option value="Giant Fan"> Giant Fan </option>
                  <option value="Kubikiribocho"> Kubikiribocho </option>
                  <option value="Kabutowari"> Kabutowari </option>
                </select>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="options">
            <div onClick={toggling}>Outfits</div>
            {isOpen && (
              <div>
                <select>
                  <option value="Eastern Lady Attire">
                    Eastern Lady Attire
                  </option>
                  <option value="Sharlayan Prodigy Suit">
                    Sharlayan Prodigy Suit
                  </option>
                  <option value="Peacock Attire"> Peacock Attire </option>
                  <option value="Emerald Carbuncle Attire">
                    Emerald Carbuncle Attire
                  </option>
                  <option value="Loyal Butler Uniform">
                    Loyal Butler Uniform
                  </option>
                  <option value="Angelic Attire"> Angelic Attire </option>
                  <option value="Resshi Attire"> Resshi Attire </option>
                  <option value="Alphinaud Attire "> Alphinaud Attire </option>
                  <option value="Eastern Journey Attire">
                    Eastern Journey Attire
                  </option>
                  <option value="Topaz Carbuncle Attire">
                    Topaz Carbuncle Attire
                  </option>
                </select>
              </div>
            )}
          </div>
        </div>

        <br></br>
        <br></br>
        <div className="button">
          <button type="submit" className="submit">
            Create New Character
          </button>
        </div>
      </form>
    </main>
  );
}
export default NewCharacterForm;
