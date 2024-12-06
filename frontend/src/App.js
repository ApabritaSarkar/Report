import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

import PoliceDashboard from "./components/PoliceDashboard";
import CaseTable from "./components/CaseTable";
import CaseDetailsPage from "./components/CaseDetailsPage";
import HomePage from "./components/HomePage";
import ReportMissingObject from "./components/ReportMissingObject";
import ObjectDetailsPage from "./components/ObjectDetailsPage"; // Adjust path if necessary


import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
import ReportMissingForm from "./components/ReportMissingForm";
// import TrackingPage from "./components/TrackingPage";
import TrackingPage from './components/TrackingPage';

function App() {

  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  

  return (
    <Router>
      {/* <Navbar latestCaseId={latestCaseId} /> */}
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<PoliceDashboard />} />
        <Route path="/report" element={<ReportMissingForm />} />
        <Route path="/report-object" element={<ReportMissingObject />} />
        <Route path="/cases" element={<CaseTable />} />
        <Route path="/case-details/:caseId" element={<CaseDetailsPage />} />
        <Route path="/object/:id" element={<ObjectDetailsPage />} />
        
        {/* <Route path="/object/:id" element={<ObjectDetailsPage />} /> */}

        <Route path="/track/:caseId" element={<TrackingPage />} />
        <Route path="/" element={authToken ? <Navigate to="/dashboard" /> : <Login setAuthToken={setAuthToken} />} />
        <Route path="/dashboard" element={authToken ? <PoliceDashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
