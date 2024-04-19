import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Register, Login, Home, SinglePost, WritePost, Contact } from "@/pages";
import { Layout } from "@/layout";
import { ROUTES } from "@/constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
      {
        path: ROUTES.POST,
        element: <SinglePost />,
      },
      {
        path: "/write",
        element: <WritePost />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
