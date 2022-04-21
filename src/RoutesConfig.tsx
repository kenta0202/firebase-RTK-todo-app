import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Counter from "./pages/counter";
import Task from "./pages/task";

const RoutesConfig: React.VFC = () => (
  <BrowserRouter>
    <Routes>
      {<Route path="/" element={<Task />} />}
      <Route path="/counter" element={<Counter />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={() => <Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
export default RoutesConfig;
