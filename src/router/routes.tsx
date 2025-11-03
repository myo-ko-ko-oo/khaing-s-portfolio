import HomePage from "@/pages/client/HomePage";
import NotFoundPage from "@/pages/client/NotFoundPage";
import RootLayout from "@/pages/client/RootLayout";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

export default router;
