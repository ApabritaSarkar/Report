const express = require("express");
const { getMessagesByCaseId, addMessage } = require("../controllers/chatController");
try {
    const Chat = require("../models/Chat");
    console.log("Chat model loaded successfully.");
  } catch (error) {
    console.error("Error loading Chat model:", error);
  }
const router = express.Router();


// Get all messages for a specific case
router.get("/:caseId", getMessagesByCaseId);

// Add a new chat message
router.post("/", addMessage);

module.exports = router;
