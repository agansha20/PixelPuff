import "./Shop.css";

import Mug from "../assets/gift1.jpg";
import tshirt from "../assets/gift2.jpg";
import Case from "../assets/gift3.jpg";
import frame from "../assets/gift4.jpg";
import keychain from "../assets/gift5.jpg";
import sticker from "../assets/gift6.jpg";

function Shop() {

  function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added Successfully!");

  }

  return (
    <div className="shop">

      <h1>Our Products</h1>

      <div className="product-container">

        <div className="card">
          <img src={Mug} alt="Mug" />
          <h3>Customized Mug</h3>
          <p>₹299</p>

          <button
            onClick={() =>
              addToCart({
                name: "Customized Mug",
                price: 299,
                image: Mug,
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="card">
          <img src={tshirt} alt="T-Shirt" />
          <h3>Customized T-Shirt</h3>
          <p>₹599</p>

          <button
            onClick={() =>
              addToCart({
                name: "Customized T-Shirt",
                price: 599,
                image: tshirt,
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="card">
          <img src={Case} alt="Phone Case" />
          <h3>Phone Case</h3>
          <p>₹399</p>

          <button
            onClick={() =>
              addToCart({
                name: "Phone Case",
                price: 399,
                image: Case,
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="card">
          <img src={frame} alt="Frame" />
          <h3>Photo Frame</h3>
          <p>₹699</p>

          <button
            onClick={() =>
              addToCart({
                name: "Photo Frame",
                price: 699,
                image: frame,
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="card">
          <img src={keychain} alt="Keychain" />
          <h3>Customized Keychain</h3>
          <p>₹199</p>

          <button
            onClick={() =>
              addToCart({
                name: "Customized Keychain",
                price: 199,
                image: keychain,
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="card">
          <img src={sticker} alt="Sticker" />
          <h3>Customized Sticker</h3>
          <p>₹149</p>

          <button
            onClick={() =>
              addToCart({
                name: "Customized Sticker",
                price: 149,
                image: sticker,
              })
            }
          >
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}

export default Shop;