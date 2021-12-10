import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Character from "./Character";
import Equipment from "./Equipment";
import Homepage from "./Homepage";
import Minions from "./Minions";
import NavBar from "./Navbar";
import NewCharacterForm from "./NewCharacterForm";
import Outfits from "./Outfits";
import Spells from "./Spells";
import CreateAccount from "./CreateAccount";
import CreatedCharacter from "./CreatedCharacter";
import Login from "./Login";

function App() {
  let MY_URL = "http://localhost:3000";

  const [characterList, setCharacterList] = useState([]);

  return (
    <div className="App">
      <h1>Fantasy Character Builder</h1>
      <NavBar />
      <Switch>
        <Route exact path="/Homepage">
          <Homepage />
        </Route>
        <Route path="/NewCharacterForm">
          <NewCharacterForm setCharacterList = {setCharacterList} />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/CreateAccount">
          <CreateAccount />
        </Route>
        <Route path="/Minions">
          <Minions />
        </Route>
        <Route exact path="/Outfits">
          <Outfits />
        </Route>
        <Route exact path="/Character">
          <Character characterList = {characterList} setCharacterList = {setCharacterList}/>
        </Route>
        <Route exact path="/Equipment">
          <Equipment />
        </Route>
        <Route exact path="/Spells">
          <Spells />
        </Route>
        <Route exact path="/CreatedCharacter">
          <CreatedCharacter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
