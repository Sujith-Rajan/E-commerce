import Order from '../models/Order.js'

//CREATE
export const creataOrder = async (req,res) => {
    const newOrder = new Order(req.body)
    {
        const createNewOrder = await newOrder.save()
        res.status(200).json({message:'New Order added',data:createNewOrder})
    }

}
//UPDATE
export const updateOrder = async (req,res) => {
 const orderId = req.params.orderId
 try{
    const update = await Order.findByIdAndUpdate(orderId,{$set:req.body},{new: true})
    res.status(200).json({message:'Product Updated',data:update})
 }
 catch(error){
    res.status(500).json({message:'Updation Fail',error})
 }
}

//DELETE
export const deleteOrder = async (req,res) => {
    const orderId = req.params.orderId
    try{
        const orderDelete = await Order.findByIdAndDelete(orderId)
        res.status(200).json({message:'Order Deleted',data:orderDelete})
    }
    catch(error){

        res.status(500).json(error)
        
    }
}
//GET USER ORDER
export const getOrder  = async (req,res) => {
    const userId = req.params.userId
    try{
        const order = await Order.find(Order.userId)
        res.status(200).json({message:'Order Found',data:order})
    }
    catch(error){
        res.status(500).json({message:"No order available",error})
    }
}
//GET ALL ORDER
export const getAllOrder = async (req,res) => {
    try{
        const orders = await Order.find()
        res.status(200).json({message:"Orders Found",data:orders})
    }
    catch(error){
        res.status(500).json({message:'No order',error})
    }

}
//GET MONTHLY INCOME
export const getMontlyIncome = async (req,res) =>{
    const date = new Date()
    const lastMonth = new Date (date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date (new Date().setMonth(lastMonth.getMonth() - 1)) 
    console.log(previousMonth)
    console.log(lastMonth);
    console.log(date);
    try{
        const income = await Order.aggregate([
            { $match: {createdAt : {$gte: previousMonth}}},
            { $project: { 
                month:{ $month: "$createdAt"},
                sales: "$amount",
            },
        },
        {
                $group:{
                    _id: "$month",
                    total:{$sum: "$sales"}
                },
            
        },
        ])
        res.status(200).json({message:"Income Listed",data:income})
    }
    catch(error){
        res.status(500).json({message:"No Income",error})
    }
}