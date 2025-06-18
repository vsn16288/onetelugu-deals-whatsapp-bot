const express = require("express");
const twilio = require("twilio");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Twilio credentials from .env
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Test route
app.get("/", (req, res) => {
  res.send("✅ OneTelugu Deals Bot is running");
});

// Webhook for incoming WhatsApp messages
app.post("/webhook", async (req, res) => {
  const incomingMsg = req.body.Body?.toLowerCase();
  const from = req.body.From;

  console.log("📩 Message from", from, ":", incomingMsg);

  if (!incomingMsg) {
    return res.send("❗ No message received.");
  }

  try {
    const reply = `🔍 You searched for: *${incomingMsg}*\nWe’ll get the best deals for you!`;

    await client.messages.create({
      body: reply,
      from: "whatsapp:+14155238886", // Twilio sandbox number
      to: from,
    });

    res.send("✅ Message sent successfully");
  } catch (error) {
    console.error("❌ Error sending message:", error.message);
    res.status(500).send("❌ Failed to send message");
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
