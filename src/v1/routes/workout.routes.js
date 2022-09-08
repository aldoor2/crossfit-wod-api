import { Router } from 'express'

import {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  deleteOneWorkout,
  updateOneWorkout
} from '../../controllers/workout.controller.js'

const router = Router()

router
  .get('/', getAllWorkouts)
  .get('/:workoutId', getOneWorkout)
  .post('/', createNewWorkout)
  .delete('/:workoutId', deleteOneWorkout)
  .patch('/:workoutId', updateOneWorkout)

export default router