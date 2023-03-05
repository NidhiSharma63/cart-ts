import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App: React.FC = (): JSX.Element => {
  const Routes = {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "cart", element: <Cart /> },
    ],
  };
  const routing = useRoutes([Routes]);

  return <>{routing}</>;
};

export default App;
