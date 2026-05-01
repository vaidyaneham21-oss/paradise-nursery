import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = {
    Indoor: [
      { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" }
    ],
    Outdoor: [
      { id: 3, name: "Rose", price: 20, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Tulip", price: 18, image: "https://via.placeholder.com/100" }
    ],
    Succulents: [
      { id: 5, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Jade Plant", price: 12, image: "https://via.placeholder.com/100" }
    ]
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

              <button onClick={() => dispatch(addItem(plant))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
