
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import { useSelector } from "react-redux"


function App() {
  const user = useSelector((state)=> state.user.currentUser)

  return  <BrowserRouter>
  <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route path="/products/:category" element={<ProductList/>}/>
   <Route path="/product/:id" element={<Product/>}/> 
   <Route path="/home" element={<Home/>}/>
   <Route path="/login" element={user ? <Home/> : <Login/>}/>
   <Route path="/signup" element={user ? <Home/> : <Register/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/success/" element={<Success/>}/>
   <Route path="/cancel" element={<Cancel/>}/>
  </Routes>

 </BrowserRouter>
  
 
}

export default App
