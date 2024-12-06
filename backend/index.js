require("dotenv").config();
const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const reportRoutes = require("./routes/reportRoutes");
const caseRoutes = require('./routes/caseRoutes');
const authRoutes = require("./routes/authRoutes");
const updateStatusRoutes = require("./routes/updateStatusRoutes");
// const chatRoutes = require("./routes/chatRoutes");
const policeDashboardRoutes = require("./routes/PoliceDashboardRoutes");
const objectRoutes = require("./routes/objectRoutes");



const app = express();
// const server = http.createServer(app); // Create HTTP server
// const io = new Server(server);

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
// app.use("/api/chat", chatRoutes);
app.use("/api/dashboard", policeDashboardRoutes);


// Routes
app.use("/api/report", reportRoutes);
app.use('/api/case', caseRoutes);
app.use("/api/status", updateStatusRoutes);
app.use("/api/object", objectRoutes);



console.log("Object route loaded at /api/object");





// Handle Socket.IO connections
// io.on("connection", (socket) => {
//     console.log("New client connected:", socket.id);
  
//     // Listen for chat messages
//     socket.on("sendMessage", (data) => {
//       console.log("Message received:", data);
  
//       // Broadcast the message to all connected clients
//       io.emit("receiveMessage", data);
//     });
  
//     socket.on("disconnect", () => {
//       console.log("Client disconnected:", socket.id);
//     });
//   });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));











// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const connectDB = require("./config/db");
// const reportRoutes = require("./routes/reportRoutes");

// const app = express();

// // Connect to Database
// connectDB();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use("/uploads", express.static("uploads"));

// // Routes
// app.use("/api/report", reportRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
