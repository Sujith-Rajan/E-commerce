import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userid:{type:String,required:true},
        products:[
            {
                productid:{ type:String},
                quantity:{ type:Number, default:1},
            }
        ],
        amount: {type:Number, required:true},
        address:{type:Object,required:true},
        status:{type:String, default:"Pending"},

    },
    { timestamps:true }
)
export default mongoose.model("Order",orderSchema)