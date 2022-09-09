import recordService from '../services/record.service.js'

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId }
  } = req

  if (!workoutId) {
    return res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" }
    })
  }

  try {
    const record = recordService.getRecordForWorkout(workoutId)
    res.send({ status: 'OK', data: record })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } })
  }
}

export default {
  getRecordForWorkout
}