import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { TranslationProvider } from "./contexts/TranslationContext";
import "./styles/global.css";
import CookieConsent from "./components/layout/CookieConsent";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TranslationProvider>
      <>
        <RouterProvider router={router} />
        <CookieConsent />
      </>
    </TranslationProvider>
  </React.StrictMode>,
);
