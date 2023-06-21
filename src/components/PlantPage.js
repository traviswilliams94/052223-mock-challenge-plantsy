import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {

  const [searchState, setSearchState] = useState("");

  function handleSearch(e){
    setSearchState(e.target.value)
  }

  function addPlant(newPlant){
    const updatedPlants =[newPlant, ...plants]
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchState={searchState}  setSearchState={setSearchState} handleSearch={handleSearch}/>
      <PlantList plants={plants} searchState={searchState}/>
    </main>
  );
}

export default PlantPage;
