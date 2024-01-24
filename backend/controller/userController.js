import User from "../models/User.js";

/////////////////// Update ///////////////////////////////
export const updateUser = async (req,res) => {
    const id = req.params.id
    try{

        const updateUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({message:'User detail Updated',update:updateUser})
    }
    catch(error){
        res.status(500).json({message:"Can't Upload details",error})
    }
}
////////////////// Delete ///////////////////////////////
export const deleteUser = async (req,res) => {
    const id = req.params.id
    try{
        await User.findByIdAndDelete(id)
        res.status(200).json({message:'Account Deleted'})

    }
    catch(error){
        res.status(500).json({message:"Can't delete account now",error})
    }
}

////////////////// user and admin get user ///////////////
export const getSingleUser = async (req,res) => {
    const id = req.params.id
    try{
        const user =  await User.findById(id).select("-password")
        if(user){
            res.status(200).json({message:'User found',data:user})
        }
        else{
            res.status(404).json({message:'No user'})
        }
    }
    catch(error){
        res.status(500).json({message:'Request Fail',error})
    }
}
////////////////// only admin get allusers ///////////////
export const getAllUser = async (req,res) => {
    const query = req.query.new
    try{
        const users = query 
        ? await User.find().sort({_id:1}).limit(5).select("-password")
        : await User.find().select("-password")
            
        res.status(200).json({message:"Users Found",data:users})
    }
    catch(error){
        res.status(500).json({message:'Request Fail',error})
    }
}

///////////////////// user stats///////////////////////////
export const getStats = async (req,res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    try{
        const data = await User.aggregate([
            {$match: { createdAt: { $gte: lastYear}}},
            {$project: {month: { $month: "$createdAt"}}},
            {$group: {_id: "$month", total: {$sum:1}}}
        ])
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json(error)
    }
}