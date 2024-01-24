import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const generateToken = user => {
    return jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_TOKEN,{expiresIn:"4d"})
}
//////////////////////////////////////////////// SIGNUP////////////////////////////////////////////////////
export const signup = async (req,res) => {
    const {firstname,lastname,email,password,confirmpassword} = req.body
    const emailRegex = /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;

    try{
        let user = null
        user = await User.findOne({email})
        if(user){
           
            return  res.status(404).json({message:'Email address already exist'})
        }
       
        if(emailRegex.test(email)){
            if(password === confirmpassword){
           if(passwordRegex.test(password)){
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password,salt)
                user = new User ({
                    firstname,
                    lastname,
                    email,
                    password:hashPassword,
                })
           }
           else{
            return res.status(404).json({message:"Password should contain 8 characters,atleast one lowercase,uppercase ,special symbol and one digit"})
           }
        }
        else{
            res.status(404).json({message:'Password not match'})
        }
        }
        else{
            return res.status(404).json({message:'Email not valid'})
        }

        if(user){
            await user.save()
            res.status(200).json({message:'Registration Successfull'})
        }
    }
    catch(err){
        res.status(500).json({message:'Registration Failed',err})
    }
}
        


//////////////////////////////////////////////// LOGIN ////////////////////////////////////////////////////
export const login = async (req,res) => {
    const {username} = req.body
    try{
        let user = null
        user = await User.findOne({email:username})
      
        if(!user){
            return res.status(404).json({message:'Invalid Email Address'})
        }
       const isPasswordMatch = await bcrypt.compare(req.body.password,user.password)
       if(!isPasswordMatch){
        return res.status(404).json({message:'Invalid Password'})
       }
///////////////////////////////////// GENERATE TOKEN ////////////////////////////////////////////////////
       const token = generateToken(user)
       
       const {password,...rest} = user._doc
       res.status(200).json({message:'Login Success',data:{...rest,token}})
      
    }
    catch(error){
        res.status(500).json({message:'Login Failed',error})
        console.log(error)
    }
}