import DB from './db.json' assert {type: "json"}
import { saveToDatabase } from './utils.js'

const getAllWorkouts = () => DB.workouts

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex(workout => (workout.name === newWorkout.name))

  if (!isAlreadyAdded) return

  DB.workouts.push(newWorkout)
  saveToDatabase(DB)
}

export default {
  getAllWorkouts,
  createNewWorkout
}