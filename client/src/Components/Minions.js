import React from "react";
import MinionCard from "./MinionCard";
import { useState, useEffect } from "react";

function Minions() {
  let minionUrl = "/minions";

  const [minionList, setMinionList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(minionUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMinionList(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Content is Loading</div>;

  const minionCards = minionList.map((minion) => (
    <MinionCard key={minion.id} minion={minion} />
  ));

  return <div class="Card">{minionCards}</div>;
}

export default Minions;
