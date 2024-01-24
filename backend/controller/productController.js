import Product from "../models/Product.js";

//CREATE
export const createProduct = async (req,res) => {
    const newProduct = new Product(req.body)
    try{
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    }
    catch(error){
        res.status(500).json({message:'Create Product Failed',error})
    }

}
//UPDATE
export const updateProduct = async (req,res) => {
    const productId = req.params.id 
    try{
        const update = await Product.findByIdAndUpdate(productId,{$set:req.body},{new:true})
        res.status(200).json({message:"Updation Sucesses",data:update})
    }
    catch(error){
        res.status(500).json({message:"Updation Fail",error})
    }
    
}
//DELETE
export const deleteProduct = async (req,res) => {
    const productId = req.params.id
    try{
        await Product.findByIdAndDelete(productId)
        res.status(200).json({message:'Product Deleted'})
    }
    catch(error){
        res.status(500).json({message:"Product cannot deleted",error})
    }
}

//GET PRODUCT
export const getProduct = async (req,res) => {
    const productId = req.params.id
    try{
        const product = await Product.findById(productId)
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message:"No product available",error})
    }
}

//GET ALL PRODUCT
export const getAllProduct = async (req,res) => {
    const qNew = req.query.new
    const qCategory = req.query.category 
    try{
        let products

        if(qNew){
            products = await Product.find().sort({ createdAt: -1}).limit(1)
        }
        else if(qCategory){
            products = await Product.find({
                catogories: {
                    $in : [qCategory],
                },
            })
        }
        else{
             products = await Product.find()
        
        }
       
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({message:"No product available",error})
    }

}
