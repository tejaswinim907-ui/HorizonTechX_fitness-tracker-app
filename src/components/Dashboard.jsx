import React from "react";
import "./Dashboard.css";

function Dashboard({ steps, calories, workouts, streak, goal }) {
  const progress = Math.min((steps / goal) * 100, 100);

  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon steps">👣</div>

          <div className="stat-info">
            <h3>Steps</h3>
            <h1>{steps.toLocaleString()}</h1>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon calories">🔥</div>

          <div className="stat-info">
            <h3>Calories</h3>
            <h1>{calories}</h1>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon workouts">🏋️</div>

          <div className="stat-info">
            <h3>Workouts</h3>
            <h1>{workouts}</h1>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon streak">🏆</div>

          <div className="stat-info">
            <h3>Streak</h3>
            <h1>{streak} Days</h1>
          </div>
        </div>

      </div>

      <div className="progress-title">
        <span>Daily Goal Progress</span>
        <span>{progress.toFixed(0)}%</span>
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}

export default Dashboard;