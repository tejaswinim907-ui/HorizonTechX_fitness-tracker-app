import React, { useState, useEffect } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import WorkoutForm from "./components/WorkoutForm";
import AIInsights from "./components/AIInsights";
import ActivityChart from "./components/ActivityChart";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [goal, setGoal] = useState(10000);

  // Dashboard Stats
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [streak, setStreak] = useState(1);

  // Load Local Storage
  useEffect(() => {
    const savedWorkouts =
      JSON.parse(localStorage.getItem("workouts")) || [];

    const savedGoal =
      Number(localStorage.getItem("goal")) || 10000;

    const savedStreak =
      Number(localStorage.getItem("streak")) || 1;

    setGoal(savedGoal);
    setStreak(savedStreak);
    setWorkouts(savedWorkouts);

    let totalSteps = 0;
    let totalCalories = 0;

    savedWorkouts.forEach((item) => {
      totalSteps += Number(item.steps || 0);
      totalCalories += Number(item.calories || 0);
    });

    setSteps(totalSteps);
    setCalories(totalCalories);
  }, []);

  // Save Local Storage
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
    localStorage.setItem("goal", goal);
    localStorage.setItem("streak", streak);
  }, [workouts, goal, streak]);

  // Add Workout
  const addWorkout = (workout) => {
    const newWorkout = {
      ...workout,
      date: new Date().toLocaleDateString(),
    };

    const updated = [...workouts, newWorkout];

    setWorkouts(updated);

    setSteps((prev) => prev + Number(workout.steps));
    setCalories((prev) => prev + Number(workout.calories));
    setStreak((prev) => prev + 1);
  };

  // Delete Workout
  const deleteWorkout = (index) => {
    const removed = workouts[index];

    const updated = workouts.filter((_, i) => i !== index);

    setWorkouts(updated);

    setSteps((prev) => prev - Number(removed.steps));

    setCalories((prev) => prev - Number(removed.calories));

    if (streak > 0) {
      setStreak((prev) => prev - 1);
    }
  };

  return (
    <div className="app">

      {/* Header */}

      <header className="header">

        <h1>🏋 Fitness Tracker</h1>

        <p>
          Track • Improve • Stay Consistent 💪
        </p>

      </header>

      {/* Dashboard */}

      <Dashboard
        steps={steps}
        calories={calories}
        workouts={workouts.length}
        streak={streak}
        goal={goal}
      />

      {/* Middle Layout */}

      <div className="middle-grid">

        {/* Left */}

        <div>

          <WorkoutForm addWorkout={addWorkout} />

        </div>

        {/* Right */}

        <div>

          <AIInsights
            steps={steps}
            calories={calories}
            goal={goal}
          />

          <div className="goal-card">

            <h2>🎯 Daily Goal</h2>

            <input
              type="number"
              value={goal}
              onChange={(e) =>
                setGoal(Number(e.target.value))
              }
            />

          </div>

        </div>

      </div>

      {/* Workout History */}

      <div className="history-card">

        <h2>📋 Workout History</h2>

        {workouts.length === 0 ? (
          <p>No workouts added.</p>
        ) : (
          <table>

            <thead>

              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Calories</th>
                <th>Steps</th>
                <th>Date</th>
                <th></th>
              </tr>

            </thead>

            <tbody>

              {workouts.map((item, index) => (

                <tr key={index}>

                  <td>{item.name}</td>

                  <td>{item.type}</td>

                  <td>{item.duration} min</td>

                  <td>{item.calories}</td>

                  <td>{item.steps}</td>

                  <td>{item.date}</td>

                  <td>

                    <button
                      onClick={() =>
                        deleteWorkout(index)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

      </div>

      {/* Graph */}

      <ActivityChart history={workouts} />

    </div>
  );
}

export default App;