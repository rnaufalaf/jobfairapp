import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import JobListPage from "../pages/JobListPage";
import JobDetailsPage from "../pages/JobDetailsPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/jobs/list" />}></Route>
      <Route path="/list" element={<JobListPage />} />
      <Route path="/details/:id" element={<JobDetailsPage />}></Route>
    </Routes>
  );
};

export default AppRoute;
