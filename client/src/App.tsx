import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login, Home, SinglePost, WritePost, Contact, Links } from "@/pages";
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
        path: ROUTES.LINKS,
        element: <Links />,
      },
      {
        path: "/write",
        element: <WritePost />,
      },
    ],
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
