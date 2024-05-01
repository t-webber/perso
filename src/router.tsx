import React from "react";

import PACE from "./PACE";
import CV from "./CV";

import { useNavigate } from "react-router-dom";

const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return null;
};

const routes = [
  {
    path: "/about",
    element: <CV />,
  },
  {
    path: "/pace",
    element: <PACE />,
  },
  {
    path: "/cv",
    element: <Redirect to="/about" />,
  },
  {
    path: "*",
    element: <Redirect to="/pace" />,
  },
];

export { routes };
