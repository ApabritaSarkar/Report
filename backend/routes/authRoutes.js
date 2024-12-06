const express = require("express");
const { registerOfficer, loginOfficer } = require("../controllers/authController");
const router = express.Router();

// Register a new officer (admin use only)
router.post("/register", registerOfficer);

// Login route
router.post("/login", loginOfficer);

module.exports = router;
