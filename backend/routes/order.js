import express from 'express'
import {creataOrder,updateOrder,deleteOrder,getAllOrder,getOrder,getMontlyIncome } from '../controller/orderController.js'
import { verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorization } from '../jsonToken/verifyToken.js'

const router = express.Router()
router.post('/',creataOrder)
router.put('/:orderId',updateOrder)
router.delete('/:orderId',deleteOrder)
router.get('/findOne/:userId',getOrder)
router.get('/findAll',getAllOrder)
router.get('/income',verifyTokenAndAdmin, getMontlyIncome)

export default router