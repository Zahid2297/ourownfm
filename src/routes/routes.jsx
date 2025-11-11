import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage";
import Slider from "../components/slider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/slider",
    element: <Slider/>,
  },
]);