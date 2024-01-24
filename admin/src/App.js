import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";


function App() {
   const isAdmin = useSelector((state) => state.user.currentUser.isAdmin);
    // const user = localStorage.getItem('persist:root');
    // const parsedUser =  JSON.parse(JSON.parse(user).currentUser) ;
    // const isAdmin = parsedUser.isAdmin
    
    
   
    
    return (
        <BrowserRouter>
         
            {isAdmin ? (
             <>
               <Topbar />
           
              <div className="container">
              <Sidebar />
              <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/product/:id" element={<Product/>} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/newProduct" element={<NewProduct />} />
                    </Routes>
              </div>
             </>
             ) : (  <Routes>
              <Route path="/login" element={<Login />} />
              </Routes>)
            }
             
        </BrowserRouter>

      
    )
}

export default App;
