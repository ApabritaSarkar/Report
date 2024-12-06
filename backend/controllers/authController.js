const Officer = require("../models/Officer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register an officer (for admin setup only)
exports.registerOfficer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check if officer already exists
    const existingOfficer = await Officer.findOne({ email });
    if (existingOfficer) {
      return res.status(400).json({ error: "Email is already registered." });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Save the officer to the database
    const officer = new Officer({ name, email, password });
    await officer.save();

    res.status(201).json({ message: "Officer registered successfully!" });
  } catch (error) {
    console.error("Error registering officer:", error.message);
    res.status(500).json({ error: "Error registering officer." });
  }
};


// Login an officer
exports.loginOfficer = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Debug: Log the received request body
    console.log("Login Request Body:", req.body);

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    // Find officer by email
    const officer = await Officer.findOne({ email });
    console.log("Officer Found:", officer);

    if (!officer) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Compare passwords
    // const trimmedPassword = password.trim();

    // const isMatch = await bcrypt.compare(trimmedPassword, officer.password);

    // console.log("Password Match:", isMatch);

    // if (!isMatch) {
    //   return res.status(400).json({ error: "Invalid email or password." });
    // }

    if (officer.password !== password) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: officer._id, email: officer.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Respond with token and officer details
    res.status(200).json({
      message: "Login successful!",
      token,
      officer: { id: officer._id, name: officer.name, email: officer.email },
    });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ error: "Error logging in." });
  }
};
