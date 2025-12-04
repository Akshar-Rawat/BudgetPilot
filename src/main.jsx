import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { appLoader } from "./App.jsx";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard.jsx";
import Error from "./pages/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { logoutAction } from "./actions/logout.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        action:dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        element: null,
        action: logoutAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>
);