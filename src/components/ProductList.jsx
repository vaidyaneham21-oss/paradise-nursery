import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const plants = {
    Indoor: [
      { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
      { id: 3, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" }
    ],
    Outdoor: [
      { id: 4, name: "Rose", price: 18, image: "https://via.placeholder.com/100" },
      { id: 5, name: "Tulip", price: 22, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Sunflower", price: 12, image: "https://via.placeholder.com/100" }
    ],
    Succulents: [
      { id: 7, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
      { id: 8, name: "Jade Plant", price: 14, image: "https://via.placeholder.com/100" },
      { id: 9, name: "Echeveria", price: 16, image: "https://via.placeholder.com/100" }
    ]
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h1>Our Plants</h1>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAddToCart(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
