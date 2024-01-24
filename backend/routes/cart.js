import express from 'express'
import {createCart,updateCart,deleteCart,getCart,getAllCart} from '../controller/cartController.js'
import { verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorization } from '../jsonToken/verifyToken.js'


const router = express.Router()

router.post('/',createCart)
router.put('/:id',updateCart)
router.delete('/:id',deleteCart)
router.get('/:id',getCart)
router.get('/',getAllCart)

export default router