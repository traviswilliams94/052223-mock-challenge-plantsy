import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, searchState, deletePlant, filteredPlants}) {





  return (
    <ul className="cards">{filteredPlants.map((plant) => (
      <PlantCard key={plant.id}  plant={plant} deletePlant={deletePlant}/>
    ))}</ul>
  );
}

export default PlantList;
