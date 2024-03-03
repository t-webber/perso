import React from "react";
import ReactDOM from "react-dom/client";
import "./body.css";

import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { createBrowserRouter } from "react-router-dom";
import { ReportHandler } from "web-vitals";

const reportWebVitals = (onPerfEntry: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(console.log);
