import { useState } from "react";
import "./newProduct.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/apiCall";
import uploadImageToCloudinary from "../../uploadCloudinary";

export default function NewProduct() {
  const [file,setFile] = useState(null)
  const [inputs,setInputs] = useState({})
  const [cat,setCat] = useState([])
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs((prev) => {
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const handleCat = (e) =>{
    setCat(e.target.value.split(","))
  }
  const handleFile = async (e) =>{
    const fileTarget = e.target.files[0]
    console.log(fileTarget)
    const data = await uploadImageToCloudinary(fileTarget)
    console.log(data.url)
    setFile(data.url)
  }
  console.log(file)
  const handleCreate = (e) => {
    e.preventDefault()
    const product = {...inputs,image:file,catogories:cat}
    createProduct(dispatch,product)
  }


  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
      <div className="newProductUploadItem">
          <label>Upload product image</label>
          <input type="file" name="image" accept=".jpg,.jpeg,.png" className="newProductUploadFile" onChange={handleFile}/>
        </div>
        <div className="newProductItem">
          <label>Productname</label>
          <input name="title" type="text" placeholder="Apple" onChange={handleChange} />
        </div>
        <div className="newProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="descriptions..." onChange={handleChange} />
        </div>
        <div className="newProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="100" onChange={handleChange} />
        </div>
        <div className="newProductItem">
          <label>Categories</label>
          <input  type="text" placeholder="jeans,mobile" onChange={handleCat} />
        </div>
        <div className="newProductItem">
          <label>Color</label>
          <input name="color" type="text" placeholder="green" onChange={handleChange} />
        </div>
        
        <div className="newProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="newProductItem">
          <label>Size</label>
          <select name="size" onChange={handleChange}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      
        <button className="newProductButton" onClick={handleCreate}>Create</button>
      </form>
    </div>
  );
}