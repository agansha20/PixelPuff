import "./Cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(items);
  }, []);

  function removeItem(index) {
    const updatedCart = cart.filter((item, i) => i !== index);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function checkout() {

    if (cart.length === 0) {
      alert("Your Cart is Empty!");
      return;
    }

    alert("🎉 Order Placed Successfully!");

    localStorage.removeItem("cart");

    setCart([]);

    navigate("/home");

  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">

      <h1>My Cart</h1>

      {cart.length === 0 ? (

        <h2 className="empty">Your Cart is Empty</h2>

      ) : (

        <>
          <div className="cart-container">

            {cart.map((item, index) => (

              <div className="cart-item" key={index}>

                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <div className="total-box">

            <h2>Total : ₹{total}</h2>

            <button
              className="checkout-btn"
              onClick={checkout}
            >
              Proceed to Checkout
            </button>

          </div>

        </>

      )}

    </div>
  );
}

export default Cart;