import DB from './db.json' assert {type: "json"}
import { saveToDatabase } from './utils.js'

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

const createNewMember = (newMember) => {
  try {
    const isAlreadyAdded = DB.members.findIndex((member) => (member.email === newMember.email)) > -1
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Member with the email ${newMember.email} already exists`
      }
    }
    DB.members.push(newMember)
    saveToDatabase(DB)
    return newMember
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const updateOneMember = (memberId, changes) => {
  try {
    const isAlreadyAdded = DB.members.findIndex((member) => (member.email === changes.email)) > -1
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Member with the email ${changes.email} already exists`
      }
    }

    const indexForUpdate = DB.members.findIndex((member) => member.id === memberId)
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find member with the id '${memberId}'`,
      }
    }

    const updatedMember = {
      ...DB.members[indexForUpdate],
      ...changes,
      updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    }

    DB.members[indexForUpdate] = updatedMember
    saveToDatabase(DB)
    return updatedMember
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const deleteOneMember = (memberId) => {
  try {
    const indexForDeletion = DB.members.findIndex((member) => member.id === memberId)
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find member with the id '${memberId}'`,
      }
    }
    DB.members.splice(indexForDeletion, 1)
    saveToDatabase(DB)
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

export default {
  getAllMembers,
  getOneMember,
  createNewMember,
  updateOneMember,
  deleteOneMember
}