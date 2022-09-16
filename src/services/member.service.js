import { v4 as uuid } from 'uuid'

import Member from '../database/Member.js'

const getAllMembers = () => {
  try {
    const members = Member.getAllMembers()
    return members
  } catch (error) {
    throw error
  }
}

const getOneMember = (memberId) => {
  try {
    const member = Member.getOneMember(memberId)
    return member
  } catch (error) {
    throw error
  }
}

const createNewMember = (newMember) => {
  const memberToInsert = {
    ...newMember,
    id: uuid(),
    createAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }

  try {
    const createdMember = Member.createNewMember(memberToInsert)
    return createdMember
  } catch (error) {
    throw error
  }
}

const updateOneMember = (memberId, changes) => {
  try {
    const updatedMember = Member.updateOneMember(memberId, changes)
    return updatedMember
  } catch (error) {
    throw error
  }
}

const deleteOneMember = (memberId) => {
  try {
    Member.deleteOneMember(memberId)
  } catch (error) {
    throw error
  }
}

export default {
  getAllMembers,
  getOneMember,
  createNewMember,
  updateOneMember,
  deleteOneMember
}