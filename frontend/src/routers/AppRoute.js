import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import JobListPage from "../pages/JobListPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import SearchedJobsPage from "../pages/SearchedJobsPage";

const AppRoute = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/jobs/list" />}></Route>
        <Route path="/list" element={<JobListPage />} />
        <Route
          path="/list/search/:term/:city/:type"
          element={<SearchedJobsPage />}
        />
        <Route path="/details/:id" element={<JobDetailsPage />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
