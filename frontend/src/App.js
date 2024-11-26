import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReportMissingForm from "./components/ReportMissingForm";
import TrackingPage from "./components/TrackingPage";

function App() {
  const [latestCaseId, setLatestCaseId] = useState(null);

  return (
    <Router>
      <Navbar latestCaseId={latestCaseId} />
      <Routes>
        <Route
          path="/report"
          element={<ReportMissingForm setLatestCaseId={setLatestCaseId} />}
        />
        <Route path="/track/:caseId" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
