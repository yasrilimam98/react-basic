import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Kontak from "./pages/Kontak";
import Nav from "./pages/Nav";
import Sejarah from "./pages/Sejarah";
import Tentang from "./pages/Tentang";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Kontak />
    <Sejarah />
    <Tentang />
  </React.StrictMode>
);

reportWebVitals();
