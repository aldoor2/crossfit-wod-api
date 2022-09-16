import { Router } from 'express'

import memberController from '../../controllers/member.controller.js'

const router = Router()

router
  .get('/', memberController.getAllMembers)
  .get('/:memberId', memberController.getOneMember)
  .post('/', memberController.createNewMember)
  .patch('/:memberId', memberController.updateOneMember)
  .delete('/:memberId', memberController.deleteOneMember)

export default router