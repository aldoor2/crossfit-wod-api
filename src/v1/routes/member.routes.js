import { Router } from 'express'
import apicache from 'apicache'

import memberController from '../../controllers/member.controller.js'

const router = Router()
const cache = apicache.middleware

router
  .get('/', cache('2 minutes'), memberController.getAllMembers)
  .get('/:memberId', memberController.getOneMember)
  .post('/', memberController.createNewMember)
  .patch('/:memberId', memberController.updateOneMember)
  .delete('/:memberId', memberController.deleteOneMember)

export default router