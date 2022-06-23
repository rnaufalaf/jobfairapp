import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthRoute from "../routers/AuthRoute";
import AppRoute from "../routers/AppRoute";

const MainContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/auth" />} />
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/jobs/*" element={<AppRoute />} />
    </Routes>
  );
};

export default MainContainer;
