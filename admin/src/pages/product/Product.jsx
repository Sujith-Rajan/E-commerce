import './product.css'
import Chart from '../../components/chart/Chart.jsx'
import {productSale} from '../../dummyData.js'
import { Publish } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  useState } from 'react'
import { updateProduct } from '../../redux/apiCall.js'



const Product = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [title,setTitle] =useState("")
    const [desc,setDesc] =useState("")
    const [price,setPrice] =useState("")
    const [inStock,setInStock] = useState("")
    

    const productId = location.pathname.split('/')[2]
    const product = useSelector((state)=> state.product.products.find((product)=>product._id === productId))
    const handleUpdate = (e) => {
        e.preventDefault()
       updateProduct(dispatch,productId,{title,desc,price,inStock})
    }
    
  return (
    <div className='product'>
     <div className="productTitleContainer">
        <h1 className='productTitle'>Product</h1>
        <Link to="/newProduct">
            <button className='productAddButton'>Create</button>
        </Link>
     </div>
     <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productSale} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span className='productName'>Banana</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">33123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">In stock:</span>
                    <span className="productInfoValue">no</span>
                </div>
            </div>
        </div>
     </div>
     <div className="productBottom">
        <form action="" className="productFrom">
            <div className="productFromLeft">
                <label htmlFor="">Product Name</label>
                <input type="text" placeholder={product.title} onChange={(e)=> setTitle(e.target.value)}/>
                <label>Product Description</label>
            <input type="text" placeholder={product.desc} onChange={(e)=> setDesc(e.target.value)}/>
            <label>Price</label>
            <input type="text" placeholder={product.price} onChange={(e)=> setPrice(e.target.value)} />
                <label htmlFor="">In Stock</label>
                <select name="inStock" id="inStock" onChange={(e)=> setInStock(e.target.value)}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                </select>
                
            </div>
            <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.image} alt='product' />
                      <label for="file" className='productUpdateIcon'>
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" onClick={handleUpdate}>Update</button>
              </div>
        </form>
     </div>
    </div>
  )
}

export default Product
