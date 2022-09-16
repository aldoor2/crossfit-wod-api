import DB from './db.json' assert {type: "json"}
import { saveToDatabase } from './utils.js'

const getAllWorkouts = (filterParams) => {
  try {
    let workouts = DB.workouts

    if (filterParams.mode) {
      workouts = DB.workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filterParams.mode.toLowerCase())
      )
    }

    if (filterParams.equipment) {
      workouts = DB.workouts.filter((workout) =>
        workout.equipment.includes(filterParams.equipment.toLowerCase())
      )
    }

    if (filterParams.length && workouts.length > 0) {
      if (Number(filterParams.length) < 0) {
        throw {
          status: 400,
          message: `Filter parameter 'lenght' cannot be less than zero`
        }
      }

      workouts.length = Number(filterParams.length)
    }

    return workouts
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find(workout => workout.id === workoutId)
    if (!workout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`
      }
    }
    return workout
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded = DB.workouts.findIndex(workout => (workout.name === newWorkout.name)) > -1
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name ${newWorkout.name} already exists`
      }
    }
    DB.workouts.push(newWorkout)
    saveToDatabase(DB)
    return newWorkout
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const updateOneWorkout = (workoutId, changes) => {
  try {
    const isAlreadyAdded = DB.workouts.findIndex(workout => workout.name === changes.name) > -1
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${changes.name} already exists`
      }
    }

    const indexForUpdate = DB.workouts.findIndex(workout => workout.id === workoutId)
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      }
    }

    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    }

    DB.workouts[indexForUpdate] = updatedWorkout
    saveToDatabase(DB)
    return updatedWorkout
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const deleteOneWorkout = (workoutId) => {
  try {
    const indexForDeletion = DB.workouts.findIndex(workout => workout.id === workoutId)
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`
      }
    }
    DB.workouts.splice(indexForDeletion, 1)
    saveToDatabase(DB)
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}