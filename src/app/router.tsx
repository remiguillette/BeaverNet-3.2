import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ServicePage from "../pages/ServicePage";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/BeaverPatch", element: <ServicePage serviceKey="publicSafety" /> },
  {
    path: "/francophone-services",
    element: <ServicePage serviceKey="francophoneServices" />,
  },
  { path: "/health-safety", element: <ServicePage serviceKey="healthSafety" /> },
  { path: "/animal-first-aid", element: <ServicePage serviceKey="animalFirstAid" /> },
  { path: "*", element: <NotFound /> },
]);
