import { Router } from 'express'
import apicache from 'apicache'

import workoutController from '../../controllers/workout.controller.js'
import recordController from '../../controllers/record.controller.js'

const router = Router()
const cache = apicache.middleware

router
  .get('/', cache('2 minutes'), workoutController.getAllWorkouts)
  .get('/:workoutId', workoutController.getOneWorkout)
  .get('/:workoutId/records', cache('2 minutes'), recordController.getRecordForWorkout)
  .post('/', workoutController.createNewWorkout)
  .delete('/:workoutId', workoutController.deleteOneWorkout)
  .patch('/:workoutId', workoutController.updateOneWorkout)

export default router