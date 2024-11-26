


// import React, { useState } from "react";
// import axios from "axios";

// import "../styles/ReportMissingForm.css";

// const ReportMissingForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     location: "",
//     cname: "",
//     contact: "",
//     email: "",
//     image: "",
//   });

//   const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

//   // Handle text input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   // Submit the form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     console.log("Submitting form data:", Object.fromEntries(data.entries()));

//     try {
//       const response = await axios.post("http://localhost:5000/api/report", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setStatusMessage({
//         type: "success",
//         text: `Case submitted successfully! Your case ID is ${response.data.caseId}`,
//       });

//       // Clear the form
//       setFormData({
//         name: "",
//         description: "",
//         location: "",
//         cname: "",
//         contact: "",
//         email: "",
//         image: "",
//       });
//     } catch (error) {
//       console.error("Error submitting the case:", error.response?.data || error.message);
//       setStatusMessage({
//         type: "error",
//         text: error.response?.data?.error || "Submission failed. Please try again later.",
//       });
//     }
//   };

//   return (
//     <div className="form-container">
//       {/* Status Message Outside the Form */}
//       {statusMessage.text && (
//         <div className={statusMessage.type === "success" ? "success-message" : "error-message"}>
//           {statusMessage.text}
//         </div>
//       )}

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="missing-report-form">
//         <h2>Report Missing Person/Item</h2>

//         <div>
//           <label htmlFor="name">Missing Person Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             placeholder="Enter the name"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             placeholder="Enter a description"
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <div>
//           <label htmlFor="location">Last Seen Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             placeholder="Enter the last seen location"
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div>
//           <label htmlFor="image">Upload Image:</label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             onChange={handleFileChange}
//             accept="image/*"
//           />
//         </div>
        
//         <div>
//           <label htmlFor="cname">Complainant Name:</label>
//           <input
//             type="text"
//             id="cname"
//             name="cname"
//             value={formData.cname}
//             placeholder="Enter the name"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="contact"> Complainant Contact Info:</label>
//           <input
//             type="text"
//             id="contact"
//             name="contact"
//             value={formData.contact}
//             placeholder="Enter your contact info"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Complainant Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             placeholder="Enter your email"
//             onChange={handleChange}
//             required
//           />
//         </div>

       

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ReportMissingForm;


// src/components/ReportMissingForm.js





// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/ReportMissingForm.css";

// const ReportMissingForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     location: "",
//     cname: "",
//     contact: "",
//     email: "",
//     image: "",
//   });

//   const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
   

//   // Handle text input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   // Submit the form
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
  
//     const data = new FormData(); // Create a FormData object for multipart/form-data
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]); // Append each field in formData to FormData object
//     });
  
//     try {
//       // Send a POST request to the server
//       const response = await axios.post("http://localhost:5000/api/report", data, {
//         headers: { "Content-Type": "multipart/form-data" }, // Set headers for form data
//       });


       
  
//       // Use the message sent by the server
//       setStatusMessage({
//         type: "success",
//         text: response.data.message, // Use the server's success message
//       });
  
//       // Clear the form data
//       setFormData({
//         name: "",
//         description: "",
//         location: "",
//         cname: "",
//         contact: "",
//         email: "",
//         image: "",
//       });
//     } catch (error) {
//       // Handle errors and show the error message returned by the server
//       console.error("Error submitting the case:", error.response?.data || error.message);
//       setStatusMessage({
//         type: "error",
//         text: error.response?.data?.error || "Submission failed. Please try again later.",
//       });
//     }
//   };
  

//   return (
//     <div className="form-container">
//       {/* Status Message Outside the Form */}
//       {statusMessage.text && (
//         <div className={statusMessage.type === "success" ? "success-message" : "error-message"}>
//           {statusMessage.text}
//         </div>
//       )}

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="missing-report-form">
//         <h2>Report Missing Person/Item</h2>

//         {/* Missing Person Name */}
//         <div>
//           <label htmlFor="name">Missing Person Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             placeholder="Enter the name"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             placeholder="Enter a description"
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         {/* Last Seen Location */}
//         <div>
//           <label htmlFor="location">Last Seen Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             placeholder="Enter the last seen location"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label htmlFor="image">Upload Image:</label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             onChange={handleFileChange}
//             accept="image/*"
//           />
//         </div>

//         {/* Complainant Name */}
//         <div>
//           <label htmlFor="cname">Complainant Name:</label>
//           <input
//             type="text"
//             id="cname"
//             name="cname"
//             value={formData.cname}
//             placeholder="Enter your name"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Contact Info */}
//         <div>
//           <label htmlFor="contact">Complainant Contact Info:</label>
//           <input
//             type="text"
//             id="contact"
//             name="contact"
//             value={formData.contact}
//             placeholder="Enter your contact info"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label htmlFor="email">Complainant Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             placeholder="Enter your email"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ReportMissingForm;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ReportMissingForm.css";

const ReportMissingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    cname: "",
    contact: "",
    email: "",
    image: "",
  });

  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [caseId, setCaseId] = useState(null); // Store the submitted case ID
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:5000/api/report", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCaseId(response.data.caseId); // Save the case ID
      // setLatestCaseId(response.data.caseId); // Update the global state
      setStatusMessage({
        type: "success",
        text: response.data.message, // Show the success message
      });

      setFormData({
        name: "",
        description: "",
        location: "",
        cname: "",
        contact: "",
        email: "",
        image: "",
      });
    } catch (error) {
      console.error("Error submitting the case:", error.response?.data || error.message);
      setStatusMessage({
        type: "error",
        text: error.response?.data?.error || "Submission failed. Please try again later.",
      });
    }
  };

  const handleTrackCase = () => {
    if (caseId) {
      navigate(`/track/${caseId}`); // Navigate to the specific case route
    }
  };

  return (
    <div className="form-container">
      {/* Status Message */}
      {statusMessage.text && (
        <div className={statusMessage.type === "success" ? "success-message" : "error-message"}>
          {statusMessage.text}
          {caseId && (
            <button
              onClick={handleTrackCase}
              className="track-case-button"
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Track Your Case
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="missing-report-form">
        <h2>Report Missing Person/Item</h2>
        <div>
          <label htmlFor="name">Missing Person Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter the name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            placeholder="Enter a description"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="location">Last Seen Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            placeholder="Enter the last seen location"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        
        <div>
          <label htmlFor="cname">Complainant Name:</label>
          <input
            type="text"
            id="cname"
            name="cname"
            value={formData.cname}
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact">Complainant Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            placeholder="Enter your contact info"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Complainant Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportMissingForm;
