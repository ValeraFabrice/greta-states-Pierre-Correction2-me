import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Compteurs from "./components/Compteurs";
import Selecteurs from "./components/Selecteurs";
import Configurator from "./components/Configurator";
import InputsDemo from "./components/InputsDemo";
import Converters from "./components/Converters";
import Converters2 from "./components/Converters2";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="compteurs" element={<Compteurs />} />
        <Route path="selecteurs" element={<Selecteurs />} />
        <Route path="configurateur" element={<Configurator />} />
        <Route path="inputsdemo" element={<InputsDemo />} />
        <Route path="converters" element={<Converters />} />
        <Route path="converters2" element={<Converters2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
