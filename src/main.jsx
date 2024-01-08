import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ProductContextProvider from "./context/ProductContext.jsx";

import "react-lazy-load-image-component/src/effects/blur.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
  </React.StrictMode>
);
