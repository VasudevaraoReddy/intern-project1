import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import Axios from "axios";
import { store } from "../../App";
import "./index.css";

const Login = () => {
  const [usernameEnter, setUserNameEnter] = useState("");
  const [passwordEnter, setPasswordEnter] = useState("");
  const [token, setToken] = useContext(store);
  const [msg, setMsg] = useState("");


  const onClickLogin = (e) => {
    e.preventDefault();
   if(usernameEnter!=""&&passwordEnter!=""){
    Axios.post("https://login-v-server.herokuapp.com/login", {
      username: usernameEnter,
      password: passwordEnter,
    }).then((response) => {
      setToken(response.data.token);
      setMsg(response.data.userMsg);
    });
    setUserNameEnter("");
    setPasswordEnter("");
   }else{
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
          placeholder="Email"
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
      <p className="msg_n">{msg}</p>
    </div>
  );
};

export default Login;
