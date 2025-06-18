const express = require("express");
const app = express();
const twilio = require("twilio");
require("dotenv").config();

// Twilio setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const twilioNumber = process.env.TWILIO_PHONE_NUMBER || 'whatsapp:+14155238886';

app.use(express.urlencoded({ extended: false })); // Handles x-www-form-urlencoded
app.use(express.json()); // Handles JSON bodies

app.post("/webhook", (req, res) => {
    const body = req.body.Body;
    const from = req.body.From;
  
    console.log("📩 Incoming WhatsApp message:", body, "from:", from);
  
    if (!body) {
      return res.status(400).send("❌ No message body received");
    }
  
    return res.send("✅ Message received: " + body);
  });
  

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
