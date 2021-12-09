import React from "react";
import SpellCard from "./SpellsCard";
import { useState, useEffect } from "react";

function Spells() {
  let spellUrl = "/spells";

  const [spellList, setSpellList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(spellUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setSpellList(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Content is Loading</div>;

  const spellCards = spellList.map((spell) => (
    <SpellCard key={spell.id} spell={spell} />
  ));

  return <div class="Card">{spellCards}</div>;
}

export default Spells;
