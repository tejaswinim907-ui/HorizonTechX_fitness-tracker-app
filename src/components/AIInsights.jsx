import React from "react";

function AIInsights({ steps }) {
  let message = "";

  if (steps < 2000) {
    message = "😴 You are less active today. Try walking more!";
  } else if (steps < 5000) {
    message = "🙂 Good, but you can do better!";
  } else {
    message = "🔥 Great job! Keep it up!";
  }

  return (
    <div>
      <h2>🧠 AI Insights</h2>
      <p>{message}</p>
    </div>
  );
}

export default AIInsights;