import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContex";
import { DataContextProvider } from "./context/DataContext";
import App from "./App";

const element = (
  <BrowserRouter>
    <CartContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);

const container = document.getElementById("root");

ReactDOM.render(element, container);
