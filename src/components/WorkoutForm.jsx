import React, { useState } from "react";

function WorkoutForm({ addWorkout }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = () => {
    if (!name || !duration) return;

    addWorkout({ name, duration });
    setName("");
    setDuration("");
  };

  return (
    <div>
      <h2>Add Workout</h2>

      <input
        type="text"
        placeholder="Workout Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Duration (mins)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Workout</button>
    </div>
  );
}

export default WorkoutForm;