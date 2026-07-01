import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function ActivityChart({ steps }) {
  // dummy weekly data
  const data = [
    { day: "Mon", steps: 1000 },
    { day: "Tue", steps: 2000 },
    { day: "Wed", steps: 3000 },
    { day: "Thu", steps: 4000 },
    { day: "Fri", steps: 3500 },
    { day: "Sat", steps: 5000 },
    { day: "Sun", steps: steps },
  ];

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>📊 Weekly Activity</h2>

      <LineChart width={400} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="steps" stroke="#22c55e" />
      </LineChart>
    </div>
  );
}

export default ActivityChart;
