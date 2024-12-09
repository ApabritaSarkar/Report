const express = require("express");
const router = express.Router();

router.get("/start", (req, res) => {
  res.status(200).json({ message: "Live feed started successfully.", url: "http://localhost:5001/live_feed" });
});

module.exports = router;
