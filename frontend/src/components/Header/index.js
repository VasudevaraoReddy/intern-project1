import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./index.css";
import { store } from "../../App";

const Header = () => {
  const [token] = useContext(store);
  return (
    <>
      {!token && (
        <nav className="nav-header">
          <div className="blog-container">
            <ul className="nav-menu">
              <Link className="nav-link" to="/register">
                <li>Register</li>
              </Link>
              <Link className="nav-link" to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
