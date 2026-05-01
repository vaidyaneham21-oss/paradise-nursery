import { useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([
    { id: 1, name: "Aloe Vera", price: 10, quantity: 1 }
  ]);

  const increase = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decrease = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => increase(index)}>+</button>
          <button onClick={() => decrease(index)}>-</button>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
