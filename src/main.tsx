import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectRole from "./pages/SelectRole";
import Home from "./pages/Home";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/selectRole", element: <SelectRole /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
