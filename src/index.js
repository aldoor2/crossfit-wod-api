import express from 'express'

import v1WorkoutRouter from './v1/routes/workout.routes.js'
import v1MemberRouter from './v1/routes/member.routes.js'

// Initialize
const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())

// Routes
app.use('/api/v1/workouts', v1WorkoutRouter)
app.use('/api/v1/members', v1MemberRouter)

app.listen(PORT)
console.log('🚀 Server is running on the port', PORT)