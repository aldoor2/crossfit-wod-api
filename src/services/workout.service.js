import WorkoutModel from '../database/Workout.js';

const getAllWorkouts = () => {
  const allWorkouts = WorkoutModel.getAllWorkouts()
  return allWorkouts
}
const getOneWorkout = (workoutId) => { return }
const createNewWorkout = () => { return }
const deleteOneWorkout = (workoutId) => { return }
const updateOneWorkout = (workoutId, newFields) => { return }

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  deleteOneWorkout,
  updateOneWorkout
}