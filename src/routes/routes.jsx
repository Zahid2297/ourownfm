import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Slider from "../components/slider";
import NotFound from "../pages/404/notFound";
import ComingSoonPage from "@/pages/coming_soon/comingSoon";
import LandingPage from "@/pages/landing/landingPage";
import ServicePage from "@/pages/Services/servicePage";
import PixaLandingPage from "@/pages/pixa/PixaLandingPage";
import AboutUsPage from "@/pages/pixa/AboutUsPage";
import CoursesPage from "@/pages/pixa/CoursesPage";

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
  {
    path: "/pixa",
    element: <PixaLandingPage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
]);
