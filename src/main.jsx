import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import { i18n } from "./lib/configs/i18n.config";
import "./index.css";

i18n.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
