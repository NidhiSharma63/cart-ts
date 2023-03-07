import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContex";

import App from "./App";

const element = (
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>
);

const container = document.getElementById("root");

ReactDOM.render(element, container);
