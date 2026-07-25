import React from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useState } from "react";

const Register = () => {
  const { user, loading, handleRegister } = useAuth();

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister(username, email, password);

    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
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
              setemail(e.target.value);
            }}
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
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
          <button className="button primary-button">Register</button>
          <p>
            Already have an account?{" "}
            <Link to={"/login"}>Login here.</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
