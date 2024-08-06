import React from "react";
import "./App.css";
import logo from "./logo.svg";
// import { hello } from "./config";
import dotenv from "dotenv";
dotenv.config();

function App() {
  const hello = process.env.REACT_APP_HELLO;
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {hello}
        </a>
      </header>
    </div>
  );
}

export default App;
