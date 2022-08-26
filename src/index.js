import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ScriptURL } from "./hooks";
import { BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

const Demo = () =>{
  ScriptURL('./scripts/polyfills-modern.a6bcf643.js');
  ScriptURL('./scripts/index.61feb879.js');
  ScriptURL('./scripts/index.1b0aa07c.js');
  ScriptURL('./scripts/GameGridList.6466e9db.js');
}
Demo();