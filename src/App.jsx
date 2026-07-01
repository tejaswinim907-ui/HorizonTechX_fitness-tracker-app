import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import WorkoutForm from "./components/WorkoutForm";
import AIInsights from "./components/AIInsights";
import ActivityChart from "./components/ActivityChart";
import "./App.css";

function App() {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [workouts, setWorkouts] = useState([]);
  const [goal, setGoal] = useState(10000);
  const [streak, setStreak] = useState(0);

  // Load
  useEffect(() => {
    const s = localStorage.getItem("steps");
    const c = localStorage.getItem("calories");
    const w = localStorage.getItem("workouts");
    const g = localStorage.getItem("goal");
    const st = localStorage.getItem("streak");

    if (s) setSteps(Number(s));
    if (c) setCalories(Number(c));
    if (w) setWorkouts(JSON.parse(w));
    if (g) setGoal(Number(g));
    if (st) setStreak(Number(st));
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("steps", steps);
    localStorage.setItem("calories", calories);
    localStorage.setItem("workouts", JSON.stringify(workouts));
    localStorage.setItem("goal", goal);
    localStorage.setItem("streak", streak);
  }, [steps, calories, workouts, goal, streak]);

  // Add workout
  const addWorkout = (workout) => {
    const newWorkout = {
      ...workout,
      date: new Date().toLocaleDateString(),
    };

    setWorkouts([...workouts, newWorkout]);
    setSteps((prev) => prev + 1000);
    setCalories((prev) => prev + 50);
    setStreak((prev) => prev + 1);
  };

  // Delete workout
  const deleteWorkout = (index) => {
    if (window.confirm("Delete this workout?")) {
      setWorkouts(workouts.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>🏆 Fitness Tracker</h1>
        <p className="subtitle">Track • Improve • Stay Consistent 💪</p>
      </header>

      {/* Dashboard */}
      <section className="card-section">
        <Dashboard
          steps={steps}
          calories={calories}
          workouts={workouts.length}
          goal={goal}
          streak={streak}
        />
      </section>

      {/* Goal */}
      <section className="card-section">
        <h2>Set Daily Goal 🎯</h2>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
        />
      </section>

      {/* Form */}
      <section className="card-section">
        <h2>Add Workout</h2>
        <WorkoutForm addWorkout={addWorkout} />
      </section>

      {/* List */}
      <section className="card-section">
        <h2>Workout History</h2>

        {workouts.length === 0 ? (
          <p className="empty">
            🏃 Start your journey by adding a workout!
          </p>
        ) : (
          <ul className="workout-list">
            {workouts.map((w, index) => (
              <li key={index} className="workout-item">
                <div>
                  <strong>{w.name}</strong>
                  <p>{w.duration} mins</p>
                  <small>{w.date}</small>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => deleteWorkout(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Chart */}
      <section className="card-section">
        <h2>Weekly Progress</h2>
        <ActivityChart steps={steps} />
      </section>

      {/* AI */}
      <section className="card-section">
        <h2>AI Insights</h2>
        <AIInsights steps={steps} calories={calories} />
      </section>
    </div>
  );
}

export default App;
