import workoutService from '../services/workout.service.js'

export const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({ status: 'OK', data: allWorkouts })
}

export const getOneWorkout = (req, res) => {
  const { params: { workoutId } } = req
  console.log(workoutId)

  if (!workoutId) return

  const workout = workoutService.getOneWorkout(workoutId)
  res.send({ status: 'OK', data: workout })
}

export const createNewWorkout = (req, res) => {
  const { body } = req

  if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
    return
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  }

  const createdWorkout = workoutService.createNewWorkout(newWorkout)
  res.status(201).send({ status: 'OK', data: createdWorkout })
}

export const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId }
  } = req

  if (!workoutId) return

  workoutService.deleteOneWorkout(workoutId)
  res.status(204).send({ status: 'OK' })
}

export const updateOneWorkout = (req, res) => {
  const { body, params: { workoutId } } = req

  if (!workoutId) return

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body)
  res.send({ status: 'OK', data: updatedWorkout })
}