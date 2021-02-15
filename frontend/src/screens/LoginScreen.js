import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../css/LoginScreen.css";

const LoginScreen = ({ history }) => {
  const usehistory = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/products");
      usehistory.go(0);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {error && (
          <span className="error-message">{error}! Please try again</span>
        )}

        <div className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            tabIndex={1}
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Password:</label> */}

          <input
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            tabIndex={2}
          />
          <Link
            to="/forgotpassword"
            className="login-screen__forgotpassword"
            tabIndex={4}
          >
            Forgot Password?
          </Link>
        </div>

        <button type="submit" tabIndex={3}>
          Login
        </button>
        <span className="login-screen__subtext">
          Do not have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
