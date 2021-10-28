import { Redirect } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { store } from "../../App";
import Axios from "axios";
import "./index.css";

const Profile = () => {
  const onClickLogout = () => {
    setToken(null);
  };
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  useEffect(() => {
    Axios.get("https://login-v-server.herokuapp.com/profile", {
      headers: {
        "x-token": token,
      },
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (token === null) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {data && (
        <div className="profile">
          <h1>Welcome {data[0].username}</h1>
          <button type="button" onClick={onClickLogout} className="btn">
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
