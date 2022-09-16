import DB from './db.json' assert {type: "json"}

const getAllMembers = () => {
  try {
    return DB.members
  } catch (error) {
    throw error
  }
}

const getOneMember = (memberId) => {
  try {
    const member = DB.members.find((member) => memberId === member.id)
    if (!member) {
      throw {
        status: 400,
        message: `Can't find member with the id '${workoutId}'`
      }
    }
    return member
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

export default {
  getAllMembers,
  getOneMember,
}