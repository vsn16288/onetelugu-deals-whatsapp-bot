// server.js

const express = require("express");
const twilio = require("twilio");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Twilio client setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Root route to verify server is up
app.get("/", (req, res) => {
  res.send("✅ OneTelugu Deals Bot running");
});

// Webhook endpoint for Twilio WhatsApp
app.post("/webhook", async (req, res) => {
  const incomingMsg = req.body.Body?.toLowerCase();
  const from = req.body.From;

  console.log("📩 Message from", from, ":", incomingMsg);

  if (!incomingMsg) {
    return res.send("No message received.");
  }

  try {
    // Dummy response – replace with actual product logic later
    const reply = `🔍 You searched for: *${incoming*
