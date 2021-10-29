import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import Loader from 'react-loader-spinner'
import Axios from "axios";
import { store } from "../../App";
import "./index.css";

const Login = () => {
  const [usernameEnter, setUserNameEnter] = useState("");
  const [passwordEnter, setPasswordEnter] = useState("");
  const [token, setToken] = useContext(store);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const onClickLogin = (e) => {
    e.preventDefault();
    if (usernameEnter !== "" && passwordEnter !== "") {
      Axios.post("https://login-v-server.herokuapp.com/login", {
        username: usernameEnter,
        password: passwordEnter,
      }).then((response) => {
        setToken(response.data.token);
        setMsg(response.data.userMsg);
        setIsLoading(false)
      });
      setUserNameEnter("");
      setPasswordEnter("");
      if (msg != "") {
        setIsLoading(true)
      } else {
        setIsLoading(true)
      }
    } else {
      setMsg("Please fill all fields");
    }
  };

  if (token != null) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className="register-container">
      <h1>Login</h1>
      <form className="form" onSubmit={onClickLogin}>
        <input
          className="input-box"
          type="text"
          value={usernameEnter}
          placeholder="Username"
          onChange={(e) => setUserNameEnter(e.target.value)}
        />
        <input
          type="password"
          className="input-box"
          placeholder="Password"
          value={passwordEnter}
          onChange={(e) => setPasswordEnter(e.target.value)}
        />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
      {isLoading ? (
        <Loader type="Oval" color="blue" height={50} width={50} />
      ) : (
        <p className="msg_n">{msg}</p>
      )}
    </div>
  );
};

export default Login;
