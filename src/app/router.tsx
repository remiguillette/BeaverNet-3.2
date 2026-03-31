import { createBrowserRouter } from "react-router-dom";
import Maintenance from "../pages/Maintenance";

export const TEMPORARY_MAINTENANCE_PATH = "/maintenance";

export const router = createBrowserRouter([
  { path: TEMPORARY_MAINTENANCE_PATH, element: <Maintenance /> },
  { path: "*", element: <Maintenance /> },
]);
