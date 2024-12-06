const Chat = require("../models/Chat");
const Case = require("../models/Case");

// Fetch chat messages for a specific case
exports.getMessagesByCaseId = async (req, res) => {
  try {
    const { caseId } = req.params;

    // Check if the case exists
    const caseExists = await Case.findById(caseId);
    if (!caseExists) {
      return res.status(404).json({ error: "Case not found" });
    }

    // Fetch chat messages sorted by timestamp
    const messages = await Chat.find({ caseId }).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching chat messages:", error.message);
    res.status(500).json({ error: "Error fetching chat messages" });
  }
};

// Save a new chat message
exports.addMessage = async (req, res) => {
  try {
    const { caseId, sender, message } = req.body;

    // Validate required fields
    if (!caseId || !sender || !message) {
      return res.status(400).json({ error: "Validation Error: Missing required fields" });
    }

    // Check if the case exists
    const caseExists = await Case.findById(caseId);
    if (!caseExists) {
      return res.status(404).json({ error: "Case not found" });
    }

    // Save the message to the database
    const newMessage = new Chat({ caseId, sender, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.error("Error saving chat message:", error.message);
    res.status(500).json({ error: "Error saving chat message" });
  }
};
