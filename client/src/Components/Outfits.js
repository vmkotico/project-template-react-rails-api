import React from "react";
import OutfitCard from "./OutfitCard";
import { useState, useEffect } from "react";

function Outfits() {
  let outfitUrl = "/outfits";

  const [outfitList, setOutfitList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(outfitUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setOutfitList(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Content is Loading</div>;

  const outfitCards = outfitList.map((outfit) => (
    <OutfitCard key={outfit.id} outfit={outfit} />
  ));

  return <div class="Card">{outfitCards}</div>;
}

export default Outfits;
