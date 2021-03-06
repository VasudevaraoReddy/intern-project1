import React, { useState } from "react";
import Axios from "axios";
import Loader from 'react-loader-spinner'
import "./index.css";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [fullnameReg, setFullnameReg] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const register = (e) => {
    e.preventDefault();
    if (usernameReg !== "" && passwordReg !== "" && emailReg !== "" && fullnameReg !== "") {
      Axios.post("https://login-v-server.herokuapp.com/register", {
        username: usernameReg,
        password: passwordReg,
        fullName: fullnameReg,
        email: emailReg,
      }).then((response) => {
        setMsg(response.data.registrationMsg);
        setIsLoading(false)
      });
      setUsernameReg("");
      setPasswordReg("");
      setEmailReg("");
      setFullnameReg("");
      if(msg != ""){
        setIsLoading(true)
      }else{
        setIsLoading(true)
      }
    } else {
      setMsg("Please fill all fields");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={register} className="form">
        <input
          className="input-box"
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          placeholder="Username"
          value={usernameReg}
        />
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          placeholder="email"
          value={emailReg}
          className="input-box"
        />
        <input
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          placeholder="password"
          value={passwordReg}
          className="input-box"
        />
        <input
          type="text"
          onChange={(e) => {
            setFullnameReg(e.target.value);
          }}
          placeholder="Full Name"
          value={fullnameReg}
          className="input-box"
        />
        <button type="submit" className="btn">
          Register
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

export default Register;
