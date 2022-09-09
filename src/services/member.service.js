import fs from 'fs/promises'
import { v4 } from 'uuid'
import { createMemberValidate } from '../validators/members-validator.js'

export const createNewMember = async (req) => {
  try {
    createMemberValidate(req.body)
    const db = await fs.readFile('./src/database/db.json', { encoding: 'utf-8' })
    const parsedDB = JSON.parse(db)

    const member = { id: v4(), ...req.body }

    parsedDB.members.push(member)
    await fs.writeFile('./src/database/db.json', JSON.stringify(parsedDB), { encoding: 'utf-8' })

    return member
  } catch (error) {
    throw new Error(error)
  }
}

export const getMemberById = async (body) => {
  try {
    const db = await fs.readFile('./src/database/db.json', { encoding: 'utf-8' })

    const parsedDB = JSON.parse(db)

    return parsedDB.members.find((el) => el.id === body.id)
  } catch (error) {
    console.log('Error occured!', error.message)
  }
}
