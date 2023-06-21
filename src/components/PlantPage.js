import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {

  const [searchState, setSearchState] = useState("");
  const filteredPlants = plants.filter(plant => plant.name.includes(searchState))

  function handleSearch(e){
    setSearchState(e.target.value)
  }

  function addPlant(newPlant){
    const updatedPlants =[newPlant, ...plants]
    setPlants(updatedPlants)
  }

  function deletePlant(id) {
    const updatedPlants = filteredPlants.filter(plant => plant.id !== id)
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchState={searchState}  setSearchState={setSearchState} handleSearch={handleSearch}/>
      <PlantList plants={plants} searchState={searchState} deletePlant={deletePlant} filteredPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
