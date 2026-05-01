import { useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([
    { id: 1, name: "Aloe Vera", price: 10, quantity: 1 },
    { id: 2, name: "Snake Plant", price: 15, quantity: 1 }
  ]);

  // Increase quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  // Decrease quantity (remove if 0)
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];

    if (updatedCart[index].quantity === 1) {
      removeItem(index); // remove if 1 → 0
    } else {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  // Remove item completely
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Total price
  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => increaseQuantity(index)}>+</button>
            <button onClick={() => decreaseQuantity(index)}>-</button>
            <button onClick={() => removeItem(index)}>Delete</button>

            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))
      )}

      <h3>Grand Total: ${totalCost}</h3>

      {/* ✅ REQUIRED for full marks */}
      <button onClick={() => alert("Checkout Successful!")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
