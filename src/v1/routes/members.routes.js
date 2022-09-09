import { Router } from 'express'
import { createMember, getMember } from '../../controllers/member.controller.js'

const router = Router()

router.post('/', createMember).get('/:id', getMember)

export default router
