import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { GlobalStateProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
);
