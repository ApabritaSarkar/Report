// const sgMail = require("@sendgrid/mail");
// require("dotenv").config(); // Ensure environment variables are loaded

// // Set SendGrid API Key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// // Define email content
// const msg = {
//   to: "recipient-email@example.com", // Replace with your email for testing
//   from: process.env.EMAIL, // Verified sender email address
//   subject: "Test Email from SendGrid",
//   text: "This is a test email sent using SendGrid and @sendgrid/mail.",
//   html: "<p>This is a test email sent using SendGrid and <strong>@sendgrid/mail</strong>.</p>",
// };

// // Send the email
// sgMail
//   .send(msg)
//   .then((response) => {
//     console.log("Email sent successfully:", response[0].statusCode);
//   })
//   .catch((error) => {
//     console.error("Error sending email:", error.response ? error.response.body : error.message);
//   });
