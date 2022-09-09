import { createNewMember, getMemberById } from '../services/member.service.js'

export const createMember = async (req, res, next) => {
  try {
    const member = await createNewMember(req)

    return res.status(200).json({ message: 'Member Created!', member })
  } catch (error) {
    next(error)
  }
}

export const getMember = async (req, res, next) => {
  try {
    const member = await getMemberById(req.params)
    if (!member)
      return res.status(400).json({
        message: 'Member not found!'
      })

    return res.status(200).json({ message: 'Member Found!', member })
  } catch (error) {
    return res.status(500).json({ message: 'Error occured!' })
  }
}
