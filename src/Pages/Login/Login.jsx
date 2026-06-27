import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
const [isLogin, setIsLogin] = useState(true);
const navigate = useNavigate();

return ( <div className="login-page"> <form className="login-form">

    {isLogin ? (
      <>
        <h2>User Login</h2>

        <input type="email" placeholder="Enter Email" />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button type="submit" onClick={()=>navigate("/")}>
          Login
        </button>

        <p
          className="switch-form"
          onClick={() => setIsLogin(false)}
        >
          Don't have an account? Sign Up
        </p>
      </>
    ) : (
      <>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Create Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit">
          Sign Up
        </button>

        <p
          className="switch-form"
          onClick={() => setIsLogin(true)}
        >
          Already have an account? Login
        </p>
      </>
    )}

  </form>
</div>

);
}

export default Login;
