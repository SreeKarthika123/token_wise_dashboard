// import React from "react";
// import StatsCards from "./components/StatsCards";
// import ProtocolChart from "./components/ProtocolChart";
// import WalletActivity from "./components/WalletActivity";
// import TimelineChart from "./components/TimelineChart";
// import ExportButtons from "./components/ExportButtons";
// import "./styles.css";

// const App: React.FC = () => {
//   return (
//     <div className="container">
//       <h1>📊 TokenWise Dashboard</h1>
//       <StatsCards />
//       <div className="grid">
//         <ProtocolChart />
//         <WalletActivity />
//         <ExportButtons />
//       </div>
//       <TimelineChart />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import StatsCards from "./components/StatsCards";
// import ProtocolChart from "./components/ProtocolChart";
// import WalletActivity from "./components/WalletActivity";
// import TimelineChart from "./components/TimelineChart";
// import ExportButtons from "./components/ExportButtons";
// import "./styles.css";

// const App: React.FC = () => {
//   return (
//     <div className="container">
//       <h1 className="dashboard-title">📊 TokenWise Dashboard</h1>
//       <StatsCards />
//       <div className="grid">
//         <ProtocolChart />
//         <WalletActivity />
//         <ExportButtons />
//       </div>
//       <TimelineChart />

//       <style>{`
//         .container {
//           background-color: #000000; /* Black background */
//           min-height: 100vh;
//           padding: 20px;
//         }

//         .dashboard-title {
//           font-size: 40px;
//           text-align: center;
//           margin: 10px 0 30px;
//           font-weight: 700;
//           font-family: 'Segoe UI', sans-serif;
//           color: #ffffff;
//           letter-spacing: 1px;
//           transform: scale(0.9);
//           opacity: 0;
//           animation: zoomFadeIn 1s ease-out forwards;
//           transition: all 0.4s ease;
//         }

//         .dashboard-title:hover {
//           text-shadow:
//             0 0 10px #ffffff,
//             0 0 20px #ffffff,
//             0 0 30px #ffffff,
//             0 0 40px #ffffff;
//           transform: scale(1.05);
//           cursor: pointer;
//         }

//         @keyframes zoomFadeIn {
//           0% {
//             opacity: 0;
//             transform: scale(0.9);
//             color: #777;
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//             color: #ffffff;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;


import React from "react";
import StatsCards from "./components/StatsCards";
import ProtocolChart from "./components/ProtocolChart";
import WalletActivity from "./components/WalletActivity";
import TimelineChart from "./components/TimelineChart";
import ExportButtons from "./components/ExportButtons";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="star-container">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />

      <div className="container">
        <h1 className="dashboard-title">📊 TokenWise Dashboard</h1>
        <StatsCards />
        <div className="grid">
          <ProtocolChart />
          <WalletActivity />
          <ExportButtons />
        </div>
        <TimelineChart />
      </div>

      <style>{`
        /* Reset */
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: #000;
        }

        .star-container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: black;
        }

        /* Background Stars - Bigger & More Visible */
        .stars, .stars2, .stars3 {
          position: absolute;
          width: 300%;
          height: 300%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }

        .stars {
          background-image: radial-gradient(#ffffff 2px, transparent 2px);
          background-size: 40px 40px;
          animation: moveStars 50s linear infinite;
          opacity: 0.4;
        }

        .stars2 {
          background-image: radial-gradient(#00ffff 3px, transparent 2px);
          background-size: 60px 60px;
          animation: moveStars2 70s linear infinite;
          opacity: 0.25;
        }

        .stars3 {
          background-image: radial-gradient(#ff66ff 4px, transparent 3px);
          background-size: 80px 80px;
          animation: moveStars3 90s linear infinite;
          opacity: 0.2;
        }

        @keyframes moveStars {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-800px, -800px); }
        }

        @keyframes moveStars2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-1200px, -500px); }
        }

        @keyframes moveStars3 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-1000px, -700px); }
        }

        .container {
          position: relative;
          z-index: 1;
          padding: 20px;
          min-height: 100vh;
        }

        .dashboard-title {
          font-size: 42px;
          text-align: center;
          margin: 30px 0;
          font-weight: 700;
          font-family: 'Segoe UI', sans-serif;
          color: #ffffff;
          letter-spacing: 1px;
          animation: sparkle 2s infinite alternate, glowPulse 4s ease-in-out infinite;
          position: relative;
        }

        @keyframes sparkle {
          from {
            text-shadow: 0 0 5px #fff, 0 0 10px #1a237e, 0 0 20px #1a237e;
          }
          to {
            text-shadow: 0 0 15px #fff, 0 0 25px #536dfe, 0 0 35px #3f51b5;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.95;
          }
          50% {
            transform: scale(1.07);
            opacity: 1;
          }
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );
};

export default App;

