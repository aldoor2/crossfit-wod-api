import DB from './db.json' assert {type: "json"}
import { saveToDatabase } from './utils.js'

const getAllWorkouts = () => DB.workouts

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find(workout => workout.id === workoutId)

  if (!workout) return

  return workout
}

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex(workout => (workout.name === newWorkout.name)) > -1

  if (isAlreadyAdded) return

  DB.workouts.push(newWorkout)
  saveToDatabase(DB)
  return newWorkout
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout
}