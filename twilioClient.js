const twilio = require('twilio');
require('dotenv').config();

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const TWILIO_FROM = process.env.TWILIO_SANDBOX_NUMBER;

async function sendMessage(to, body) {
    try {
        await client.messages.create({
            body,
            from: TWILIO_FROM,
            to
        });
    } catch (error) {
        console.error('Failed to send message:', error);
    }
}

module.exports = { sendMessage };
