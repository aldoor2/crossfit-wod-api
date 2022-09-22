import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

// Metadata info about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Crossfit WOD API", version: "1.0.0" }
  },
  apis: ["src/v1/routes/workout.routes.js", "src/database/Workout.js"]
}

// Docs on JSON format
const swaggerSpec = swaggerJSDoc(options)

// Function to setup our docs
export const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  app.get('/api/v1/docs.json', (req, res) => {
    req.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log(`📃 sVersion 1 Docs are available at http://localhost:${port}/api/v1/docs.json`)
}