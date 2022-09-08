import DB from './db.json' assert {type: "json"}

const getAllWorkouts = () => DB.workouts

export default {
  getAllWorkouts
}