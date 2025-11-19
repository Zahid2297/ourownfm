import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Slider from "../components/slider";
import NotFound from "../pages/404/notFound";
import ComingSoonPage from "@/pages/coming_soon/comingSoon";
import LandingPage from "@/pages/landing/landingPage";
import ServicePage from "@/pages/Services/servicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoonPage />,
  },
  {
    path: "/slider",
    element: <Slider />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/services",
    element: <ServicePage />,
  },
]);
