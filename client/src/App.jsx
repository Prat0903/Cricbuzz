import { createBrowserRouter } from "react-router";
import AppLayout from "./layout/AppLayout";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import AdminHome from "./pages/private/AdminHome";

let router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  },
]);

export default router;
