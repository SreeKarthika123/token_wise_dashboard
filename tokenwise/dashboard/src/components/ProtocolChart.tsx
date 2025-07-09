// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import axios from "axios";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const ProtocolChart: React.FC = () => {
//   const [data, setData] = useState<any>({ labels: [], datasets: [] });

//   useEffect(() => {
//     axios.get("http://localhost:4000/api/protocols").then(res => {
//       const labels = res.data.map((d: any) => d.protocol);
//       const counts = res.data.map((d: any) => d.count);
//       setData({
//         labels,
//         datasets: [
//           {
//             label: "Protocol Usage",
//             data: counts,
//             backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56", "#4bc0c0"],
//           },
//         ],
//       });
//     });
//   }, []);

//   return <Pie data={data} />;
// };

// export default ProtocolChart;
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProtocolChart: React.FC = () => {
  const [data, setData] = useState<any>({ labels: [], datasets: [] });

  useEffect(() => {
    axios.get("http://localhost:4000/api/protocols").then(res => {
      const labels = res.data.map((d: any) => d.protocol);
      const counts = res.data.map((d: any) => d.count);
      setData({
        labels,
        datasets: [
          {
            label: "Protocol Usage",
            data: counts,
            backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56", "#4bc0c0", "#9966ff", "#ff9f40"],
            borderColor: "#000", // border for better visibility
            borderWidth: 1
          },
        ],
      });
    });
  }, []);

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", // white legend text
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        bodyColor: "#000000", // tooltip text black
        backgroundColor: "#ffffff" // tooltip background white
      },
    },
  };

  return (
    <div style={{ width: "320px", height: "320px", margin: "auto", color: "#fff" }}>
      <h3 style={{ textAlign: "center", marginBottom: "10px", color: "#00ffff", textShadow: "0 0 8px #00ffff" }}>
        🧩 Protocol Usage
      </h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ProtocolChart;
