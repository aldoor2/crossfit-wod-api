import { v4 as uuid } from 'uuid'

import Workout from '../database/Workout.js';

const getAllWorkouts = (filterParams) => {
  try {
    const allWorkouts = Workout.getAllWorkouts(filterParams)
    return allWorkouts
  } catch (error) {
    throw error
  }
}

const getOneWorkout = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId)
    return workout
  } catch (error) {
    throw error
  }
}

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }
  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert)
    return createdWorkout
  } catch (error) {
    throw error
  }
}

const updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes)
    return updatedWorkout
  } catch (error) { throw error }
}

const deleteOneWorkout = (workoutId) => {
  try {
    Workout.deleteOneWorkout(workoutId)
  } catch (error) { throw error }
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}