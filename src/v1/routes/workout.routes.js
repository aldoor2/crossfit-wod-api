import { Router } from 'express'
import apicache from 'apicache'

import workoutController from '../../controllers/workout.controller.js'
import recordController from '../../controllers/record.controller.js'

const router = Router()
const cache = apicache.middleware

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get('/', cache('2 minutes'), workoutController.getAllWorkouts)

router.get('/:workoutId', workoutController.getOneWorkout)

router.get('/:workoutId/records', cache('2 minutes'), recordController.getRecordForWorkout)

router.post('/', workoutController.createNewWorkout)

router.delete('/:workoutId', workoutController.deleteOneWorkout)

router.patch('/:workoutId', workoutController.updateOneWorkout)

export default router