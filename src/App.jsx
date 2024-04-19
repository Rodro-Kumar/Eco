import React from "react";
import Home from "./Pages/Home/Home";
import RootLayout from "./Common/RootLayout/RootLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
