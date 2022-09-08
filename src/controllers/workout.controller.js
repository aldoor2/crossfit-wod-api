import workoutService from '../services/workout.service.js'

export const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({ status: 'OK', data: allWorkouts })
}

export const getOneWorkout = (req, res) => {
  const workout = getOneWorkout(req.params.workoutId)
  res.send(`getting workout ${req.params.workoutId}`)
}

export const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout()
  res.send('creating new workout')
}

export const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout(req.params.workoutId)
  res.send(`deleting workout ${req.params.workoutId}`)
}

export const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId, req.body)
  res.send(`updating workout ${req.params.workoutId}`)
}