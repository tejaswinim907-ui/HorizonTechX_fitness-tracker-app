import React from "react";
import {
  FaRunning,
  FaFire,
  FaWalking,
  FaClock,
  FaTrash,
} from "react-icons/fa";

function WorkoutHistory({ workouts, deleteWorkout }) {
  return (
    <div className="history">

      <h2>📋 Workout History</h2>

      {workouts.length === 0 ? (

        <div className="empty-history">

          <h3>No workouts yet</h3>

          <p>Start by adding your first workout 💪</p>

        </div>

      ) : (

        workouts.map((workout, index) => (

          <div className="history-card" key={index}>

            <div className="history-left">

              <div className="history-icon">

                <FaRunning />

              </div>

              <div>

                <h3>{workout.name}</h3>

                <span className="category">
                  {workout.category}
                </span>

                <div className="history-details">

                  <span>
                    <FaClock />
                    {workout.duration} mins
                  </span>

                  <span>
                    <FaFire />
                    {workout.calories} kcal
                  </span>

                  <span>
                    <FaWalking />
                    {workout.steps} steps
                  </span>

                </div>

              </div>

            </div>

            <div className="history-right">

              <small>{workout.date}</small>

              <button
                className="delete-btn"
                onClick={() => deleteWorkout(index)}
              >
                <FaTrash />
              </button>

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default WorkoutHistory;
