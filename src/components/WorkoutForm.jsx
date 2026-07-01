import React, { useState } from "react";
import "./WorkoutForm.css";

function WorkoutForm({ addWorkout }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Cardio");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !duration ||
      !calories ||
      !steps
    ) {
      alert("Please fill all fields");
      return;
    }

    addWorkout({
      name,
      type,
      duration,
      calories,
      steps,
    });

    setName("");
    setType("Cardio");
    setDuration("");
    setCalories("");
    setSteps("");
  };

  return (
    <div className="workout-card">

      <h2>💪 Add Workout</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Workout Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Cardio</option>
          <option>Running</option>
          <option>Walking</option>
          <option>Cycling</option>
          <option>Gym</option>
          <option>Yoga</option>
          <option>Swimming</option>
        </select>

        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <input
          type="number"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <input
          type="number"
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <button type="submit">
          ➕ Add Workout
        </button>

      </form>

    </div>
  );
}

export default WorkoutForm;