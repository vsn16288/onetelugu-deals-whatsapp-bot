// Express & body-parser setup
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Webhook endpoint
app.post("/webhook", async (req, res) => {
  const incomingMsg = req.body.Body?.toLowerCase();
  const from = req.body.From;

  console.log("📩 Message from", from, ":", incomingMsg);

  if (!incomingMsg) {
    return res.send("No message received.");
  }

  // Dummy reply for now
  return res.send("🔍 Searching for: " + incomingMsg);
});

// Root route (optional)
app.get("/", (req, res) => {
  res.send("✅ OneTelugu Deals Bot running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
