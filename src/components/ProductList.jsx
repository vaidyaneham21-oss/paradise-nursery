import { useState } from "react";

function ProductList() {
  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Fern", price: 18, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>
      <h2>Plant List</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => addToCart(plant)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
