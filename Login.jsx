import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <>
    <div className="login-page">
      <div className="login-card">
        <h1>PixelPuff</h1>
        <p>Custom Gift Store</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-box"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input-box"
            required
          />

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
   </>
  );
}

export default Login;