import express from 'express'
import {createProduct,updateProduct,deleteProduct,getProduct,getAllProduct} from '../controller/productController.js'
const router = express.Router()

router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/:id', getProduct)
router.get('/', getAllProduct)
export default router



