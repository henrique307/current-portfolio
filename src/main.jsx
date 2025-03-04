import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { i18next } from "./translations/i18n";
import "./index.css";
import { I18nextProvider } from "react-i18next";

console.log(`Versão: ${__APP_VERSION__}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
