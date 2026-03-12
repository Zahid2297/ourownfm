import { createBrowserRouter } from "react-router-dom";
import Slider from "../components/slider";
import NotFound from "../pages/404/notFound";
import LandingPage from "@/pages/landing/landingPage";
import ServicePage from "@/pages/Services/servicePage";
import PixaLandingPage from "@/pages/pixa/PixaLandingPage";
import AboutUsPage from "@/pages/pixa/AboutUsPage";
import CoursesPage from "@/pages/pixa/CoursesPage";
import TermsPage from "@/pages/pixa/TermsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PixaLandingPage />,
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
  {
    path: "/terms",
    element: <TermsPage />,
  },
]);
