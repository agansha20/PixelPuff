import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSearch() {

    const text = search.toLowerCase().trim();

    if (
      text === "mug" ||
      text === "mugs" ||
      text === "tshirt" ||
      text === "t-shirts" ||
      text === "phone case" ||
      text === "phone cases" ||
      text === "frame" ||
      text === "frames" ||
      text === "keychain" ||
      text === "keychains" ||
      text === "sticker" ||
      text === "stickers"
    ) {

      navigate("/shop");

    } else {

      alert("Product Not Found");

    }

  }

  return (
    <div>

      <nav className="navbar">

        <h2 className="logo">PixelPuff</h2>

        <div className="searchbox">

          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={handleSearch}>
            Search
          </button>

        </div>

        <ul className="menu">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li onClick={() => navigate("/categories")}>Categories</li>
          <li onClick={() => navigate("/product")}>Product</li>
          <li onClick={() => navigate("/cart")}>Cart</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>

      </nav>

      <section className="hero">

        <div className="hero-text">

          <h1>Make Every Gift Special</h1>

          <p>
            Create beautiful personalized gifts for your loved ones.
          </p>

          <button onClick={() => navigate("/shop")}>
            Shop Now
          </button>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600"
            alt="Gift"
          />

        </div>

      </section>

      <h2 className="title">OUR CATEGORIES</h2>

      <section className="categories">

        <div className="card" onClick={() => navigate("/shop")}>
          <h3>☕ Mugs</h3>
        </div>

        <div className="card" onClick={() => navigate("/shop")}>
          <h3>👕 T-Shirts</h3>
        </div>

        <div className="card" onClick={() => navigate("/shop")}>
          <h3>📱 Phone Cases</h3>
        </div>

        <div className="card" onClick={() => navigate("/shop")}>
          <h3>🖼️ Frames</h3>
        </div>

        <div className="card" onClick={() => navigate("/shop")}>
          <h3>🔑 Keychains</h3>
        </div>

        <div className="card" onClick={() => navigate("/shop")}>
          <h3>💖 Stickers</h3>
        </div>

      </section>

      <footer>

        <h3>PixelPuff</h3>

        <p>Made with love for Personalized Gifts</p>

      </footer>

    </div>
  );
}

export default Home;