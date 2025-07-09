// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const WalletActivity: React.FC = () => {
//   const [wallets, setWallets] = useState<any[]>([]);

//   useEffect(() => {
//     axios.get("http://localhost:4000/api/activity").then(res => setWallets(res.data));
//   }, []);

//   return (
//     <div className="activity">
//       <h3>🔥 Most Active Wallets</h3>
//       <ul>
//         {wallets.map((w, idx) => (
//           <li key={idx}>
//             {w.wallet.slice(0, 6)}...{w.wallet.slice(-4)} - {w.count} txns
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WalletActivity;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const WalletActivity: React.FC = () => {
//   const [wallets, setWallets] = useState<any[]>([]);

//   useEffect(() => {
//     axios.get("http://localhost:4000/api/activity").then(res => setWallets(res.data));
//   }, []);

//   return (
//     <div className="activity">
//       <h3>🔥 Most Active Wallets</h3>
//       <ul>
//         {wallets.map((w, idx) => (
//           <li key={idx}>
//             <span>{w.wallet.slice(0, 6)}...{w.wallet.slice(-4)}</span>
//             <span>{w.count} txns</span>
//           </li>
//         ))}
//       </ul>

//       <style>{`
//         .activity {
//           background-color: #f9f9fb;
//           border-radius: 12px;
//           padding: 20px;
//           max-width: 400px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//           margin: 20px auto;
//           font-family: "Segoe UI", sans-serif;
//         }

//         .activity h3 {
//           font-size: 18px;
//           font-weight: 600;
//           margin-bottom: 16px;
//           color: #333;
//           text-align: center;
//         }

//         .activity ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .activity li {
//           padding: 10px 15px;
//           margin-bottom: 8px;
//           border-radius: 8px;
//           background-color: #ffffff;
//           color: #555;
//           font-size: 14px;
//           box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           transition: background-color 0.2s ease;
//         }

//         .activity li:hover {
//           background-color: #eef6ff;
//           cursor: pointer;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WalletActivity;

import React, { useEffect, useState } from "react";
import axios from "axios";

const WalletActivity: React.FC = () => {
  const [wallets, setWallets] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/activity").then(res => setWallets(res.data));
  }, []);

  return (
    <div className="activity">
      <h3>🔥 Most Active Wallets</h3>
      <ul>
        {wallets.map((w, idx) => (
          <li key={idx}>
            <span>{w.wallet.slice(0, 6)}...{w.wallet.slice(-4)}</span>
            <span>{w.count} txns</span>
          </li>
        ))}
      </ul>

      <style>{`
        .activity {
          background-color: #f9f9fb;
          border-radius: 12px;
          padding: 12px 16px;
          width: 100%;
          max-width: 500px; /* Optional fixed width */
          min-height: 180px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", sans-serif;
          margin: 0 auto; /* 👈 Center horizontally */
        }

        .activity h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #333;
          text-align: center;
        }

        .activity ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .activity li {
          padding: 8px 12px;
          margin-bottom: 6px;
          border-radius: 8px;
          background-color: #ffffff;
          color: #555;
          font-size: 14px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.2s ease;
        }

        .activity li:hover {
          background-color: #eef6ff;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default WalletActivity;
