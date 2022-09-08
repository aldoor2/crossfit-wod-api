import { v4 as uuid } from 'uuid'

import Workout from '../database/Workout.js';

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId)
  return workout
}

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }

  const createdWorkout = Workout.createNewWorkout(workoutToInsert)

  return createdWorkout
}

const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes)
  return updatedWorkout
}

const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId)
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}