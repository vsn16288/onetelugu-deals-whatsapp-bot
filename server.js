const express = require('express');
const bodyParser = require('body-parser');
const { getPrices } = require('./priceService');
const { sendMessage } = require('./twilioClient');

require('dotenv').config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    const incomingMsg = req.body.Body?.trim();
    const from = req.body.From;

    if (!incomingMsg) {
        return res.send("No product name received.");
    }

    const prices = getPrices(incomingMsg);
    let reply = `🔍 *${incomingMsg}* Price Comparison:\n\n`;

    prices.forEach(p => {
        reply += `🛒 ${p.platform}: ₹${p.price}\n👉 [Buy Now](${p.link})\n\n`;
    });

    await sendMessage(from, reply);
    res.send('Success');
});

app.get('/', (req, res) => res.send('OneTelugu Deals Bot Running'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bot server running on port ${PORT}`));
