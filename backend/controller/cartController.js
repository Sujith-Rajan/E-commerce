import Cart from '../models/Cart.js'

//CREATE CART
export const createCart = async (req,res) => {
    const newCart = new Cart (req.body)
    console.log(newCart) 
    try{
        const saveCart = await newCart.save()
        res.status(200).json({message:'New Cart Successfully Created'})
    }
    catch(error){
        res.status(500).json({message:'Cannot create new cart'})
    }

}
//UPDATE CART
export const updateCart = async (req,res) => {
    const cartId = req.params.id
    try{
        const updatedCart = await Cart.findByIdAndUpdate(cartId,{$set:req.body},{new:true})
        console.log(updatedCart);
        res.status(200).json({message:'Cart Updated',data:updatedCart})
    }
    catch(error){
        res.status(500).json({message:'Cart Canot be Updated',error})
    }
}


//DELETE CART
export const deleteCart = async (req,res) => {
    const cartId = req.params.id
    try{
        await Cart.findByIdAndDelete(cartId)
        res.status(200).json({message:'Cart Deleted Successfully'})
    }
    catch(error){
        res.status(500).json({message:'Cart cannot be delted',error})
    }
}
//GET CART
export const getCart = async (req,res) => {
    const userid = req.params.id
    try{
        const cart = await Cart.findOne(Cart.userid)
        res.status(200).json({message:'Cart Found',data:cart})
    }
    catch(error){
        res.status(500).json(error)
    }

}
//GET ALL CART
export const getAllCart = async (req,res) => {
    try{
        const cart = await Cart.find()
        res.status(200).json({message:'Listed Carts are',data:cart})
    }
    catch(error){
        res.status(500).json(error)
    }

}