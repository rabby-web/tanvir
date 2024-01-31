import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-inter bg-white dark:bg-[#0F172A]">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
