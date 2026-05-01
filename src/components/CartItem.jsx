import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const increase = (index) => {
    dispatch(updateQuantity({ index, amount: 1 }));
  };

  const decrease = (index) => {
    dispatch(updateQuantity({ index, amount: -1 }));
  };

  const deleteItem = (index) => {
    dispatch(removeItem(index));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
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
          <button onClick={() => deleteItem(index)}>Delete</button>

          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}

      {/* ✅ REQUIRED */}
      <h2>Total Cart Amount: ${totalAmount}</h2>

      <button onClick={() => alert("Checkout Successful!")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
