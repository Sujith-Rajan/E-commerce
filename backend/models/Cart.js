import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true,
        },
        products:[
           
            {
                productid:{type:String},
           
                quantity:{type:Number,default:1}
            }
           
        ]



},
{ timestamps:true }
)
export default mongoose.model("Cart",CartSchema)