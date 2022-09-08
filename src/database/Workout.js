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

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(workout => workout.id === workoutId)

  if (indexForUpdate === -1) return

  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }

  DB.workouts[indexForUpdate] = updatedWorkout
  saveToDatabase(DB)
  return updatedWorkout
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout
}