// @ts-nocheck
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes";
function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
