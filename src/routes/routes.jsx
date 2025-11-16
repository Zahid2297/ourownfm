import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Slider from "../components/slider";
import NotFound from "../pages/404/notFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/slider",
    element: <Slider />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
