import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import PACE from "./PACE/PACE.tsx";
import CV from "./CV/CV.js";

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

const Redirect = ({ to }) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Redirect to="/pace" />,
  },
  {
    path: "/about",
    element: <CV />,
  },
  {
    path: "/pace",
    element: <PACE />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
