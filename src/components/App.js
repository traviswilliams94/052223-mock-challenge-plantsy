import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([]);

  useEffect(fetchPlants, [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants}/>
    </div>
  );

function fetchPlants(){
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(setPlants)
}

}

export default App;
