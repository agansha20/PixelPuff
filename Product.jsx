import "./Product.css";
import Mug from "../assets/gift1.jpg";
import tshirt from "../assets/gift2.jpg";
import Case from "../assets/gift3.jpg";
import frame from "../assets/gift4.jpg";
import keychain from "../assets/gift5.jpg";
import sticker from "../assets/gift6.jpg";

function Product() {
  return (
    <div className="product-page">

      <h1 className="heading">Our Products</h1>

      <div className="product-container">

        <div className="product-card">
          <img src={Mug} alt="Mug" />
          <h3>Customized Mug</h3>
          <p>₹299</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={tshirt} alt="T-Shirt" />
          <h3>Customized T-Shirt</h3>
          <p>₹599</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={Case} alt="Phone Case" />
          <h3>Phone Case</h3>
          <p>₹399</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={frame} alt="Frame" />
          <h3>Photo Frame</h3>
          <p>₹699</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={keychain} alt="Keychain" />
          <h3>Customized Keychain</h3>
          <p>₹199</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={sticker} alt="Sticker" />
          <h3>Customized Sticker</h3>
          <p>₹149</p>
          <button>Add to Cart</button>
        </div>

      </div>

    </div>
  );
}

export default Product;