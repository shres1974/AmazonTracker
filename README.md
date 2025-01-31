# 🛒 TrackMyAmazon

## 🌟 Introduction

**TrackMyAmazon** is an advanced **Amazon product tracking tool** built using **Next.js, TypeScript, Bright Data, MongoDB, and Cheerio**. It enables users to **monitor price fluctuations** 📉 and **stock availability** 📦 while receiving **real-time alerts** 📩 when updates occur.

### 🎯 Motivation

Shopping on Amazon can be unpredictable due to frequent price changes. I wanted to create a tool that eliminates the need to **manually check for discounts** and availability. **TrackMyAmazon** was designed to provide **automated price tracking** ⏳, allowing users to save both **time** ⏰ and **money** 💰 efficiently.

## ✨ Key Features

- 📡 **Live price & stock tracking** - Uses Bright Data & Cheerio for real-time updates.
- 🔄 **Automated data refresh** - Cron jobs update product data at regular intervals.
- 📩 **Email notifications** - Receive alerts when a price drops or stock changes.
- 🎨 **User-friendly interface** - Built with Tailwind CSS & Headless UI for a seamless experience.
- 📊 **Efficient data storage** - Product tracking details are securely stored in MongoDB.

## 🛠 Getting Started

### ✅ Prerequisites & Installation

Ensure you have the following installed:
- 🖥 **Node.js** (latest LTS version recommended)
- 📂 **MongoDB** (local or cloud instance)
- 🌐 **Bright Data Account** (for scraping capabilities)

Clone the repository and install dependencies:
git clone https://github.com/yourusername/TrackMyAmazon.git
cd TrackMyAmazon
npm install

# Start the development server
npm run dev

Open http://localhost:3000 in your browser. 🌍

### ⚙️ Configuration

Create a `.env.local` file with the following credentials:
MONGODB_URI=your_mongodb_connection_string
BRIGHT_DATA_KEY=your_bright_data_api_key
EMAIL_USER=your_email_for_notifications
EMAIL_PASS=your_email_password

### 🚀 Deployment

Easily deploy your application on **Vercel**:
vercel deploy

## 🔮 Future Roadmap

- 🔐 **User authentication** - Enable personalized tracking lists
- 🛍 **Multi-platform tracking** - Expand support beyond Amazon
- 📈 **Price trend analytics** - Display historical price changes for better insights

## 📜 License

This project is released under the **MIT License**.

For any inquiries, feel free to connect via GitHub 🤝
