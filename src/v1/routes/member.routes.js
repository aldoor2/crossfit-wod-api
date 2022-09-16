import { Router } from 'express'

import memberController from '../../controllers/member.controller.js'

const router = Router()

router
  .get('/', memberController.getAllMembers)
  .get('/:memberId', memberController.getOneMember)

export default router