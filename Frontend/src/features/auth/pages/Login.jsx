import React from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(username,password)

    navigate('/')
  }

  if(loading){
    return(<main>
        <h1>Loading...</h1>
    </main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setusername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
          />
          <input
            onInput={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <button className="button primary-button">Login</button>
          <p>
            Don't have an account? <Link to={"/register"}>Create one.</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
