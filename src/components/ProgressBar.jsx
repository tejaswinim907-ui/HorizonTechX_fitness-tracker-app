import React from "react";

function ProgressBar({ steps }) {
  const goal = 10000;
  const percent = Math.min((steps / goal) * 100, 100);

  return (
    <div>
      <h3>📊 Daily Progress</h3>
      <div className="progress-container">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p>{steps} / {goal} steps</p>
    </div>
  );
}

export default ProgressBar;