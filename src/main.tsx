import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectRole from "./pages/SelectRole";
import Home from "./pages/Home";
import { GlobalStyles } from "./GlobalStyles";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/selectRole", element: <SelectRole /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>
);
