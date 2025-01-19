import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { UserProvider } from "@context/UserProvider";
import App from "./App";
import { i18n } from "@configs/i18n.config";
import "./index.css";

i18n.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
