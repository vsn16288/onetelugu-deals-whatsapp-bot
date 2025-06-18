# OneTelugu Deals WhatsApp Bot 🤖

This bot lets users search for a product via WhatsApp and shows them a price comparison between Amazon and Flipkart.

## 🚀 Features
- User sends a product name
- Bot replies with prices and affiliate links
- Hosted on Railway, integrated with Twilio

## 🛠 Setup

### 1. Clone the Repo
```
git clone https://github.com/your-username/onetelugu-deals-whatsapp-bot.git
cd onetelugu-deals-whatsapp-bot
```

### 2. Create `.env` File
Rename `.env.example` → `.env` and fill your credentials.

### 3. Install and Run
```
npm install
npm start
```

### 4. Twilio Webhook
Set webhook in Twilio Sandbox settings to:
```
https://your-app-url/webhook
```

## ✅ Sample Message
User sends:
```
iPhone 14
```
Bot replies with:
```
🔍 iPhone 14 Price Comparison:

🛒 Amazon: ₹68,999
👉 Buy Now

🛒 Flipkart: ₹67,499
👉 Buy Now
```

---
Built for 🛍️ OneTelugu Deals
