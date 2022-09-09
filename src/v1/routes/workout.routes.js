import { Router } from 'express'

import workoutController from '../../controllers/workout.controller.js'
import recordController from '../../controllers/record.controller.js'
const router = Router()

router
  .get('/', workoutController.getAllWorkouts)
  .get('/:workoutId', workoutController.getOneWorkout)
  .get('/:workoutId/records', recordController.getRecordForWorkout)
  .post('/', workoutController.createNewWorkout)
  .delete('/:workoutId', workoutController.deleteOneWorkout)
  .patch('/:workoutId', workoutController.updateOneWorkout)

export default router