import { v4 as uuid } from 'uuid'

import WorkoutModel from '../database/Workout.js';

const getAllWorkouts = () => {
  const allWorkouts = WorkoutModel.getAllWorkouts()
  return allWorkouts
}

const getOneWorkout = (workoutId) => { return }

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }

  const createdWorkout = WorkoutModel.createNewWorkout(workoutToInsert)

  return createdWorkout
}

const deleteOneWorkout = (workoutId) => { return }

const updateOneWorkout = (workoutId, newFields) => { return }

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  deleteOneWorkout,
  updateOneWorkout
}