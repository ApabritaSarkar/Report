const express = require("express");
const { reportMissing } = require("../controllers/reportController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", upload.single("image"), reportMissing);

module.exports = router;





// const express = require("express");
// const upload = require("../middleware/uploadMiddleware");
// const { reportMissing } = require("../controllers/reportController");

// const router = express.Router();

// // Route for Reporting a Missing Person/Item
// router.post("/", (req, res, next) => {
//   // File Upload Middleware
//   upload.single("image")(req, res, (err) => {
//     if (err) {
//       if (err.code === "LIMIT_FILE_SIZE") {
//         // Handle File Size Limit Error
//         return res.status(400).json({ error: "File size too large. Max 5MB allowed." });
//       }
//       // Other File Upload Errors
//       return res.status(400).json({ error: err.message });
//     }
//     console.log("File uploaded successfully:", req.file); // Log the uploaded file
//     next();
//   });
// }, reportMissing);

// module.exports = router;
