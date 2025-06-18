const express = require("express");
const app = express();
const twilio = require("twilio");
require("dotenv").config();

// Twilio setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const twilioNumber = process.env.TWILIO_PHONE_NUMBER || 'whatsapp:+14155238886';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/webhook", async (req, res) => {
  const incomingMsg = req.body.Body?.toLowerCase();
  const from = req.body.From;

  console.log("📩 Message from", from, ":", incomingMsg);

  if (!incomingMsg) {
    return res.status(400).send("No message received.");
  }

  // Send back a WhatsApp reply using Twilio API
  try {
    await client.messages.create({
      from: twilioNumber,
      to: from,
      body: `🔍 You searched for: ${incomingMsg}`,
    });
    res.status(200).send("✅ Reply sent");
  } catch (err) {
    console.error("❌ Error sending message:", err);
    res.status(500).send("Error");
  }
});

app.get("/", (req, res) => {
  res.send("✅ OneTelugu Deals Bot running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
