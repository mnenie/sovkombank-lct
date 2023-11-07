import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/main.scss";
import UserStore from "./store/UserStore.js";
import { MapProvider } from "./components/Map/MapProvider.jsx";
export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context.Provider
    value={{
      user: new UserStore(),
    }}
  >
    <MapProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MapProvider>
  </Context.Provider>
);
