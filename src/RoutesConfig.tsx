import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Counter from "./pages/counter";

const RoutesConfig: React.VFC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Counter />} />
      {/* <Route path="/sample" element={<Sample />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={() => <Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
export default RoutesConfig;
