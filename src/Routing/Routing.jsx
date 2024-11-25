import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokeFetch from "../API/PokeFetch";
import Pokemon from "../API/pokemon";

export default function Routing() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <PokeFetch />,
    },
    {
      path: "/pokemon/:id",
      element: <Pokemon />,
    },
  ]);
  return <RouterProvider router={routing} />;
}
