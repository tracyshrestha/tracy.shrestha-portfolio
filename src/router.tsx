import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/sections/About";
import Contact from "./pages/sections/Contact";
import ErrorPage from "./pages/ErrorPage";
import Crm from "./pages/sections/projects/Crm";
import OpenData from "./pages/sections/projects/OpenData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      // Individual project pages
      { path: "work/crm", element: <Crm /> },
      { path: "work/opendata", element: <OpenData /> },
    ],
  },
]);

export default router;
