// import React from "react";

// const ExportButtons: React.FC = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <button
//         onClick={() => window.open("http://localhost:4000/api/export", "_blank")}
//         style={{ marginRight: "10px", padding: "10px", fontWeight: "bold" }}
//       >
//         📄 Download JSON
//       </button>
//       <button
//         onClick={() => window.open("http://localhost:4000/api/export/csv", "_blank")}
//         style={{ padding: "10px", fontWeight: "bold" }}
//       >
//         📊 Download CSV
//       </button>
//     </div>
//   );
// };

// export default ExportButtons;

import React from "react";

const ExportButtons: React.FC = () => {
  return (
    <div className="export-buttons">
      <button
  onClick={() => window.open("http://localhost:4000/api/export/json", "_blank")}
  className="export-btn json"
>
  📄 View JSON
</button>
<button
  onClick={() => window.open("http://localhost:4000/api/export/csv", "_blank")}
  className="export-btn csv"
>
  📊 View CSV
</button>


      {/* <button
        onClick={() => window.open("http://localhost:4000/api/export/csv", "_blank")}
        className="export-btn csv"
      >
        📊 Download CSV
      </button> */}

      <style>{`
        .export-buttons {
          text-align: center;
          margin-top: 80px; /* Increased from 20px to 80px */
        }

        .export-btn {
          padding: 10px 16px;
          font-size: 14px;
          font-weight: bold;
          margin: 0 10px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .export-btn.json {
          background-color: #007bff;
          color: white;
        }

        .export-btn.csv {
          background-color: #28a745;
          color: white;
        }

        .export-btn:hover {
          opacity: 0.9;
        }

        .export-btn:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default ExportButtons;

