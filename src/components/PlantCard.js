import React, {useState} from "react";

function PlantCard({plant, deletePlant}) {

  const [isInStock, setIsInStock] = useState(true)
  const[isDeleted, setIsDeleted] = useState(false)

function handleStockClick(){
  setIsInStock(!isInStock)
}

function handleDeleteClick(){
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "DELETE"
  })
  deletePlant(plant.id)
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Remove</button>
    </li>
  );
}

export default PlantCard;
