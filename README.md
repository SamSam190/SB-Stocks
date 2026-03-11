# SB Stocks - Modern Stock Trading Platform 📈

A full-stack, state-of-the-art stock trading application featuring a premium "Dark Mode" aesthetic and modern glassmorphism UI. Built on the MERN stack (MongoDB, Express, React, Node.js), this platform offers seamless real-time stock tracking, user portfolio management, and an administration dashboard.

## 🌟 Features

- **Premium UI/UX:** Sleek dark-mode interface powered by CSS glassmorphism, responsive components, and dynamic hover effects.
- **Authentication:** Secure user registration and login flows.
- **Real-Time Market Data:** Live trending stocks and customizable watchlists.
- **Portfolio Management:** Add, track, and manage your investments with an intuitive dashboard.
- **Interactive Stock Charts:** Analyze historical and live stock price movements effortlessly.
- **Admin Dashboard:** Specific routing and specialized views tailored for platform administrators.
- **Automated Local Database:** Instant no-setup backend execution using an automated MongoDB-in-memory database (or connect easily to any remote MongoDB cluster).

## 💻 Tech Stack

- **Frontend:** React.js, React Router, Axios, Custom CSS (Dark Theme + Glassmorphism Variables)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose and `mongodb-memory-server` for instant local development)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your local machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SamSam190/SB-Stocks.git
   ```

2. **Setup the Backend:**
   ```bash
   cd "SB-Stocks/Code/backend"
   npm install
   ```
   *Optional:* Edit the `.env` file in the backend directory to specify your own custom `MONGO_URI`. By default, it will automatically spin up an isolated, in-memory MongoDB server instance for instant zero-configuration access!

3. **Start the Backend Server:**
   ```bash
   npm start
   ```
   *(Server typically runs on `http://localhost:6001`)*

4. **Setup the Frontend:**
   Open a new terminal session and run:
   ```bash
   cd "../frontend"
   npm install
   npm start
   ```

5. **Trade & Explore!**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.


## 📄 Platform Credits
All rights reserved - © SB-Stocks
