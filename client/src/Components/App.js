import React from "react";
import { Route, Switch } from "react-router-dom";
import Character from "./Character";
import Equipment from "./Equipment";
import Homepage from "./Homepage";
import Minions from "./Minions";
import NavBar from "./Navbar";
import NewCharacterForm from "./NewCharacterForm";
import Outfits from "./Outfits";
import Spells from "./Spells";

function App() {
  let MY_URL = "http://localhost:3000";

  return (
    <div className="App">
      <h1>Fantasy Character Builder</h1>
      <NavBar />
      <Switch>
        <Route exact path="/Homepage">
          <Homepage />
        </Route>
        <Route path="/NewCharacterForm">
          <NewCharacterForm />
        </Route>
        <Route path="/Minions">
          <Minions />
        </Route>
        <Route exact path="/Outfits">
          <Outfits />
        </Route>
        <Route exact path="/Character">
          <Character />
        </Route>
        <Route exact path="/Equipment">
          <Equipment />
        </Route>
        <Route exact path="/Spells">
          <Spells />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
