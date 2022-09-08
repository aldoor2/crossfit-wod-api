
export const getAllWorkouts = (req, res) => {
  res.send('getting all workouts')
}

export const getOneWorkout = (req, res) => {
  res.send(`getting workout ${req.params.workoutId}`)
}

export const createNewWorkout = (req, res) => {
  res.send('creating new workout')
}

export const deleteOneWorkout = (req, res) => {
  res.send(`deleting workout ${req.params.workoutId}`)
}

export const updateOneWorkout = (req, res) => {
  res.send(`updating workout ${req.params.workoutId}`)
}