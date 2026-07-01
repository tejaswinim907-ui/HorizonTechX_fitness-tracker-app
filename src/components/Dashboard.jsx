import React from "react";

function Dashboard({ steps, calories, workouts, goal, streak }) {
  const progress = Math.min((steps / goal) * 100, 100);

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="stats">
        <div className="card">👣 {steps} Steps</div>
        <div className="card">🔥 {calories} Calories</div>
        <div className="card">💪 {workouts} Workouts</div>
        <div className="card">🔥 {streak} Day Streak</div>
      </div>

      {/* Progress */}
      <div className="progress-section">
        <h3>Goal Progress</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>{Math.floor(progress)}% completed</p>

        {progress < 50 && <p>🚶 Keep going!</p>}
        {progress >= 50 && progress < 100 && <p>🔥 Almost there!</p>}
        {progress === 100 && <p>🎉 Goal achieved!</p>}
      </div>
    </div>
  );
}

export default Dashboard;