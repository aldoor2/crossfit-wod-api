import memberService from '../services/member.service.js'

const getAllMembers = (req, res) => {
  try {
    const members = memberService.getAllMembers()
    res.send({ status: 'OK', data: members })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } })
  }
}

const getOneMember = (req, res) => {
  const {
    params: { memberId }
  } = req

  if (!memberId) {
    return res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':memberId' can not be empty" }
    })
  }

  try {
    const member = memberService.getOneMember(memberId)
    res.send({ status: 'OK', data: member })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } })
  }
}

export default {
  getAllMembers,
  getOneMember,
}