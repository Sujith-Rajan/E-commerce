import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import cartRoute from './routes/cart.js'
import productRoute from './routes/product.js'
import orderRoute from './routes/order.js'
import stripeRoute from './routes/stripe.js'

dotenv.config()

const app = express()
const corsOption = {origin: true}
const port = process.env.PORT || 8000


app.get('/test',(req,res)=>{
    res.send("Api working")
})

mongoose.set("strict",false) 
const connectDb =  () => {
    try{
        mongoose.connect("mongodb://127.0.0.1/VastraEcommerce");
        console.log("MongoDb Connected")
    }
    catch(err){
        console.log(err)
    }   
}


////////////////////////////////////////// Middle Wear //////////////////////////////        
 app.use(express.json())
 app.use(cookieParser())
 app.use(cors(corsOption))
 app.use(express.static('public'))
 
////////////////////////////////////////// Routes //////////////////////////////////
app.use('/api/auth', authRoute) 
app.use('/api/user', userRoute)
app.use('/api/cart', cartRoute)
app.use('/api/product', productRoute)
app.use('/api/order', orderRoute)
app.use('/api/payment',stripeRoute)
 


//////////////////////////////////////////////////////////////////////////////////
    
app.listen(port,() => {
    connectDb()
    console.log("Server running.......") 
})



