import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectRole from "./pages/SelectRole";
import Home from "./pages/Home";
import { GlobalStyles } from "./GlobalStyles";
import Layout from "./layout";
// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/selectRole", element: <SelectRole /> },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the parent
    children: [
      { path: "/", element: <Home /> },
      { path: "/selectRole", element: <SelectRole /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>
);
