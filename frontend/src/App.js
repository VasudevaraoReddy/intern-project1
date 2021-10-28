import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import "./App.css";

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <store.Provider value={[token, setToken]}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </store.Provider>
  );
};

export default App;
