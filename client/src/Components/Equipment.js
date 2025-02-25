import React from "react";
import EquipmentCard from "./EquipmentCard";
import { useState, useEffect } from "react";

function Equipments() {
  let equipmentUrl = "/equipments";

  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(equipmentUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setEquipmentList(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Content is Loading</div>;

  const equipmentCards = equipmentList.map((equipment) => (
    <EquipmentCard key={equipment.id} equipment={equipment} />
  ));

  return <div class="Card">{equipmentCards}</div>;
}

export default Equipments;
