import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/TrackingPage.css";

const TrackingPage = () => {
  const { caseId } = useParams(); // Get caseId from URL
  const [caseDetails, setCaseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/case/${caseId}`);
        setCaseDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching case details:", err.response?.data || err.message);
        setError(err.response?.data?.error || "Error fetching case details.");
        setLoading(false);
      }
    };

    fetchCaseDetails();
  }, [caseId]);

  if (loading) {
    return <div className="loading">Loading case details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    // <div className="tracking-page">
    //   <h2>Track Your Missing Report</h2>
    //   <p><strong>Case ID:</strong> {caseDetails._id}</p>
    //   <p><strong>Missing Person Name:</strong> {caseDetails.name}</p>
    //   {/* <p><strong>Complainant Name:</strong> {caseDetails.cname}</p> */}
    //   <p><strong>Description:</strong> {caseDetails.description}</p>
    //   <p><strong>Last Seen Location:</strong> {caseDetails.location}</p>
    //   {/* <p><strong>Contact Info:</strong> {caseDetails.contact}</p> */}
    //   {/* <p><strong>Email:</strong> {caseDetails.email}</p> */}
    //   {caseDetails.image && (
    //     <div>
    //       <strong>Uploaded Image:</strong>
    //       <div>
    //         <img
    //           src={`http://localhost:5000/${caseDetails.image}`}
    //           alt="Missing Person"
    //           className="case-image"
    //         />
    //       </div>
    //     </div>
    //   )}
    // </div>




    
    <div className="tracking-page">
    <h2 className="tracking-title">Track Your Missing Report</h2>
  
    <div className="tracking-card">
      {/* Image Section */}
      {caseDetails.image && (
        <div className="tracking-image-container">
          <img
            src={`http://localhost:5000/${caseDetails.image}`}
            alt="Missing Person"
            className="tracking-image"
          />
        </div>
      )}
  
      {/* Details Section */}
      <div className="tracking-info">
        <p>
          <strong>Case ID:</strong> {caseDetails._id}
        </p>
        <p>
          <strong>Missing Person Name:</strong> {caseDetails.name}
        </p>
        <p>
          <strong>Description:</strong> {caseDetails.description}
        </p>
        <p>
          <strong>Last Seen Location:</strong> {caseDetails.location}
        </p>
      </div>
    </div>
  </div>
  

  );
};

export default TrackingPage;
