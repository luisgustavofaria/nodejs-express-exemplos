import { Router } from 'express'
import { verifyAccessToken } from '../../utils/auth'

const router = Router()

router.post('/', verifyAccessToken, (req, res) => {
  res.send('CREATE POST /')
})

router.get('/:id?', verifyAccessToken, (req, res) => {
  //DUAS OPÇÕES: LISTAR TODOS OU APENAS UM
  res.send('GET POST /')
})
export default router