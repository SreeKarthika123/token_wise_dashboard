# 💹 TokenWise - Real-Time Solana Token Dashboard

TokenWise is a full-stack real-time dashboard that tracks Solana token transactions, visualizes protocol usage, and highlights wallet activity — all with a dynamic, glowing UI and animated star background.

---

## ✨ Features

- 🔁 Real-time tracking of token transfers
- 📈 Charts for protocol usage and transaction timeline
- 👛 Top wallet activity display
- 📊 Download or view data in JSON & CSV
- 🌌 Animated starry background with glowing dashboard UI

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, SQLite, `@solana/web3.js`
- **Frontend**: React, Chart.js, Axios
- **Styling**: CSS + Animations
- **Database**: SQLite with `better-sqlite3`

---
Place in .env file

RPC_URL=https://mainnet.helius-rpc.com/?api-key=bd845ddb-1e01-4e2a-9966-a6add86bdb4e
TARGET_TOKEN=9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump


Run the Frontend
cd dashboard
npm install
npm start

Run Backend:
npx ts-node src/index.ts
It will fetch top 60 walletss in vs code 

ScreenShots :
![image](https://github.com/user-attachments/assets/5acff1d2-4998-427f-b6ab-0450b5fb21a0)
![image](https://github.com/user-attachments/assets/88e4b087-9dd8-44e3-872f-a8ea760e3b8a)
![image](https://github.com/user-attachments/assets/85ea61ef-1c81-45ad-bc11-e884cb02e296)
![image](https://github.com/user-attachments/assets/3934e5e2-5e47-4327-a83e-76e0363a8f21)



