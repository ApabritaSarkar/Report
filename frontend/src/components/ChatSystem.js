// import React, { useState, useEffect } from "react";
// // import io from "socket.io-client";
// import axios from "axios";
// import "../styles/ChatSystem.css";

// // const socket = io("http://localhost:5000"); // Connect to Socket.IO backend

// const ChatSystem = ({ caseId }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [sender, setSender] = useState("complainant"); // or "officer"

//   // Fetch chat messages when the component loads
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/chat/${caseId}`);
//         setMessages(response.data);
//       } catch (error) {
//         console.error("Error fetching chat messages:", error.message);
//       }
//     };

//     fetchMessages();

//     // Listen for incoming messages
//     socket.on("receiveMessage", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => socket.off("receiveMessage");
//   }, [caseId]);

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       const messageData = {
//         caseId,
//         sender,
//         message: newMessage,
//         timestamp: new Date(),
//       };

//       // Emit the message via Socket.IO
//       socket.emit("sendMessage", messageData);

//       // Add the message to the local state
//       setMessages((prevMessages) => [...prevMessages, messageData]);

//       // Clear the input field
//       setNewMessage("");
//     }
//   };

//   return (
//     <div className="chat-system">
//       <div className="chat-messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`chat-message ${msg.sender === "complainant" ? "from-complainant" : "from-officer"}`}
//           >
//             <p>{msg.message}</p>
//             <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatSystem;
