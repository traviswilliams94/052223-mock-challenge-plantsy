import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchState}) {

const filteredPlants = plants.filter(plant => plant.name.includes(searchState))

  return (
    <ul className="cards">{filteredPlants.map((plant) => (
      <PlantCard key={plant.id}  plant={plant} />
    ))}</ul>
  );
}

export default PlantList;
