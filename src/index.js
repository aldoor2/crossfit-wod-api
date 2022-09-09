import express from 'express'

import membersRouter from './v1/routes/members.routes.js'
import v1WorkoutRouter from './v1/routes/workout.routes.js'
// Initialize
const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())

// Routes
app.use('/api/v1/workouts', v1WorkoutRouter)
app.use('/api/v1/members', membersRouter)

// Error Middleware
app.use((err, req, res, next) => {
  console.log('Error occured!!!', err)
  res.status(400).json({ message: 'Error occured!', err: err.message })
})
app.listen(PORT, () => console.log('🚀 Server is running on the port', PORT))
