// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import axios from "axios";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Legend,
//   Tooltip,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip);

// const TimelineChart: React.FC = () => {
//   const [chartData, setChartData] = useState<any>();
//   const [range, setRange] = useState("7");

//   useEffect(() => {
//     const now = new Date();
//     const to = now.toISOString().split("T")[0];
//     const fromDate = new Date(now);
//     fromDate.setDate(fromDate.getDate() - parseInt(range));
//     const from = fromDate.toISOString().split("T")[0];

//     axios
//       .get(`http://localhost:4000/api/timeline?from=${from}&to=${to}`)
//       .then((res) => {
//         const buys: any = {};
//         const sells: any = {};
//         const days: string[] = [];

//         res.data.forEach((tx: any) => {
//           if (!days.includes(tx.day)) days.push(tx.day);
//           if (tx.direction === "BUY") buys[tx.day] = tx.count;
//           if (tx.direction === "SELL") sells[tx.day] = tx.count;
//         });

//         days.sort();
//         setChartData({
//           labels: days,
//           datasets: [
//             {
//               label: "Buys",
//               data: days.map((day) => buys[day] || 0),
//               borderColor: "green",
//             },
//             {
//               label: "Sells",
//               data: days.map((day) => sells[day] || 0),
//               borderColor: "red",
//             },
//           ],
//         });
//       });
//   }, [range]);

//   return (
//     <div>
//       <div style={{ textAlign: "right", marginBottom: "10px" }}>
//         <label style={{ fontWeight: "bold", marginRight: "10px" }}>Filter:</label>
//         <select value={range} onChange={(e) => setRange(e.target.value)}>
//           <option value="7">Last 7 Days</option>
//           <option value="30">Last 30 Days</option>
//           <option value="90">Last 90 Days</option>
//         </select>
//       </div>
//       {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}
//     </div>
//   );
// };

// export default TimelineChart;



import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip);

const TimelineChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>();
  const [range, setRange] = useState("7");

  useEffect(() => {
    const now = new Date();
    const to = now.toISOString().split("T")[0];
    const fromDate = new Date(now);
    fromDate.setDate(fromDate.getDate() - parseInt(range));
    const from = fromDate.toISOString().split("T")[0];

    axios
      .get(`http://localhost:4000/api/timeline?from=${from}&to=${to}`)
      .then((res) => {
        const buys: any = {};
        const sells: any = {};
        const days: string[] = [];

        res.data.forEach((tx: any) => {
          if (!days.includes(tx.day)) days.push(tx.day);
          if (tx.direction === "BUY") buys[tx.day] = tx.count;
          if (tx.direction === "SELL") sells[tx.day] = tx.count;
        });

        days.sort();
        setChartData({
          labels: days,
          datasets: [
            {
              label: "Buys",
              data: days.map((day) => buys[day] || 0),
              borderColor: "green",
              backgroundColor: "rgba(0, 128, 0, 0.1)",
              fill: true,
              tension: 0.4,
            },
            {
              label: "Sells",
              data: days.map((day) => sells[day] || 0),
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              fill: true,
              tension: 0.4,
            },
          ],
        });
      });
  }, [range]);

  return (
    <div className="timeline-chart">
      <div className="filter">
        <label>Filter:</label>
        <select value={range} onChange={(e) => setRange(e.target.value)}>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>

      {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}

      <style>{`
        .timeline-chart {
          max-width: 700px;
          margin: 30px auto;
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          font-family: "Segoe UI", sans-serif;
        }

        .filter {
          text-align: right;
          margin-bottom: 16px;
        }

        .filter label {
          font-weight: 600;
          margin-right: 10px;
          color: #333;
        }

        select {
          padding: 6px 10px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #ccc;
          outline: none;
        }

        select:focus {
          border-color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default TimelineChart;
