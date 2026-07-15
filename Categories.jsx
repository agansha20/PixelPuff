import "./Categories.css";
import Mug from "../assets/gift1.jpg";
import tshirt from "../assets/gift2.jpg";
import Case from "../assets/gift3.jpg";
import frame from "../assets/gift4.jpg";
import keychain from "../assets/gift5.jpg";
import sticker from "../assets/gift6.jpg";

function Categories() {
  return (
    <div className="categories-page">

      <h1 className="heading">Shop by Categories</h1>
      <p className="sub-heading">
        Choose your favorite personalized gift
      </p>

      <div className="category-container">

        <div className="category-card">
          <img src={Mug} alt="Mug" />
          <h3>Custom Mugs</h3>
        </div>

        <div className="category-card">
          <img src={tshirt} alt="T-Shirt" />
          <h3>Custom T-Shirts</h3>
        </div>

        <div className="category-card">
          <img src={Case} alt="Phone Case" />
          <h3>Phone Cases</h3>
        </div>

        <div className="category-card">
          <img src={frame} alt="Frame" />
          <h3>Photo Frames</h3>
        </div>

        <div className="category-card">
          <img src={keychain} alt="Keychain" />
          <h3>Keychains</h3>
        </div>

        <div className="category-card">
          <img src={sticker} alt="Sticker" />
          <h3>Stickers</h3>
        </div>

      </div>

    </div>
  );
}

export default Categories;