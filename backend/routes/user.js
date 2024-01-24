import express from 'express'
import { getSingleUser,getAllUser,updateUser,deleteUser,getStats } from '../controller/userController.js'
import { verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorization } from '../jsonToken/verifyToken.js'

const router = express.Router()

router.get('/findOne/:id', getSingleUser)
router.get('/findAll', getAllUser)
router.put('/update/:id',verifyTokenAndAuthorization, updateUser)
router.delete('/delete/:id', deleteUser)
router.get('/stats',getStats)

export default router