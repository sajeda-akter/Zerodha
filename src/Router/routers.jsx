import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Graphs from "../Pages/Graph/Graphs";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/",
       element: <Graphs /> 
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
