import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Components/Login.jsx';
import Home from './Components/Home.jsx';
import Shop from './Components/Shop.jsx';
import Categories from './Components/Categories.jsx';
import Contact from './Components/contact.jsx';
import Product from './Components/Product.jsx';
import Cart from './Components/Cart.jsx';


function App() {

  return (
    <BrowserRouter basename="/PixelPuff">
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
