# 🛒 TrackMyAmazon

## 🚀 Overview

**TrackMyAmazon** is an Amazon product tracking platform built using **Next.js, TypeScript, Bright Data, MongoDB, and Cheerio**. It allows users to monitor **price fluctuations** 📉 and **stock availability** 📦, receiving **real-time notifications** 📩 when changes occur.

### 🎯 Motivation

I built **TrackMyAmazon** out of frustration with **unpredictable price changes** on Amazon. Whether shopping for tech gadgets or daily essentials, I often found myself **manually checking prices** multiple times. This inspired me to create an **automated solution** 🤖 that scrapes product data, tracks price trends 📊, and alerts users when a **deal is available** 💰—saving both time and money!

## ✨ Features

- 🔎 **Real-time product tracking**: Uses Bright Data and Cheerio to scrape and parse product details.
- ⏳ **Automated updates**: Cron jobs ensure data is refreshed frequently.
- 📧 **Email notifications**: Integrated with Nodemailer to send alerts for price drops and stock changes.
- 🎨 **Seamless user experience**: Responsive frontend built with Tailwind CSS and Headless UI.
- 📦 **Efficient data storage**: MongoDB used for structured product data management.

## 🛠 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:
- 🖥 **Node.js** (latest LTS recommended)
- 🗄 **MongoDB** (local or cloud instance)
- 🌐 **Bright Data Account** (for scraping capabilities)

### 📥 Installation

Clone the repository:
```sh
git clone https://github.com/yourusername/TrackMyAmazon.git
cd TrackMyAmazon
